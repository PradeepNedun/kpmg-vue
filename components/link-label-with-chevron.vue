<template id="link-label-with-chevron-component-template"> 
	
	<span 
		class="link-label-with-chevron-component vue-component"
	>
		<span
			class="icon icon-chevron-right"
			:class="[(classes && classes.chevron) ? classes.chevron : '']"
		></span>
		<a 
			:href="vm.linkURL"
			class="
				d-inline
			"
			:class="[(classes && classes.label) ? classes.label : '']"
		>
			<span>
				\{{ vm.label }}
			</span>
		</a>
	</span>

</template>

<script>
export default {
	props: ['vm', 'classes']
}

</script>