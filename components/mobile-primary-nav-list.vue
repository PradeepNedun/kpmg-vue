<template id="mobile-primary-nav-list-component-template">
    <li 
        class="mobile-primary-nav-list-component vue-component bg-gray-87 list-unstyled mb-0" 
        v-if="(vm.flyout.cell1.type === 'nav-list')"
    >
            <!-- COLLAPSE TRIGGER -->
            <mobile-nav-collapse-trigger
                :vm="vm"
            >
            </mobile-nav-collapse-trigger>

            <!-- COLLAPSE MENU   -->
            <mobile-nav-sub-list-group 
                :vm="vm.flyout.cell1"
            ></mobile-nav-sub-list-group>
    </li>
</template>

<script>

import MobileNavCollapseTrigger from '~/components/mobile-nav-collapse-trigger'
import MobileNavSubListGroup from '~/components/mobile-nav-sub-list-group'

export default {
    props: ['vm'],
    components: {
        MobileNavCollapseTrigger,
        MobileNavSubListGroup
    }
}

</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";

</style>

