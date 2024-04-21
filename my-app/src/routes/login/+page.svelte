<script lang="ts">
    import { superForm, type FormOptions } from 'sveltekit-superforms'

    export let data

    const { form, errors, message, reset, capture, restore, enhance } = superForm(data.form, {
        resetForm: false
    })

    export const snapshot = { capture, restore }
</script>

<div class="h-full flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="?/login" method="post" use:enhance >
        <label class="label">
            <span>E-Mail</span>
            <input class="input" name="email" bind:value={$form.email} type="email" placeholder="mail@example.com"/>
            {#if $errors.email}
                <span>{$errors.email}</span>
            {/if}
        </label>
        <label class="label mt-4">
            <span>Password</span>
            <input class="input mb-3" name="password" bind:value={$form.password} type="password" placeholder="******"/>
            {#if $errors.password}
                <span>{$errors.password}</span>
            {/if}
        </label>
        {#if $message}<h>{$message}</h>{/if}
        <button class="btn variant-filled w-full mt-4" type="submit">Login</button>
    </form>
</div>