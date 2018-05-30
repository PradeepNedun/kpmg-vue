<template id="dev-toolbar-component-template">
    <div class="dropdown position-fixed dev-toolbar-component"
    :class="{ 'almost-transparent': !$root.isDev }">
        <button class="btn btn-primary dropdown-toggle rounded-0" data-toggle="dropdown">
            Dev
            <i class="fa fa-bars"></i>
        </button>
        <div class="dropdown-menu">
            <div class="dropdown-item">
                <label class="bg-white">
                    <input 
                        type="checkbox"
                        v-model="$root.isDev"
                    />
                    Developer Mode
                </label>
            </div>

        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
    .dev-toolbar-component {
        bottom:0; 
        right:0;
        &.almost-transparent {
            opacity: 0.1;
            &.show {
                opacity: 1;
            }
        }
        
        .dropdown-menu {
            opacity: 1 !important;
        }
    }
</style>