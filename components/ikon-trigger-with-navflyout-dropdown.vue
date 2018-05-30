<template id="ikon-trigger-with-navflyout-dropdown-component-template">
    <div
        class="ikon-trigger-with-navflyout-dropdown-component vue-component dropdown"
        v-dev="{isDev: $root.isDev, variant: 'primary' }"
		v-if="vm && vm.isVisible"
    >
        <!-- DROPDOWN TOGGLE -->
        <span 
            class="px-0 py-1 
                text-kpmg-blue 
                icon icon-fw
                cursor-pointer dropdown-trigger"
            data-toggle="dropdown"
            v-if="vm && vm.iconStyle"
            :class="vm.iconStyle"
        >
        </span>

        <!-- CUSTOM FULL BLEED DROPDOWN MENU -->
        <nav-flyout-fullbleed v-if="vm.flyout" :vm="vm.flyout" class="dropdown-menu"></nav-flyout-fullbleed>
    </div>
</template>

<script>
import NavFlyoutFullbleed from '~/components/nav-flyout-fullbleed'

export default {
    props: ['vm'],
    components: {
        NavFlyoutFullbleed 
    }
}
</script>

<style lang="scss">
    @import "node_modules/bootstrap/scss/functions";
    @import "~assets/scss/bootstrap/custom/_variables";
    //
    .ikon-trigger-with-navflyout-dropdown-component {
        span.icon {
            font-size: 30px;
        }
        &.show {
            .dropdown-trigger {
                // DESIGN
                background-color: $gray-96;
            }
        }
        .cursor-pointer {
            // DESIGN
            cursor: pointer;
        }
        .nav-flyout-fullbleed-component {
            // POSITION
            &.dropdown-menu {
                // POSITION
                border-top: none;
            }
        }
    }
</style>

