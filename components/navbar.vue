<template id="navbar-component-template">

	<div 
		class="
			navbar-component vue-component
			navbar-wrapper position-relative
		"
		v-if="vm"
	>
    <!-- DESKTOP NAVBAR -->
    <div 
		class="
			px-0 my-1
		" 
		v-dev="{isDev: $root.isDev, variant: 'default'}"
	>
      <desktop-navbar 
        class="
			d-none d-lg-flex 
			pb-2
		" 
        :vm="vm"
      ></desktop-navbar>
    </div>

    <!-- MOBILE NAVBAR -->
    <mobile-navbar 
		:vm="vm"
	>
	</mobile-navbar>
  </div>

</template>

<script>
import DesktopNavbar from '~/components/complex/desktop-navbar'
import MobileNavbar from '~/components/mobile-navbar'

export default {
	props: ['vm'],
	components: {
        DesktopNavbar,
        MobileNavbar
    }
}
</script>

