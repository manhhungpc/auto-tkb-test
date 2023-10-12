<script lang="ts">
	import '../app.css';
	import { TabGroup, Tab, AppBar, TabAnchor } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<AppBar>
	<svelte:fragment slot="lead" />
	<TabAnchor href="/">
		<span class="brand">FAST SCHEDULE</span>
	</TabAnchor>
	<svelte:fragment slot="trail">
		<TabGroup
			justify="justify-end"
			active="variant-filled-primary"
			hover="hover:variant-soft-primary"
			flex="flex-1 lg:flex-none"
			rounded="rounded-md"
			border=""
			class="bg-surface-100-800-token w-full"
		>
			<TabAnchor href="/">
				<span class="link"> <i class="fa-solid fa-house" /> </span>
			</TabAnchor>
			<TabAnchor href="/how-to">
				<span class="link"> Hướng dẫn </span>
			</TabAnchor>
			<TabAnchor href="/report-error">
				<span class="link"> Báo lỗi </span>
			</TabAnchor>
		</TabGroup>
	</svelte:fragment>
</AppBar>

<slot />

<style>
	.brand {
		font-size: 24px;
	}
	.link {
		font-size: 16px;
	}
</style>
