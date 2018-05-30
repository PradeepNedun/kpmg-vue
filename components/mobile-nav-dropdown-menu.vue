<template id="mobile-nav-dropdown-menu-template">
    <div
        class="dropdown-menu w-100 pt-0 rounded-0 mobile-nav-dropdown-menu-component position-absolute" 
        style="height: 400px; overflow: auto;"
    >
        <h1>Hello World...</h1>
        <!-- NAV CUSTOM COLLAPSE -->
        <!-- <kpmg-mobile-nav-custom-collapse></kpmg-mobile-nav-custom-collapse> -->

        <!-- NAV ITEM -->
        <!-- <template v-for="item in mobileNavList"> -->

            <!-- SIMPLE LIST ITEM -->
            <!-- <template v-if="!item.sublist || !item.sublist.length">
                <kpmg-mobile-nav-list-without-collapse
                    class="p-3" 
                    :list-item="item">
                </kpmg-mobile-nav-list-without-collapse>
            </template> -->

                    <!-- LIST ITEM WITH COLLAPSE -->
            <!-- <template v-else>
                <kpmg-mobile-navlist-item-with-collapse
                    :list-item="item">
                </kpmg-mobile-navlist-item-with-collapse>
            </template> -->
        <!-- </template> -->
    </div>
</template>

<style lang="scss">
    .dropdown.show .mobile-nav-dropdown-menu-component.dropdown-menu {
        animation: slideInLeft 1s;
        transition: left 1s;
        opacity: 1;
        left: 0px;
    }

    .dropdown .mobile-nav-dropdown-menu-component.dropdown-menu {
        transition: left 1s;
        opacity: 1;
        animation: slideOutLeft 1s;
        left: -100%;
    }
</style>
