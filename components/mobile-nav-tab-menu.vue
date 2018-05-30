<template id="mobile-nav-tab-menu-component-template">
	<div 
		class="
			mobile-nav-tab-menu-component vue-component
			position-relative
		"
		v-if="vm.mobileTabs"
	>
    <!-- USER COLLAPSE -->
	<mobile-nav-tab
		v-for="(tab, index) in vm.mobileTabs"
		v-bind:key=" index + '-mobile-nav-tab'"
		:vm="tab"
        data-parent="#kpmg-mobile-nav-dropdown-menu"
	>
		<!-- USER PROFILE -->
		<mobile-nav-user-profile-tab-content
			v-if="(tab.id === 'user-profile')"
			:vm="vm.accountActionList.flyout.cell1"
		>
		</mobile-nav-user-profile-tab-content>
		
		<!-- SEARCH TAB -->
		<mobile-nav-search-tab-content
			v-else-if="(tab.id === 'search')"
		></mobile-nav-search-tab-content>
		
		<!-- LANGUAGE LOCALE SITES-->
		<mobile-nav-language-locale-tab-content
			v-else-if="(tab.id === 'language-locale')"
			:vm="vm.siteSelectorList.flyout.cell1"
		></mobile-nav-language-locale-tab-content>
		
	</mobile-nav-tab>
</div>

</template>

<script>

import MobileNavTab from '~/components/mobile-nav-tab'
// TAB CONTENT
import MobileNavUserProfileTabContent from '~/components/mobile-nav-user-profile-tab-content'
import MobileNavSearchTabContent from '~/components/mobile-nav-search-tab-content'
import MobileNavLanguageLocaleTabContent from '~/components/mobile-nav-language-locale-tab-content'
//
//
export default {
	props: ['vm'],
    components: {
        MobileNavTab,
		MobileNavUserProfileTabContent,
		MobileNavSearchTabContent,
		MobileNavLanguageLocaleTabContent
    }
}
</script>

<style lang="scss">
	@import "node_modules/bootstrap/scss/functions";
	@import "~assets/scss/bootstrap/custom/_variables";

	.mobile-nav-tab-menu-component {
		div.collapse, div.collapse.showing {
			box-shadow: 0 10px 5px rgba($black, 0.5);
		}
	}
</style>

