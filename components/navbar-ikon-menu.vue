<template id="navbar-ikon-menu-component-template">
    <!-- NAVBAR ICON NAVIGATION -->
    <div 
        class="navbar-ikon-menu-component vue-component mt-2"
        v-dev="{ isDev: $root.isDev, variant: 'success' }"
		v-if="vm"
	>

        <!-- PROFILE ICON WITH NAVFLYOUT DROPDOWN -->
        <ikon-trigger-with-navflyout-dropdown 
            class="d-inline-block position-static"
			v-if="vm.accountActionList"
            :vm="vm.accountActionList"
        >
        </ikon-trigger-with-navflyout-dropdown>
        
        <!-- SEARCH ICON WITH ANIMATED SEARCH BAR -->
        <ikon-trigger-with-animated-search-bar></ikon-trigger-with-animated-search-bar>

        <!-- MAP-MARKER ICON WITH NAVFLYOUT DROPDOWN -->
        <ikon-trigger-with-navflyout-dropdown 
            class="d-inline-block position-static"
			v-if="vm.siteSelectorList"
            :vm="vm.siteSelectorList"
        ></ikon-trigger-with-navflyout-dropdown>        
    </div>  
</template>

<script>
import IkonTriggerWithAnimatedSearchBar from '~/components/ikon-trigger-with-animated-search-bar';
import IkonTriggerWithNavflyoutDropdown from '~/components/ikon-trigger-with-navflyout-dropdown';

export default {
    props: ['vm'],
    components:{
        IkonTriggerWithNavflyoutDropdown,
        IkonTriggerWithAnimatedSearchBar
    }
}
</script>
