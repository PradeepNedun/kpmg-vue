<template id="mobile-navbar-component-template">
    <header 
        class="mobile-navbar-component vue-component d-lg-none d-xl-none"
		v-if="vm"
    >
        <nav class="navbar fixed-top bg-white py-1 px-1"
            v-dev="{isDev: $root.isDev, variant: 'danger'}"
        >
            <!-- LOGO IMAGE -->
            <logo-image 
                v-dev="{isDev: $root.isDev, variant: 'primary' }" 
                :vm="vm.logo" 
				v-if="vm.logo"
            ></logo-image>
            
            <!-- LEFT SLIDE MENU -->
            <mobile-menu-toggle-and-menu
				:vm="vm"
			></mobile-menu-toggle-and-menu>
        </nav>
    </header>
</template>

<script>
import LogoImage from '~/components/logo-image'
import MobileMenuToggleAndMenu from '~/components/mobile-menu-toggle-and-menu'

export default {
	props:['vm'],
    components: {
        LogoImage,
        MobileMenuToggleAndMenu
    }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
//
.mobile-navbar-component {

}
</style>

