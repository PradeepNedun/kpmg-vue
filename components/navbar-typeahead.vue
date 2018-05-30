<template id="navbar-typeahead-component-template">
	
	<type-ahead
		class="
			navbar-typeahead-component vue-component 
		"
		:src="url"
		:getresponse="getResponse"
		:delaytime="parseInt($store.state.data.search.serverData.config.typeaheadDelayTime)"
		:selectfirst="true"
		:onhit="onHit"
		:placeholder="$store.state.data.search.serverData.config.placeholder"
		@keyup.enter="onEnter"
		v-model="inputValue"
		@typeaheadkeyupenter="onEnter"
	></type-ahead>

</template>

<script>
import TypeAhead from '~/components/Typeahead'
import $ from 'jquery'
//
export default {
	components: {
		TypeAhead
	},
	methods: {
		getResponse: getResponse,
		onHit: onHit,
		onEnter: onEnter
	},
	data: function() {
		var $this, url, isMobile;
		//
		$this = this;
		buildUrl();
		//
		return {
			url: url,
			inputValue: '',
			termHints: []
		};
		// private functions
		function buildUrl() {
			url = $this.$store.getters['data/search/getQueryURL'];
		}
	}
}
// private functions
function onEnter(returnedObj) {
	var $this, SELECTION, query;
	//
	$this = this;
	//
	query = returnedObj.evt.target.value;
	SELECTION = (returnedObj.current > -1);
	//
	if (!SELECTION && query) {
		goToSearchPage();
	}
	// private functions
	function goToSearchPage() {
		var href;
		//
		$this.$store.commit('data/search/SET_QUERY', query);
		href = $this.$store.getters['data/search/textQuery_HREF'];
		//
		window.location.href = href;
	}
	
}
function onHit(selectedValue, typeahead, index) {
	var $this;
	//
	$this = this;
	//
	if(selectedValue) {
		$this.inputValue = selectedValue;
		goToSearchPage();
	}
	//
	function goToSearchPage() {
		var href;
		//
		buildHref();
		//
		window.location.href = href;
		function buildHref(){
			var domain, selectedItem, queryData;
			//
			domain = $this.$store.state.data.siteInfo.assetsDomain;
			selectedItem = $this.termHints[index];
			$this.$store.commit('data/search/SET_SELECTED_ITEM', selectedItem);
			//
			href = $this.$store.getters['data/search/selectedItemSearch_HREF'];
		}
	}
}
function getResponse(response){
	var $this, results;
	//
	$this = this;
	getResultsAndSetTermHints();
	//
	return results;
	// private functions
	function getResultsAndSetTermHints() {
		if (response.termHints && response.termHints.length) {
			var termHints;
			//
			termHints = response.termHints;
			//
			$this.termHints = termHints;
			results = termHints.map(mapResults);
		} else {
			results = [];
			$this.termHints = [];
		}
		// private functions
		function mapResults(item) {
			return item.name;
		}
	}
}

</script>
<style>
@media screen and (min-width:641px) {
    .navbar-typeahead-component {
		position: absolute !important;
		top: 0;
    	right: -30px;
	}
}
</style>

