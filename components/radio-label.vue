<template id="radio-label-component-template">
	<label class="
				h4 text-kpmg-blue 
				radio-label-component
			"
		>
		<input type="radio" :checked="vm.checked" />
		\{{ vm.label }}
	</label>
</template>

<script>
export default {
	props: ['vm']
}
</script>