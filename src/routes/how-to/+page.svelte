<script lang="ts">
	import { TabGroup, Tab, Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	let tab: number = 0;
</script>

<main class="flex justify-center pt-10">
	<Accordion width="w-1/2" rounded="none" autocollapse={true} class="bg-surface-900">
		<AccordionItem open>
			<svelte:fragment slot="lead"><i class="fa-solid fa-file-pdf" /></svelte:fragment>
			<svelte:fragment slot="summary">Lấy file pdf đăng ký học</svelte:fragment>
			<svelte:fragment slot="content">(content)</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead">
				<i class="fa-solid fa-arrow-right-arrow-left" />
			</svelte:fragment>
			<svelte:fragment slot="summary">Đồng bộ dữ liệu với trang dangkyhoc.vnu</svelte:fragment>
			<svelte:fragment slot="content">
				<TabGroup justify="justify-center">
					<Tab bind:group={tab} name="tab1" value={0}>
						<svelte:fragment slot="lead"><i class="fa-solid fa-globe" /></svelte:fragment>
						<span>Qua web</span>
					</Tab>
					<Tab bind:group={tab} name="tab2" value={1}>
						<svelte:fragment slot="lead"><i class="fa-brands fa-github" /></svelte:fragment>
						<span>Qua GitHub</span>
					</Tab>
					<!-- Tab Panels --->
					<svelte:fragment slot="panel">
						{#if tab === 0}
							(tab panel 1 contents)
						{:else if tab === 1}
							(tab panel 2 contents)
						{/if}
					</svelte:fragment>
				</TabGroup>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</main>
