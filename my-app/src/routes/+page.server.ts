import PocketBase from "pocketbase";
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from "$env/static/private";

export const actions = {
    create: async ({ request }) => {
        const pb = new PocketBase(SECRET_URL)
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)

        const form = await request.formData()
        const title = form.get('title') as string ?? ""
        const category = form.get('title') as string ?? ""
        const amount = form.get('amount') as unknown as number ?? 0
        const date = form.get('date') as string ?? ""

        const newRecord: ExpenseInput = {
            title,
            category,
            amount,
            date
        }

        const record = await pb.collection('EXPENSES').create(newRecord)
    }
}