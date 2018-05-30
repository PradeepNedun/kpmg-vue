<template id="mobile-nav-collapse-trigger-component-template">
    
    <!-- PRIMARY-MENU-LIST-ITEM + COLLAPSE TRIGGER -->
    <div 
        class="mobile-nav-collapse-trigger-component vue-component bg-white w-100 d-table"
		v-if="vm && vm.i18nLabel"
    >
        <!-- MENU-LIST-ITEM -->
        <div 
            class="d-table-cell"
        >
            <a
                class="h6 
					p-3 m-0 
					text-kpmg-blue 
					d-block
				" 
                :href="'#'"
				v-if="vm.i18nLabel"
            >
                \{{ vm.i18nLabel }}
            </a>
        </div>

        <!-- COLLAPSE-TRIGGER FOR SUB-LIST -->
        <div 
            class="d-table-cell text-center px-3 collapsed border border-right-0 border-top-0 border-bottom-0" 
            data-toggle="collapse"
			v-if="vm && vm.flyout && vm.flyout.cell1 && vm.flyout.cell1.viewAll"
            :data-target="'#' + vm.flyout.cell1.viewAll.label.split(' ').join('-')"
        >
            <span class="icon"></span>
        </div>
    </div>

</template>

<script>
export default {
    props: ['vm']
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
//
.mobile-nav-collapse-trigger-component {
    [data-toggle=collapse] {
        width: 15%;
        cursor: pointer;
        // SHOWN STATE
        span.icon{
            font-size: 1.5em;
            &:before {
                content: "\e90e";
                color: $kpmg-light-purple;
            }
        }
        // COLLAPSED STATE
        &.collapsed {
            span.icon {
                &:before {
                    content: "\e90c";
                    color: $kpmg-blue;
                }
            }
        }
    }
}

</style>


