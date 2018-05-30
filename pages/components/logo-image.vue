<template>
    <div class="container">
        <nuxt-link to="/components">Go Back</nuxt-link>
        <hr />
        <logo-image-component></logo-image-component>
    </div>
</template>

<script>
import LogoImageComponent from '~/components/logo-image';

export default {
    components: { LogoImageComponent }
} 
</script>

<style lang="sass">

</style>