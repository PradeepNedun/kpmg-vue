<template id="mobile-secondary-nav-list-component-template">
    <div 
        class="
			mobile-secondary-nav-list-component vue-component 
			bg-white
		"
		v-if="vm"
    >
        <a 
			:href="vm.linkURL"
			class="
				h6 
				mb-0 
				d-block 
				text-kpmg-blue 
				p-3
			"
			v-if="vm.label"
		>
            \{{  vm.label }}
        </a>
    </div>
</template>

<script>
	export default {
		props: ['vm']
	}
</script>

<style lang="scss">

</style>
