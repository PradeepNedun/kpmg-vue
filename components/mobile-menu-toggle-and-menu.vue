<template id="mobile-menu-toggle-and-menu-component-template">
    <div 
        class="mobile-menu-toggle-and-menu-component vue-component"
        v-dev="{ isDev: $root.isDev, variant:'success' }"
		v-if="vm"
    >
        <!-- SIDE MENU TOGGLER BUTTON -->
        <mobile-slide-menu-toggle-trigger></mobile-slide-menu-toggle-trigger>

        <!-- SIDE MENU --> 
        <mobile-nav-slide-menu :vm="vm"></mobile-nav-slide-menu>
    </div>
</template>

<script>
import MobileNavSlideMenu from '~/components/mobile-nav-slide-menu'
import MobileSlideMenuToggleTrigger from '~/components/mobile-slide-menu-toggle-trigger'

export default {
    data: function() {
        return {
            isMenuVisible: false
        }
    },
	props: ['vm'],
    components: {
		MobileNavSlideMenu,
		MobileSlideMenuToggleTrigger
	}
}
</script>