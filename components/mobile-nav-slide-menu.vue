<template id="mobile-nav-slide-menu-component-template">
    <!-- SLIDE MENU-CONTAINER -->
    <div 
        id="kpmg-mobile-nav-dropdown-menu"
        class="
			mobile-nav-slide-menu-component vue-component 
			position-absolute 
			animated 
			bg-gray-87
		"
        :class="{ 'slideInLeft': $parent.isMenuVisible, 'slideOutLeft': !$parent.isMenuVisible }"
        v-dev="{isDev: $root.isDev, variant:'success'}"
    >
        <!--  MOBILE NAVIGATION LIST -->
        <ul class="list-unstyled mb-0 pb-2">
            
            <!-- TABS WITH TAB CONTENT -->
            <mobile-nav-menu-tabs :vm="vm"></mobile-nav-menu-tabs>

            <!-- MENU WITH SUB-LIST COLLAPSED -->
            
			<mobile-primary-nav-list 
				v-for="(item, index) in vm.navbarNav"
				v-bind:key="index + '-primary-nav-item' "
				:vm="item"
				:class="{'mt-1': index != 'item0'}"
			>
			</mobile-primary-nav-list>
		

            <!-- MENU WITHOU SUB-LIST -->
            <li 
                class="mt-1"
				v-if="vm.secondaryNav"
                v-for="(listItem, idx) in vm.secondaryNav"
                v-bind:key="idx + '-mobile-primary-nav-list'"
            >
                <mobile-secondary-nav-list
                    :vm="listItem"
                ></mobile-secondary-nav-list>
            </li>
        </ul>
    </div>
</template>

<script>
import MobileNavMenuTabs from '~/components/mobile-nav-menu-tabs'
import MobileSecondaryNavList from '~/components/mobile-secondary-nav-list'
import MobilePrimaryNavList from '~/components/mobile-primary-nav-list'
//
export default {
    components: {
		MobileNavMenuTabs,
        MobilePrimaryNavList,
        MobileSecondaryNavList
    },
	props:['vm']
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
//
.mobile-nav-slide-menu-component {
    overflow: auto;
    max-height: calc(100vh - 54px);
    top:54px;
    left: 0;
    right: 0;
}
</style>

