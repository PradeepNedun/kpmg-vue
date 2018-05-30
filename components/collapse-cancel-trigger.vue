<template id="collapse-cancel-trigger-component-template">
    <h3 
        class="
			collapse-cancel-trigger-component vue-component
			text-right
			mb-4
		" 
		@click="closeCollapse"
        v-dev="{ isDev: $root.isDev, variant: 'light-purple' }"
		v-if="vm"
    >
		<hr />
        <span class="text-kpmg-blue">
			\{{ vm.closeTabLabel }}
		</span>
        <span class="
			icon icon-close
			m-2
			text-kpmg-light-purple
		"></span>
    </h3>
</template>

<script>
import $ from 'jquery'
//

export default {
	props:['vm'],
    methods: {
        closeCollapse: function (evt) {
            $(evt.target).parents('.collapse').collapse('hide');
        }
    }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
//
h3.collapse-cancel-trigger-component {
    cursor: pointer;
}
</style>

