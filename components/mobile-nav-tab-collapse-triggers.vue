<template id="mobile-nav-tab-collapse-triggers-component-template">
    <ul 
        class="mobile-nav-tab-collapse-triggers-component vue-component 
			row 
			p-0 m-0
		" 
        v-dev="{ isDev: $root.isDev, variant: 'kpmg-blue' }"
    >
        <li 
           class="
			tab-list-item
			col
			d-block
			btn  
			p-0 
			rounded-0 
			collapsed 
			bg-white 
			mb-1
			border-0
		"
            :class="{'mx-0': index === 'userProfile' || index == 'languageLocale', 'mr-1 ml-1': index === 'search'}"
            v-for="(navLink, index) in vm.mobileTabs"
            v-bind:key="index + '-mobile-nav-tablist'"
            v-dev="{ isDev: $root.isDev, variant: 'warning' }"
            data-toggle="collapse" 
            :data-target=" '#' + navLink.id "
            role="button"
			v-if="navLink.isVisible"
        >
            <i class="icon py-1" :class="navLink.icon"></i>
        </li>
    </ul>
</template>

<script>
import $ from 'jquery'
//
export default {
	props: ['vm']
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
/**/
ul.mobile-nav-tab-collapse-triggers-component {
    li {
        color: $kpmg-blue;        
        &.collapsed {
            color: $gray-87;
        }
		&.tab-list-item {
			font-size: 2em;
			
		}
    }
}
</style>
