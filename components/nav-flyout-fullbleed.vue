<template id="nav-flyout-fullbleed-component-template">
    <!-- FLYOUT OUTER CONTAINER -->
    <div 
        class="nav-flyout-fullbleed-component vue-component bg-gray-96 position-absolute w-100 py-2 rounded-0"
        v-dev="{isDev: $root.isDev, variant: 'info'}"
		v-if="vm"
    >
        <!-- FLYOUT INNER GRID -->
        <div class="container">
            <!-- FLYOUT-CELLS CONTAINER -->
            <div class="row mx-auto px-0 justify-content-center">
                <!-- CELL 1 -->
                <nav-flyout-cell
					v-if="vm.cell1"
                    :vm="vm.cell1"
                ></nav-flyout-cell>

                <!-- CELL 2 -->
                <nav-flyout-cell 
					v-if="vm.cell2"
                    :vm="vm.cell2" 
                ></nav-flyout-cell>

                <!-- CELL 3 -->
                <nav-flyout-cell
					v-if="vm.cell3"
                    :vm="vm.cell3" 
                ></nav-flyout-cell>
            </div>
        </div>
    </div>
</template>

<script>
import NavFlyoutCell from '~/components/nav-flyout-cell'

export default {
    props: ['vm'],
    components: {
        NavFlyoutCell
    }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
//
.nav-flyout-fullbleed-component {
    // DESIGN
    box-shadow: 0px 11px 13px rgba($black, 0.5);
    // LAYER PRIORITY
    z-index: 100;
    // POSITIONING
    left: 0;
    &.dropdown-menu {
        // to override the border given by bootstrap .dropdown-menu
        border: 0;
    }
}
</style>
