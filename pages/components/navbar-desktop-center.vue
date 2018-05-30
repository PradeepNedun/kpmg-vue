<template>
    <div class='container'>
        <nuxt-link to="/components">Go Back</nuxt-link>
        <hr />
        <desktop-navbar class="border border-primary"></desktop-navbar>
        
        <!-- <mobile-navbar></mobile-navbar> -->
    </div>
</template>

<script>
    import DesktopNavbar from '~/components/complex/desktop-navbar'
    //
    export default {
        components: { DesktopNavbar }
    }
</script>