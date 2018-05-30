<template id="ikon-trigger-with-animated-search-bar-component-template">
    <div 
        class="ikon-trigger-with-animated-search-bar-component vue-component d-inline-block position-relative"
        v-dev="{isDev: $root.isDev, variant: 'warning' }"
    >
        <!-- ANIMATED SEARCH BAR -->
        <animated-search-bar class="d-none"></animated-search-bar>
        
        <!-- ICON TRIGGER -->
        <span 
            class="icon icon-search icon-fw
                px-2 py-1 
                text-kpmg-blue
                cursor-pointer" 
            @click="$children[0].showSearchBar();"
        ></span>
    </div>
</template>

<script>
import AnimatedSearchBar from '~/components/animated-search-bar';
//
export default {
    components: {
        AnimatedSearchBar
    }
}
</script>

<style lang="scss">
.ikon-trigger-with-animated-search-bar-component {
    span.icon.icon-search {
        font-size: 30px;
    }
    .cursor-pointer {
        // DESIGN
        cursor: pointer;
    }
}
</style>
