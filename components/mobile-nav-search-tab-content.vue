<template id="mobile-nav-search-tab-content-component-template">
	<div
		class="
			mobile-nav-search-tab-content-component vue-component
			position-relative
			my-5
		"
	>
		<h3 class="text-center">
			\{{$store.state.data.search.serverData.config.placeholder}}
		</h3>
		<div class="
				text-center
				position-relative
			"	
		>
			<navbar-typeahead 
				class="d-inline-block"
			></navbar-typeahead>
			
			<!-- SEARCH BUTTON -->
			<span class="
				search-button
				icon icon-chevron-right
				position-absolute
				bg-success text-white h-100
				"
				@click="search"
			></span>
		</div>
		
	</div>
</template>

<script>

import _ from 'underscore'
import $ from 'jquery'
import NavbarTypeahead from '~/components/navbar-typeahead'

export default {
	components: {
		NavbarTypeahead
	},
	methods: {
		search: search
	}
}

// private functions
function search(evt) {
	var $this, returnedObject;
	//
	$this = this;
	prepareReturnedObject();
	performSearch();
	// private functions
	function performSearch() {
		var NavbarTypeAheadComponent;
		//
		NavbarTypeAheadComponent = _.find($this.$children, findNavbarTypeaheadComopnent);
		//
		NavbarTypeAheadComponent.onEnter(returnedObject);
		// private functions
		function findNavbarTypeaheadComopnent(component) {
			return component.$vnode.componentOptions.tag === 'navbar-type-ahead';
		}
	}
	function prepareReturnedObject() {
		var inputValue;
		//
		inputValue = $($this.$el).find('input', '.type-ahead-component').val();
		returnedObject = {};
		returnedObject.evt = {};
		returnedObject.evt.target = {};
		//
		returnedObject.evt.target.value = inputValue;
		returnedObject.current = -1;
	}
}

</script>

<style lang="scss">
.mobile-nav-search-tab-content-component {
	
	.navbar-typeahead-component {
		width: 90%;
		input {
			border: 1px #999999 solid;
		}
		div.dropdown-menu {
			left: 0px !important;
			right: 0px !important;
			width: 100% !important;
			border-top: none !important;
			top: 29px;
			border:1px solid #3BA8DF !important;
			background-color: #f1f2f3;
			color: #00338d !important;
			ul li{
				padding-left: 0px !important;
				border-bottom: 1px dashed #98C6EA !important;
    			line-height: 1.2 !important
			}
		}
	}
	.search-button {
		bottom:0;
		top:0;
		right:18px;
		padding: 7px;
		cursor: pointer;
		height: 28px !important;
	}
	.search-text{
		font-size: 21px !important;
		color: gray;
	}
	.typeahead-elem  {
        color: #cccccc;
		text-decoration: underline;
		position: absolute;
    	padding-top: 5px;
	}
	input {
        font-size: 16px;
        background: transparent;
        border-width: initial !important;
        border-style: initial !important;
        border-color: transparent !important;
        margin-left: 10px;
	}
	.input-wrapper {
        border: 1px #999999 solid;
        width: 100%;
        height: 30px;
        font-size: 16px;
        text-align: left;
    }
}
</style>