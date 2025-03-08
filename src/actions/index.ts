import { ActionError, defineAction } from 'astro:actions'
import { z } from 'zod'
import { Resend } from 'resend'

const { RESEND_API_KEY, RESEND_EMAIL } = import.meta.env
const resend = new Resend(RESEND_API_KEY)

const fromEmail = `<no-reply@resend.dev>`
const subjectTemplate = 'X-NRDEV - Business Email from'

export const server = {
    send: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            surname: z.string(),
            email: z.string().email(),
            message: z.string(),
        }),
        handler: async ({ name, surname, email, message }) => {
            const { data, error } = await resend.emails.send({
                from: `${name} ${fromEmail}`,
                to: RESEND_EMAIL,
                replyTo: `${name} <${email}>`,
                subject: `${subjectTemplate} ${name} ${surname}`,
                text: message,
            })

            if (error) {
                throw new ActionError({
                    code: 'BAD_REQUEST',
                    message: error.message,
                })
            }

            return data
        },
    }),
}