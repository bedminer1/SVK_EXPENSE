<script lang="ts">
    export let data
	export let form
</script>

<div class="h-full flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
    {#if form?.fail}
        <div class="variant-soft-error px-4 py-2 mb-2 rounded-token">
            {form.message}
        </div>
    {/if}
    <form action="?/login" method="post">
        <label class="label">
            <span>E-Mail</span>
            <input class="input" name="email" title="E-Mail" type="email" placeholder="mail@example.com" required />
        </label>
        <label class="label mt-4">
            <span>Password</span>
            <input class="input" name="password" title="Password" type="password" placeholder="******" required />
        </label>
        <button class="btn variant-filled w-full mt-4" type="submit">Login</button>
    </form>
</div>