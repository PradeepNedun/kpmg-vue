<template id="mobile-nav-language-locale-tab-content-component-template">
	<div
		class="
			mobile-nav-language-locale-tab-content-component vue-component
			mt-5
		"
		v-if="vm"
	>
		<h3 class="
				text-center 
				px-2
			"
		>
			\{{ vm.heading }}
		</h3>
		<!-- LOCALE LIST -->
		<div
			class="
				locale-list
				mx-5 my-5
			"
		>
			<p 
				v-if="vm.sites"
				v-for="(site, index) in vm.sites"
				v-bind:key=" index + 'site-selector-sites' "
			>
				<template 
					v-if="!site.selected"
				>
				
					<link-label-with-chevron
						:vm="{
							linkURL: site.link,
							label: site.countryLocale
						}"
						:classes='{
							"label": ["text-kpmg-blue"]
						}'
					></link-label-with-chevron>
					
				</template>
				
				<template v-else>
					<radio-label 
						:vm="{
							label: site.countryLocale,
							checked: true,
						}"
					></radio-label>
				</template>
			</p>
			
			<!-- GLOBAL SITE -->
			<p
				v-if="vm.global"
			>
				<!-- IF SELECTED -->
				<template v-if="vm.global.selected">
					<radio-label 
						:vm="{
							label: vm.global.countryLocale,
							checked: true,
						}"
					></radio-label>
				</template>
				
				<!--IF NOT SELECTED-->
				<template v-else>
					<link-label-with-chevron 
						:vm='{
							linkURL: vm.global.link,
							label: vm.global.countryLocale
						}'
						:classes='{
							"label": ["text-kpmg-blue"]
						}'
					></link-label-with-chevron>
				</template>
			</p>
			
			<!-- ALL SITES -->
			<p
				:title="vm.allCountries.i18nLabel"
			>
				<link-label-with-chevron
					:vm="{
						linkURL: vm.allCountries.link, 
						label: vm.allCountries.i18nLabel
					}"
					:classes='{
						"label": ["text-kpmg-blue"]
					}'
				></link-label-with-chevron>
			</p>
		</div>
	</div>
</template>

<script>
import RadioLabel from '~/components/radio-label'
import LinkLabelWithChevron from '~/components/link-label-with-chevron'
//
export default {
	props: ['vm'],
	components: {
		RadioLabel,
		LinkLabelWithChevron
	}
}
</script>