<script lang="ts">
	const date = new Date()
	const defaultDate = date.toLocaleString('en-US',{hour12:false}).split(",")
	const day = defaultDate[0].split('/')
	const formattedDate = day[2] + '-' + day[1] + '-' + day[0]
</script>

<form class="w-1/3 gap-3 flex flex-col justify-center items-center h-1/5" method="post" action="?/create">
	<input class="input rounded-sm" required id="title" name="title" title="Title" type="text" placeholder="Enter Title" />
	<select class="select px-5 rounded-sm" id="select" name="category">
		<option value="FOOD">food</option>
		<option value="SHOPEE">shopee</option>
		<option value="GYM">gym</option>
	</select>
	<input class="input rounded-sm" required id="amount" name="amount" title="Amount" type="text" placeholder="Enter Amount" />
	<input class="hidden" id="date" name="date" type="text" value={formattedDate}/>
	<button class="btn btn-sm variant-filled-primary" type="submit">Add Expence</button>
</form>