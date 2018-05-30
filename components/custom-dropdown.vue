<template id="custom-dropdown-component-template">
  <div 
        class="d-inline-block position-static custom-dropdown"
    >
        <!-- CUSTOM DROPDOWN TOGGLE -->
        <i 
            class="fa fa-user p-2 text-kpmg-blue fa-2x fa-fw custom-dropdown-toggle cursor-pointer"
        >
        </i>
        <!-- CUSTOM DROPDOWN MENU -->
        <div 
            class=" w-100 py-0 bg-dark custom-dropdown-menu d-none position-absolute"
        >
            <div class="container">
                <div class="row mx-auto px-0 justify-content-center">
                    <div class="col col-3 border border-danger bg-white  h-100">Hello
                        
                    </div>
                    <div class="col col-3 border border-danger bg-white">Hello</div>
                    <div class="col col-3 border border-danger bg-white">Hello</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

</style>
