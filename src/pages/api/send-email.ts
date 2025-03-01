import { Resend } from "resend"

export async function POST({ request }: { request: Request }) {
    const { name, surname, email, message } = await request.json()
    const { RESEND_API_KEY, RESEND_EMAIL } = import.meta.env

    const resend = new Resend(RESEND_API_KEY)

    try {
        const response = await resend.emails.send({
            from: email,
            to: RESEND_EMAIL,
            subject: `${name} ${surname} portfolio message`,
            html: `<p>${message}</p>`,
        })

        return new Response(JSON.stringify(response), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 })
    }
}