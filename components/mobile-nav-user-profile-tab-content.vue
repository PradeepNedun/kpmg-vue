<template id="mobile-nav-user-profile-tab-content-component-template">
	<div
		class="
			mobile-nav-user-profile-tab-content-component vue-component
		"
		v-if="vm"
	>
		<!--LINK LIST-->
		<ul class="mt-2">
			<sub-list-item
				v-for="(item, key) in vm.links"
				v-bind:key=" key + 'account-list-sublist-item' "
				:vm="item"
				v-if="item.label"
			></sub-list-item>
		</ul>
	</div>
</template>

<script>
import SubListItem from '~/components/sub-list-item';

export default {
	props: ['vm'],
	components: {
		SubListItem
	}
}
</script>
