<template id="interest-summary-component-template">
    <!-- OUTER WRAPPER -->
    <a 
        class="
			interest-summary-component vue-component
			d-flex
			h-100
		"
		:href="vm.linkUrl"
        v-dev="{isDev: $root.isDev, variant: 'danger' }"
		v-if="vm"
    >
        <!-- INNER WRAPPER -->
        <div class="
			d-flex flex-column
			text-white bg-kpmg-green
			p-2 
			h-100
		">
            <!-- TITLE -->
            <h1
                class="mb-0 font-kpmg border border-bottom-white border-left-0 border-right-0 border-top-0 pb-2"
            >
                \{{vm.title}}
            </h1>
            <!-- TEXT -->
            <p 
				class="
					text-white
					my-3
				"
			>
                \{{vm.includesText}}
            </p>
			<div class="summary">
				
				<p
					class="
						font-kpmg text-white
						my-0 py-0
					"
					v-for="(item, idx) in vm.summaryList"
					:key=" idx + '-summary-list'"
				>
					\{{item}}
					
				</p>
			</div>
			
			<p 
				class="
					text-white 
					my-3
					pb-3
					border border-top-0 border-right-0 border-left-0
				"
			>
				\{{vm.selectText}}
			</p>
			
			
            <!-- INTEREST SUMMARY IMAGE -->
            <p class="text-right mt-auto">
				<link-label-with-chevron
				:vm='{
					"label": vm.label,
					"linkUrl": "vm.linkUrl"
				}'
				:classes='{
					"label": ["text-white  text-center"],
					"chevron": ["text-white font-2-rem"]
				}'
				></link-label-with-chevron>
			</p>
			
        </div>
    </a>

</template>

<script>
import LinkLabelWithChevron	from '~/components/link-label-with-chevron'
//
export default {
    props: ['vm'],
	components: {
		LinkLabelWithChevron
	}
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";

/* vue-component CSS */
.interest-summary-component {
	cursor: pointer;
    &:hover {
        outline: 1px darken($gray-96, 20%) solid;
        text-decoration: none !important;
    }
	h1, div.summary p {
		font-size:32px;
	}
	div.summary p {
		line-height: 0.9;
	}
    .font-kpmg {
        font-family: $font-kpmg
    }
	.font-2-rem {
		font-size: 2rem !important;
		font-size: 18px !important;
	}
	div.d-flex.explorer {
		flex: 1;
		img {
			align-self: flex-start;
		}
	}
}
</style>


