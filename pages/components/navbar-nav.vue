<template>
    <div class="container">
        <back-button link="" label="Go Back"></back-button>
        <nav class="navbar navbar-expand border broder-primary">
            <navbar-nav></navbar-nav>
        </nav>
    </div>
</template>

<script>
import NavbarNav from '~/components/navbar-nav'
import BackButton from '~/components/_back-button'

export default {
    components: {
        NavbarNav,
        BackButton
    }
}

</script>