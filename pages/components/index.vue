<template>
    <div class="container">
        <hr />
        <h3 class="text-primary">
            <img src="img/KPMG.png" height="40" />
            List of Components
        </h3>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>
                         <nuxt-link to="/components/navbar-desktop-center">
                            KPMG Navbar Middle
                        </nuxt-link>
                    </td>
                    <td>
                        <code>
                            The KPMG header navbar consists of three parts:
                            <ol>
                                <li>The Top Section</li> 
                                <li>The center section</li> 
                                <li>The bottom section</li>
                            </ol>
                            This component makes up the center section.
                        </code> 
                    </td>
                </tr>

            

                <tr>
                    <th scope="row">2</th>
                    <td>
                         <nuxt-link to="/components/logo-image">
                            Logo Image
                        </nuxt-link>
                    </td>
                    <td>
                        <code>
                            This is the Logo Image Component.
                        </code> 
                    </td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>
                            <nuxt-link to="/components/navbar-nav">
                            Navbar Nav
                        </nuxt-link>
                    </td>
                    <td>
                        <code>
                            This is the Navbar Nav component which is a part of the the navigation menu bar. 
                        </code> 
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                isDev: true
            }
        }
    }

</script>