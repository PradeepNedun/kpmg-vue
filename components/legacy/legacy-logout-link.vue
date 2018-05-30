<template id="legacy-logout-link-component-template">
	<a			
		class="
			legacy-logout-link-component vue-component
			btn-link
			text-kpmg-blue 
			p-2 
			border border-top-0 border-left-0 border-right-0
		"
		href="#"
		@click.stop.prevent="logoutUser();"
	>
		\{{vm.label}}
	</a>
</template>

<script>
	export default {
		props: ['vm'],
		methods: {
			logoutUser: function() {
				alert('kpmg functionality here...');
			}
		}
	}

</script>