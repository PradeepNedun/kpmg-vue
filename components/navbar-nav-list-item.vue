<template id="navbar-nav-list-item-component-template">
    <li 
        class="navbar-nav-list-item-component vue-component nav-item d-inline-block p-3"
        @mouseover="toggleActive"
        @mouseout="toggleActive"
		v-if="vm"
    >
        <a
            class="nav-link text-kpmg-blue"
            :href="vm.linkURL + '.html' "
			v-if="vm.i18nLabel"
        >
			\{{vm.i18nLabel}}
        </a>
        <!-- FLYOUT ON MOUSEOVER/HIDE ON MOUSEOUT 
		-->
		
        <nav-flyout-fullbleed :vm="vm.flyout" class="d-none"></nav-flyout-fullbleed>
    </li>
</template>

<script>
import $ from 'jquery'
import NavFlyoutFullbleed from '~/components/nav-flyout-fullbleed'

export default {
    props: ['vm'],
    components: {
        NavFlyoutFullbleed
    },
    methods: {
		toggleActive: function(evt) {
			var targetElem, isActive;
			//
			targetElem = evt.currentTarget;
			isActive = $(targetElem).hasClass('active');
			//
			if (isActive) {
				$(targetElem)
					.removeClass('active');
			} else {
				$(targetElem)
					.addClass('active');
			}
		}
	}
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
// 
li.navbar-nav-list-item-component.active {
    background-color:$gray-96;
    .nav-flyout-fullbleed-component {
        display: block !important;
    }
}
</style>
   