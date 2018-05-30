<template id="nav-list-component-template">
    <nav 
        class="nav-list-component vue-component d-flex flex-column h-100"
        v-dev="{ isDev: $root.isDev, variant: 'kpmg-blue' }"
        v-if="vm"
    >
        <!-- LINKS -->
		<template 
			v-for="(item, idx) in vm.links"
			v-if="item.label"
		>
			<!-- V-IF -->
			<legacy-nav-list-item
				v-if=" (item.key === 'kpmg.personalization.homepage.mykpmgflyout.aboutMyKpmg') "
				:vm="item"
				:key=" (idx + '-legacy-nav-list-item') "
			>
			</legacy-nav-list-item>
			
			<!-- V-ELSE-IF -->
			<legacy-logout-link
				v-else-if="(item.key === 'kpmg.personalization.homepage.mykpmgflyout.logout')"
				:vm="item"
				:key=" idx + '-legacy-logout-link' "
			></legacy-logout-link>
			
			<!-- V-ELSE-->
			<a
				v-else
				class="
					nav-link 
					text-kpmg-blue 
					p-2 
					border border-top-0 border-left-0 border-right-0
				"
				:href="$store.state.data.siteInfo.assetsDomain + item.url"
				:key="idx + '-nav-list-item'"
			>
			
				\{{ item.label }}
			</a>
		</template>

        <!-- VIEW ALL (MASTER) LINK -->
        <span  
            class="pr-2 pb-2 d-block mt-auto mr-0 ml-auto text-right"
            v-if="vm && vm.viewAll"
        >
            <!-- ICON (CHEVRON-RIGHT) -->
            <span 
				class="icon icon-chevron-right"
				v-if="vm.viewAll.label"
			></span>
            
            <!-- LINK LABEL -->
            <a  class="text-kpmg-blue"
                :href="vm.viewAll.linkURL "
				v-if="vm.viewAll.label"
            >
                \{{ vm.viewAll.label }}
            </a>
        </span>
    </nav>
</template>


<script>
import LegacyNavListItem from '~/components/legacy/legacy-nav-list-item'
import LegacyLogoutLink from '~/components/legacy/legacy-logout-link'

export default {
    props: ['vm'],
	components: {
		LegacyNavListItem,
		LegacyLogoutLink
	}
}
</script>

<style lang="scss">
nav.nav-list-component {
    > a {
        &:hover {
            text-decoration: underline !important;   
        }
        &:last-of-type {
            border-bottom: none !important;
        }
    }
}
</style>