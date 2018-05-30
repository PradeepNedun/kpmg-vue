<template id="desktop-navbar-component-template">
    <!-- DESKTOP NAVBAR -->
    <nav 
        class="
			desktop-navbar-component vue-component
			navbar navbar-expand 
			bg-white  
			position-static rounded-0
		"
        v-dev="{isDev: $root.isDev, variant: 'danger' }"
		v-if="vm && vm.logo && vm.navbarNav"
    >
        <!-- NAVBAR BRAND -->
        <logo-image
            v-dev="{isDev: $root.isDev, variant: 'primary' }" 
			v-if="vm.logo"
            :vm="vm.logo" 
        ></logo-image>
        
        <!--NAV LINKS-->
        <navbar-nav
            v-dev="{isDev: $root.isDev, variant: 'danger' }"
            class="mx-auto"
			v-if="vm.navbarNav"
            :vm="vm.navbarNav"
        ></navbar-nav>

        <!-- NAVBAR ICON MENU -->
        <navbar-ikon-menu :vm="vm"></navbar-ikon-menu>
    </nav>
</template>

<script>
import $ from 'jquery';
// 
import LogoImage from '~/components/logo-image'
import NavbarNav from '~/components/navbar-nav'
import NavbarIkonMenu from '~/components/navbar-ikon-menu'

export default {
    props: ['vm'],
    components: {
        LogoImage,
        NavbarNav,
        NavbarIkonMenu
    }
}
</script>

<style lang="scss">

.desktop-navbar-component {
	padding: 0 50px !important;
    .navbar-nav {
        margin-bottom: -25px;
    }
    .navbar-ikon-menu-component {
        margin-bottom: -14px;
        .nav-flyout-fullbleed-component {
            margin-top: -4px;
        }
    }
}

</style>
