<template>
<div class="template-wrapper home-page-template bs4">
  <div id="navigation-v2" class="bs4">
    <!-- NAVBAR -->
    <navbar :vm="$store.state.data.navigation"></navbar>
	
  </div>
  
  <div class="container">
	<div class="row">
		<div class="col-3">
			<interest-summary 
				:vm='{
					"title": "Personalize your content",
					"includesText": "Your interests include",
					"summaryList": [
						"52 industries",
						"16 topics",
						"0 services",
						"2 countries"
					],
					"selectText": "Select topics and industries youre interested in to help us provide content tailored for you.",
					"label": "Select Interest",
					"linkUrl": "interest.html",
					"linkUrl": "interest.html"
				}'
			></interest-summary>
		</div>
	</div>
  </div>
  
  
    <!-- HERO CAROUSEL 
    <hero-carousel
      :vm="$store.state.data.content['jcr:content']['kpmg-herocarousel']"
    ></hero-carousel>
	-->

    <!-- DEV TOOLBAR --> 
    <dev-toolbar></dev-toolbar>
  </div>

</template>

<script>
import $ from 'jquery'
//
import HeroCarousel from '~/components/herocarousel'
import Navbar from '~/components/navbar'
import TypeAhead from '~/components/Typeahead'
import InterestSummary from '~/components/interest-summary'
// import MobileNavSlideMenu from '~/components/mobile-nav-tablist'
//
import DevToolbar from '~/components/_dev-toolbar'

export default {
  components: {
    Navbar,
    HeroCarousel,
	InterestSummary,
    //
    DevToolbar
  },
  beforeMount: function() {
	this.$store.dispatch('data/navigation/setAuthenticationState');
  }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";

.home-page-template {
  .herocarousel-component {
    // on mobile, the navbar is fixed and the next element occupies its (the navbar's) space.
    margin-top: 64px;
  }
}
@media (min-width: map-get($grid-breakpoints, lg)) {
  .home-page-template {
    .herocarousel-component {
        margin-top: 0px;
      }
    } 
}
</style>
