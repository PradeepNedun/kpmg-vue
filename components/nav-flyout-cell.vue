<template id="nav-flyout-cell-component-template">
    <div 
        class="nav-flyout-cell-component vue-component col col-lg-4 col-xl-3 p-1"
		v-if="vm && vm.type"
    >
        <!-- CARD LINK -->
        <card-link 
            v-if="vm.type && vm.type === 'card-link'" 
            :vm="vm"
        ></card-link>
        <!-- PROMOTIONAL -->
        <promotional 
            v-else-if="vm.type && vm.type === 'promotional' " 
            :vm="vm"
        ></promotional>
		<!-- INTEREST SUMMARY -->
        <interest-summary 
            v-else-if="vm.type && vm.type === 'interest-summary' " 
            :vm="vm"
        ></interest-summary>
        <!-- SITE-SELECTOR-LIST -->
        <site-selector-list
            v-else-if="vm.type && vm.type === 'site-selector-menu' "
			:vm="vm"
        ></site-selector-list>
        <!-- NAV-LIST -->
        <nav-list 
            v-else-if="vm.type && vm.type === 'nav-list' " 
            :vm="vm"
        ></nav-list>
    </div>
</template>

<script>
import NavList from '~/components/nav-list'
import CardLink from '~/components/card-link'
import SiteSelectorList from '~/components/site-selector-list'
import Promotional from '~/components/promotional'
import InterestSummary from '~/components/interest-summary'

export default {
    props: ['vm'],
    components: {
        NavList,
        CardLink,
        SiteSelectorList,
        Promotional,
		InterestSummary
    }
}
</script>
