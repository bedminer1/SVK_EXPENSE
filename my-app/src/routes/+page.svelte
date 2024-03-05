<script lang="ts">
	import ExpenseInput from '$lib/components/ExpenseInput.svelte'
	import ExpenseDisplayCard from '$lib/components/ExpenseDisplayCard.svelte'
	export let data
	const { records } = data
</script>


<div class="flex flex-col container justify-center items-center gap-4">
	<ExpenseInput />	
	{#each records as record} 
		<ExpenseDisplayCard {record}/>
	{/each}
</div>



