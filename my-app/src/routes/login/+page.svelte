<script lang="ts">
    import { superForm } from 'sveltekit-superforms'

    export let data

    const { form, errors, constraints, message } = superForm(data.form)
</script>

<div class="h-full flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="?/login" method="post">
        <label class="label">
            <span>E-Mail</span>
            <input class="input" name="email" bind:value={$form.email} type="email" placeholder="mail@example.com" />
            {#if $errors.email}
                <span>{$errors.email}</span>
            {/if}
        </label>
        <label class="label mt-4">
            <span>Password</span>
            <input class="input" name="password" bind:value={$form.password} type="password" placeholder="******"  />
            {#if $errors.password}
                <span>{$errors.password}</span>
            {/if}
        </label>
        {#if $message}<h3>{$message}</h3>{/if}
        <button class="btn variant-filled w-full mt-4" type="submit">Login</button>
    </form>
</div>