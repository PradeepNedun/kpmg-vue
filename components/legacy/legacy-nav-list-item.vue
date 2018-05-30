<template id="legacy-nav-list-item-component-template">
	<a
		class="
			legacy-nav-list-item-component vue-component
			nav-link 
			text-kpmg-blue 
			p-2 
			border border-top-0 border-left-0 border-right-0
		"
		:href="vm.url"
		:data-uri=" '/content/kpmgpublic' + vm.url "
		:data-modal-url="vm.url"
		:data-remote="vm.url"
		data-name="learnmore"
		data-target="#kpmgModal"
		data-toggle="modal" 	
		data-backdrop="static"
		oncontextmenu="return false"
	>
		\{{ vm.label }}
	</a>

</template>

<script>
export default {
	props: ['vm']
}
</script>