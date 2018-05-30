<template id="site-selector-list-component-template">
    <div
        class="site-selector-list-component vue-component h-100"
        v-dev="{isDev: $root.isDev, variant: 'kpmg-blue'}">
        <!-- HEADING -->
        <h4 class="border-bottom py-2">
			\{{vm.heading}}
		</h4>

        <!-- AVAILABLE LANGUAGES LINK -->
        <div class="my-2"
			:title="site.countryLocale"
			v-if="vm.sites"
			v-for="(site, index) in vm.sites"
			v-bind:key="index + 'site-selector-sites' "
		>
			<span 
				class="d-inline-block 
						icon"
				:class="{'icon-chevron-right': !site.selected, 'icon-checkmark text-kpmg-blue': site.selected }"
			></span>
			<a 
				class="d-inline text-kpmg-blue py-1" 
				:href="site.link">
				\{{site.countryLocale}}
			</a>
		</div>

        <!-- GLOBAL SITE LINK -->
        <div 
			class="mb-2"
			:class="{'mt-5': vm.sites && vm.sites.length }"
			:title="vm.global.countryLocale"
		>
            <span 
				class="d-inline-block icon"
				:class="{'icon-chevron-right': !vm.global.selected, 'icon-checkmark text-kpmg-blue': vm.global.selected }"></span>
            <a 
				class="d-inline text-kpmg-blue py-1" 
				:href="vm.global.link"
			>
				\{{vm.global.countryLocale}}
            </a>
        </div>
        
        <!-- VIEW ALL SITES LINK -->
        <div 
			class="my-2 py-2 border-top"
			:title="vm.allCountries.i18nLabel"
		>
            <span class="d-inline-block icon icon-chevron-right"></span>
            <a 
				class="d-inline text-kpmg-blue py-1" 
				:href="vm.allCountries.link"
			>
				\{{vm.allCountries.i18nLabel}}
            </a>
        </div>

    </div>
</template>

<script>
export default {
	props: ['vm']

}

</script>


<style lang="scss">
.site-selector-list-component {
  span.icon {
	font-size: 18px;
  }
}
</style>