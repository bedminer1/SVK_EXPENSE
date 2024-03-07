<script lang="ts">
	import ExpenseInput from '$lib/components/ExpenseInput.svelte'
	import ExpenseDisplayCard from '$lib/components/ExpenseDisplayCard.svelte'

	export let data
	$: ({ records } = data)

	// monthlySum
	$: monthlySum = data?.records.filter(record => parseInt(record.date.split('-')[2]) === currMonth).reduce((accm, curr) => {
		return accm + curr.amount
	}, 0)

	// default month to current month, month picker
	const currDate = new Date()
	let monthPicked: string = (currDate.getMonth() + 1).toString()
	$: currMonth = parseInt(monthPicked) ?? currDate.getMonth() + 1
</script>


<div class="flex flex-col container justify-center items-center gap-4">
	<ExpenseInput />
	<h1 class="h1">Expenses</h1>
	<select class="select w-1/2" name="month" id="month" bind:value={monthPicked}>
		<option value="1">jan</option>
		<option value="2">feb</option>
		<option value="3">mar</option>
		<option value="4">apr</option>
		<option value="5">may</option>
		<option value="6">jun</option>
		<option value="7">jul</option>
		<option value="8">aug</option>
		<option value="9">sep</option>
		<option value="10">oct</option>
		<option value="11">nov</option>
		<option value="12">dec</option>
	</select>	
	{#each records as record}
		{#if parseInt(record.date.split('-')[2]) === currMonth} 
		<ExpenseDisplayCard {record}/>
		{/if}
	{/each}
	<h3 class="h3">total: ${monthlySum.toFixed(2)}</h3>
</div>



