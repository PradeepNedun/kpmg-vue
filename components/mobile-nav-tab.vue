<template id="mobile-nav-tab-component-template">
	<!-- USER COLLAPSE -->
    <div 
        class="
			collapse 
			position-absolute 
			bg-white
			w-100
		"
		v-if="vm"
        :id="vm.id" 
        :aria-labelledby="vm.id" 
    >
		<!-- CONTENT SLOT -->
        <slot></slot>
		
        
		<collapse-cancel-trigger 
			:vm="vm"
		>
		</collapse-cancel-trigger>
        
    </div>
</template>

<script>
import $ from 'jquery'
//
import CollapseCancelTrigger from '~/components/collapse-cancel-trigger'
//
export default {
    props: ['vm'],
	components: {
		CollapseCancelTrigger
	},
	mounted: mountedCallback
}
// private functions
function mountedCallback(){
        $(this.$el).on('show.bs.collapse', function() {
            var collapseId;
            //
            collapseId = this.id;
            $("[data-target='#"+ collapseId +"'][data-toggle=collapse]").removeClass('mb-1');

        })
        $(this.$el).on('hide.bs.collapse', function() {
            var collapseId;
            //
            collapseId = this.id;
            $("[data-target='#"+ collapseId +"'][data-toggle=collapse]").addClass('mb-1');
        })
    }
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
</style>
