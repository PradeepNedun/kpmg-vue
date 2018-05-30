<template id="navbar-nav-component-template">
	<ul 
        class="navbar-nav-component vue-component navbar-nav"
		v-if="vm"
    >
	    <navbar-nav-list-item
			v-for="(link, index) in vm"
			v-bind:key="index + 'navbar-nav-list-item' "
			v-if="link"
			:vm="link"
		></navbar-nav-list-item>
	</ul>
</template>

<script>
import $ from 'jquery'
import NavbarNavListItem from '~/components/navbar-nav-list-item';
//
export default {
    props: ['vm'],
	components: {
		NavbarNavListItem
	}
}

</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
// 
ul.navbar-nav-component {
	li.active {
		background-color:$gray-96;
		.nav-flyout-fullbleed-component {
			display: block !important;
		}
	}
}
</style>
