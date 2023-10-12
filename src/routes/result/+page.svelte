<script lang="ts">
	import { exportExcel } from '$lib/xlsx';
	import { scheduleData } from 'src/utils/store';

	let downloaded = false,
		showSync = false;
	async function downloadExcel() {
		try {
			const buffer = await exportExcel($scheduleData);
			const blob = new Blob([buffer]);
			const url = URL.createObjectURL(blob);

			const a = document.createElement('a');
			a.href = url;
			a.download = 'test_TKB.xlsx';
			a.click();

			URL.revokeObjectURL(url);
		} catch (err) {
			console.log(err);
		}
	}
</script>

<main>
	<button type="button" class="btn variant-filled" on:click={downloadExcel}>
		<span><i class="fa-solid fa-download" /></span>
		<span>File .xlsx sẵn sàng tải về</span>
	</button>
	<a href="/">Home</a>
	<button class="btn variant-filled" on:click={() => (showSync = true)}>Show sync</button>
	{#if showSync}
		<iframe src="http://dangkyhoc.vnu.edu.vn/dang-nhap" title="dkyhoc" frameborder="0" />
	{/if}
</main>

<style>
	main {
		padding-top: 12vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
