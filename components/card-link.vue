<template id="card-link-component-template">
    <a  
        class="
			card-link-component vue-component 
			card 
			p-2 
			h-100 
			rounded-0
		"
        :href="$root.assetsDomain + vm.linkUrl"
        v-if="vm"
        v-dev="{ isDev: $root.isDev, variant: 'warning' }"
    >
        <!-- CARD IMAGE -->
        <img 
            class="card-img-top rounded-0" 
            :src="$store.state.data.siteInfo.assetsDomain + vm.imgUrl + '/jcr:content/renditions/cq5dam.web.237.158.jpg'"  
            :alt="vm.altText"
        >
        
        <!-- CARD TEXT CONTENT -->
        <div class="card-body p-0 border-0" 
            v-dev="{ isDev: $root.isDev, variant: 'warning' }"
        >
            <!-- TITLE -->
            <h4
                class="card-title mt-2 text-kpmg-blue"
            >
                \{{ vm.title }}
            </h4>
            <!-- DESCRIPTION -->
            <div 
                class="card-text text-dark"
            >
                \{{ vm.description }}
            </div>
        </div>
    </a>
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
.card-link-component.card {
    border: none;
    &:hover {
        outline: 1px darken($gray-96, 20%) solid;
        text-decoration: none;
    }
}
</style>



