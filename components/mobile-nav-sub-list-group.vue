<template id="mobile-nav-sub-list-group-component-template">
    <!-- MOBILE-MENU NAVIGATION SUBLIST (COLLAPSE) -->
    <ul
        class="
			mobile-nav-sub-list-group-component vue-component 
			px-0 pt-1 
			mb-0  
			collapse 
			rounded-0 
			bg-gray-87
		"
		v-if="vm.viewAll"
        :id="vm.viewAll.label.split(' ').join('-')" 
        data-parent="#kpmg-mobile-nav-dropdown-menu"
    >
        <!-- SUB-LIST ITEM -->
		<sub-list-item
			v-for="(item, key) in vm.links"
			v-bind:key=" key + 'primary-nav-sublist-item' "
			:vm="{url: item.url, label: item.label}"
		></sub-list-item>
    </ul>
</template>

<script>
import $ from 'jquery'

import SubListItem from '~/components/sub-list-item'
//
export default {
    props: ['vm'],
	components: {
		SubListItem
	}
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
</style>
