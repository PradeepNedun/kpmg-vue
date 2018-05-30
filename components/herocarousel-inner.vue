<template>
  <div class="carousel-inner herocarousel-inner-component">
        <div 
            class="carousel-item"
            :class="{active: index === 'item0'}"
            v-for="(slide, index) in vm"
            v-if="slide.image"
            :title="slide.description"
            v-bind:key="index + '-herocarousel' "
        >
            <a 
                :href="slide.primaryCtaUrl" 
                target="_blank"
                :title="slide.shortDescription"
            >
                <!-- v-show="!slide.imageIsLoading" -->
                
                <img  
                    class="d-block w-100" 
                    :src="$root.hostDomain + slide.image + '/jcr:content/renditions/cq5dam.web.' + slideDimensions.width + '.' + slideDimensions.height + '.jpg'"
                    :title="slide.description"
                >

                <!-- VARIANT OVERLAY -->
                <div 
                    class="variant-overlay position-absolute"
                    :class="slide.variant"
                ></div>

                <!-- CAROUSEL CAPTION -->
                <div class="container px-0">
                    <div class="kpmg-carousel-caption">
                        <h1>{{slide.title}}</h1>
                        <p class="h5">{{slide.description.slice(0, 50)}}...</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['vm'],
    computed:{
        slideDimensions: function(){
            var slideDimensions;
            //
            slideDimensions = {
                width: 0,
                height: 0
            }
            //
            if (
                this.vm.variation === 'fullbleed'
            ) {
                if (this.$store.getters.isDesktop) {
                    slideDimensions.width = 1400
                    slideDimensions.height = 350
                } else {
                    slideDimensions.width = 640
                    slideDimensions.height = 490
                }
            } else {
                if (this.$store.getters.isDesktop) {
                    slideDimensions.width = 1082
                    slideDimensions.height = 547
                } else {
                    slideDimensions.width = 640
                    slideDimensions.height = 580
                }
            }
            return slideDimensions;
        }
    }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
//
.carousel-inner.herocarousel-inner-component {
    div.carousel-item {
        div.kpmg-carousel-caption h1 {
            font-family: $font-kpmg;
            font-size: 3.5rem;
        }
        .variant-overlay {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        .variant-overlay.variant_1 {
            background: linear-gradient(to right, rgba(0,48,135,0.5) 0, rgba(0,48,135,0) 100%);
            color: $white;
        }
        .variant-overlay.variant_2 {
            background: linear-gradient(to right, rgba(0,0,0,0.5) 0, rgba(0,0,0,0) 100%);
            color:$white;
        }
        .variant-overlay.variant_3 {
            background: linear-gradient(to right, rgba(255,255,255,0.5) 0, rgba(255,255,255,0) 100%);
            color: $kpmg-blue;
        }
        .kpmg-carousel-caption {
            position: absolute;
            top:0px;
            bottom:0px;
            right: 0px;
            left:0px;
            padding: 20px;
            color: #fff;
            text-align: left;
            z-index: 10;
        }
        @media (min-width: 641px) {
            .kpmg-carousel-caption {
                max-width:50%;
                padding: 20px 0 0 55px;
            }
        }
    }
}
</style>
