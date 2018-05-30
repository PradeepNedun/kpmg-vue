<template id="logo-image-component-template">
    <!-- LINK -->
    <a 
    	class="logo-image-component vue-component 
			navbar-brand  
			p-0
		"
    	:href="vm.linkURL"
		v-if="vm"
   	>
        <!-- LOGO IMAGE -->
        <img :src="$store.state.data.siteInfo.assetsDomain + vm.imgURL" :alt="vm.altText"  />
    </a>
</template> 

<script>
export default {
    props: ['vm']
} 
</script>

<style lang="scss">
.logo-image-component{
    img {
        // POSITION & SIZE
        height: 48px
    }
} 
</style>