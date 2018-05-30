<template id="herocarousel-component-template">
    <!-- THE WRAPPER IS TO ACCOMODATE THE CAROUSEL INDICATORS -->
    <div 
        class="herocarousel-component carousel-wrapper pb-4"
        :class="{'container px-0': vm.variation != 'fullbleed'}" 
        v-dev="{isDev:$root.isDev, variant: 'primary'}"
    >
        <!-- TODO set carousel id dynamically -->
        <div 
            id="kpmg-herocarousel"
            class="carousel slide"
            v-if="vm && typeof vm == 'object' && Object.keys(vm).length > 0"
        >
            <!--CAROUSEL INDICATORS-->
            <herocarousel-indicators :vm="vm" />

            <!--CAOUSEL SLIDES -->
            <herocarousel-inner :vm="vm" />

            <!-- CAROUSEL CONTROLS -->
            <a class="carousel-control-prev carousel-control text-center" 
                :href=" '#' + 'kpmg-herocarousel' " 
                role="button" 
                data-slide="prev" 
                v-if="vm && typeof vm === 'object' && vm.item1"
            >
                <i class="fa fa-chevron-left"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a 
                class="carousel-control-next carousel-control" 
                :href=" '#' + 'kpmg-herocarousel' " 
                role="button"
                data-slide="next"
                v-if="vm && typeof vm === 'object' && vm.item1"
            >
                <i class="fa fa-chevron-right"></i>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
import HerocarouselIndicators from '~/components/herocarousel-indicators'
import HerocarouselInner from '~/components/herocarousel-inner'
//
export default {
    components: {   
        HerocarouselIndicators,
        HerocarouselInner
    },
    props: ['vm']
}

</script>
 <style lang="scss">
 @import "node_modules/bootstrap/scss/functions";
 @import "~assets/scss/bootstrap/custom/_variables";

.herocarousel-component {
    // CAROUSEL CONTROLS
    .carousel-control {
        display:none;
        i {
            font-size: 50px;
        }
        &:hover {
            opacity: .8;
            background-color: #fff;
        }
    }
    @media (min-width:641px) {
        .carousel-control {
            background-color: #fff;
            width: 52px;
            height:52px;
            top: calc(50% - 52px/2);
            padding-top: 3px;
            display:block;
            opacity: 0.2;
            &:hover, &:focus {
                opacity: 0.8 !important;
                background-color: white;
            }
            i {
                 color:  $kpmg-blue;
                 opacity: .9;
            }
        }
    }
 }

 </style>
 