<template id="mobile-slide-menu-toggle-trigger-component-template">
	 <span 
		class="mobile-slide-menu-toggle-trigger-component vue-component
			mr-2
		"
		:class="{'inline-icomoon inline-icomoon-menu text-kpmg-blue': !$parent.isMenuVisible, 'icon-close text-kpmg-light-purple': $parent.isMenuVisible }"
		@click="toggleMenu();"
		v-dev="{isDev: $root.isDev, variant: 'danger'}"
	></span>
</template>

<script>
export default {
	methods: {    
		toggleMenu: function() {
			this.$parent.isMenuVisible = !this.$parent.isMenuVisible;
		}
	}
}

</script>

<style lang="scss">
.mobile-slide-menu-toggle-trigger-component {
	font-size: 2em;
}
</style>