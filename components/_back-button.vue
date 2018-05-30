<template>
    <div>
        <nuxt-link :to="link">{{label}}</nuxt-link>
        <hr />
    </div>
</template>

<script>
export default {
    props: ['link', 'label']
}

</script>