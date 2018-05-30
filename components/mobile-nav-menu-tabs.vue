<template id="mobile-nav-menu-tabs-component-template">
	<li 
		class="
			mobile-nav-menu-tabs-component vue-component
			mt-1 
			bg-gray-87
		">
		<!-- COLLAPSE TRIGGERS -->
		<mobile-nav-tab-collapse-triggers :vm="vm"></mobile-nav-tab-collapse-triggers>

		<!-- MOBILE TABS -->
		<mobile-nav-tab-menu :vm="vm"></mobile-nav-tab-menu>
	</li> 
</template>
 
<script>
import MobileNavTabMenu from '~/components/mobile-nav-tab-menu'
import MobileNavTabCollapseTriggers from '~/components/mobile-nav-tab-collapse-triggers'
//
export default {
	components: {
		MobileNavTabCollapseTriggers,
		MobileNavTabMenu
	},
	props:['vm']
}
</script>