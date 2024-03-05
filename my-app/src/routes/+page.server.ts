import PocketBase from "pocketbase";
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from "$env/static/private";

export const actions = {
    create: async ({ request }) => {
        const pb = new PocketBase(SECRET_URL)
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)

        const form = await request.formData()
    }
}