<template>
    <ol 
        class="carousel-indicators herocarousel-indicators-component"
        v-if="vm && typeof vm == 'object' && Object.keys(vm).length > 0"
    >   
        <li 
            :data-target=" '#' + 'kpmg-herocarousel' "
            v-for="(slide, index) in vm"
            v-if="slide.image"
            :data-slide-to="index"
            :class="{active: (index === 'item0')}"
            v-bind:key="index"
        >
        </li>
    </ol>
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
ol.carousel-indicators.herocarousel-indicators-component {
    bottom: -37px;
    li {
        margin-top:20px;
        border-radius: 6px;
        height: 12px;
        width: 12px;
        background-color: $kpmg-blue;
        margin: 6px;
        &.active {
            background-color: #0091da;
        }
    }
}
</style>
