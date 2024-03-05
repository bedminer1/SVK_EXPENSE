<script lang="ts">
    import { enhance } from "$app/forms";

    export let record: Expense
</script>

<div class="card p-2 w-1/3">
    <header class="card-header">
        {record.category}
        <div class="float-right">
            <form action="?/delete" method="post" use:enhance>
                <input type="hidden" class="id" name="id" value={record.id}>
                <button type="submit" class="btn btn-sm variant-filled-error">Delete</button>
            </form>
        </div>
    </header>
    <section class="p-4">
        <p>{record.title}</p>
        <br>
        <p>${record.amount.toFixed(2)}</p>
    </section>
</div>