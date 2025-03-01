import { ActionError, defineAction } from 'astro:actions'
import { z } from 'zod'
import { Resend } from 'resend'

const { RESEND_API_KEY, RESEND_EMAIL } = import.meta.env
const resend = new Resend(RESEND_API_KEY)

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
                from: `${name} <no-reply@resend.dev>`,
                to: RESEND_EMAIL,
                replyTo: `${name} <${email}>`,
                subject: `X-NRDEV - Business Email from ${name} ${surname}`,
                text: message,
            })

            console.log(data)

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