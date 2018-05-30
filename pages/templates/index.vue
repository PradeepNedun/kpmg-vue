<template>
  <div class="container">
    <nuxt-link to="/components">Back to Components</nuxt-link>

    <table class="table">
        <thead>
            <tr>
                <th>Sr.#</th>
                <th>Link</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in vm.menuItems" v-bind:key="index">
                <td>{{index + 1}}</td>
                <td>
                    <nuxt-link :to="item.href">{{item.label}}</nuxt-link>
                </td>
                <td>{{item.description}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            vm: {
                menuItems:[
                    {
                        'href': '/templates/home-page', 
                        'label':'Home Page',
                        description: 'This is how the KPMG Home Page will be designed.'
                    }
                ]
            }
        }
    }
}
</script>

