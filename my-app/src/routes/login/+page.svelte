<script lang="ts">
    import { superForm } from 'sveltekit-superforms'
    import { ProgressRadial } from '@skeletonlabs/skeleton'

    export let data

    const { form, errors, message, capture, restore, enhance, submitting, delayed } = superForm(data.form, {
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
        <label class="label my-4">
            <span>Password</span>
            <input class="input mb-3" name="password" bind:value={$form.password} type="password" placeholder="******"/>
            {#if $errors.password}
                <span>{$errors.password}</span>
            {/if}
        </label>
        {#if $message}<h>{$message}</h>{/if}
        <button class="btn variant-filled-primary w-full my-4" disabled={$submitting} type="submit">Login</button>
        {#if $delayed} 
            <p class="text-center">Loading page...</p>
        {/if}
    </form>
</div>