<template id="sub-list-item-component-template">
	<li 
		class="
			sub-list-item-component vue-component 
			list-unstyled 
			px-0 
			mb-1
		"
		v-if="vm"
	>
		<a
			:href="vm.url"
			class="
				text-dark bg-kpmg-light-sky-blue 
				rounded-0 
				py-3 px-4 
				d-block
			"
		>
			\{{ vm.label }}
		</a>
	</li>
</template>

<script>

export default {
    props: ['vm']
}

</script>