<script lang="ts">
	import { goto } from '$app/navigation';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import Loading from 'src/components/Loading.svelte';
	import { scheduleData } from 'src/utils/store';

	let uploading = false,
		lastSyncDate = new Date();
	async function uploadFile(e: Event) {
		//@ts-ignore
		const pdfFile = e.target.files[0];
		uploading = true;

		const formData = new FormData();
		formData.append('pdfFile', pdfFile);

		const responseData = await fetch('/api/upload', {
			method: 'POST',
			body: formData
		});
		const res = await responseData.json();
		scheduleData.set(res.data);

		// setTimeout(() => {
		// 	uploading = false;
		// 	goto('/result');
		// }, 1000);
	}
</script>

<div class="main">
	<p>Đồng bộ với web dangkyhoc lần cuối vào {lastSyncDate}</p>
	<h2 class="h2">🤔 Lấy thời khóa biểu như thế nào?</h2>
	<ol class="list my-8">
		<li>
			<span>1.</span>
			<span class="flex-auto"> Lưu kết quả đăng ký học thành file .pdf. </span>
		</li>
		<li class="link-instruct">
			<span><i class="fa-solid fa-arrow-up-right-from-square" /></span>
			<a href="/how-to" target="_blank">Xem hướng dẫn lấy file tại đây </a>
		</li>
		<li>
			<span>2.</span>
			<span class="flex-auto"> Upload/kéo thả file pdf vừa rồi vào đây </span>
		</li>
		<li>
			<span>3.</span>
			<span class="flex-auto">
				Ấn nút và chờ đợi mình xử lý nhé <i class="fa-solid fa-heart" style="color: #fe251b;" />
			</span>
		</li>
	</ol>
	<div class="file-upload">
		{#if uploading}
			<div class="flex items-center justify-center gap-3 text-2xl loading-holder">
				Đang upload và xử lý <Loading />
			</div>
		{:else}
			<FileDropzone name="files" accept="application/pdf" padding="py-16" on:change={uploadFile}>
				<svelte:fragment slot="lead">
					<i class="fa-solid fa-file-arrow-up fa-2xl" />
				</svelte:fragment>
				<svelte:fragment slot="message">
					Tải lên hoặc kéo/thả file kết quả đăng ký môn học
				</svelte:fragment>
				<svelte:fragment slot="meta">Hỗ trợ định dang .pdf</svelte:fragment>
			</FileDropzone>
		{/if}
	</div>
</div>

<style>
	.main {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.file-upload {
		width: 55vw;
	}

	.link-instruct {
		color: #0fba81;
	}

	.link-instruct:hover {
		text-decoration: underline;
	}

	.loading-holder {
		width: 55vw;
		padding: 5rem 0;
		background-color: #394770;
		border-radius: 12px;
	}
</style>
