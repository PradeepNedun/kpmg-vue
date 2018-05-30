<template id="promotional-component-template">
    <!-- OUTER WRAPPER -->
    <a 
        class="promotional-component vue-component 
			h-100 
			d-flex
		"
		:href="vm.linkUrl"
        v-dev="{isDev: $root.isDev, variant: 'danger' }"
		v-if="vm"
    >
        <!-- INNER WRAPPER -->
        <div class="
			d-flex flex-column
			text-white bg-kpmg-blue
			p-3
			h-100
		">
            <!-- TITLE -->
            <h1
                class="mb-0 font-kpmg"
            >
                \{{ vm.welcomeLabel.trim() }},
				<br>
				\{{ vm.userName }}
				
            </h1>
            <!-- TEXT -->
            <p v-show="unKnownUser"
				class="
					text-white
					mt-3
				"
			>
                \{{ vm.text }}
			</p>
			<p v-show="newUser" class="text-white mt-3 new-user">
				\{{ vm.newUser1 }} 
				<a class="text-white" :href="vm.interestUrl" :title="vm.interestUrl">
					\{{ vm.newUser2 }}
				</a>
				\{{ vm.newUser3 }} 
				<a
					class="text-white"
					:title="vm.learnMoreUrl"
					:data-uri="(vm.learnMoreUrl.indexOf('/content/kpmgpublic/') > -1) ? vm.learnMoreUrl : '/content/kpmgpublic' + vm.learnMoreUrl"
					:href="(vm.learnMoreUrl.indexOf('/content/kpmgpublic/') > -1) ? vm.learnMoreUrl.substr(19) : vm.learnMoreUrl"
					:data-modal-url="(vm.learnMoreUrl.indexOf('/content/kpmgpublic/') > -1) ? vm.learnMoreUrl.substr(19) : vm.learnMoreUrl"
					:data-remote="(vm.learnMoreUrl.indexOf('/content/kpmgpublic/') > -1) ? vm.learnMoreUrl.substr(19) : vm.learnMoreUrl"
					data-name="learnmore"
					data-target="#kpmgModal"
					data-toggle="modal" 	
					data-backdrop="static"
					oncontextmenu="return false"
				>
					\{{vm.newUser4}}.
				</a>
			</p>
            <!-- PROMOTIONAL IMAGE -->
            <img
				class="my-3 mr-auto ml-0"
				:src="vm.imgUrl" />
			
			<p class="text-right mt-auto" v-show="!loggedIn">
				<link-label-with-chevron
					:vm='{
						"label": vm.label,
						"linkURL": vm.linkUrl
					}'
					:classes='{
						"label": ["text-white  text-center"],
						"chevron": ["text-white font-2-rem"]
					}'
				></link-label-with-chevron>
			</p>
			
        </div>
    </a>

</template>
<script>
    function mountedCallBack() {
        /*jshint validthis:true */
        var startsWith = "loginCount",
            storageKey = "",
            preferencesCount = this.$store.state.data.personalization.personalizationUtils.preferencesCount.total;
        Object.keys(localStorage) 
            .forEach(function(key) { 
                if (key.substring(0,startsWith.length) === startsWith) {
                    storageKey = key;
                } 
            });
        if (parseInt(localStorage[storageKey]) < 5 && preferencesCount === 0) {
            localStorage[storageKey] = parseInt(localStorage[storageKey]) + 1;
            this.newUser = true;
        } else {
            this.unKnownUser = true;
        }
    }
import LinkLabelWithChevron	from '~/components/link-label-with-chevron'
//
export default {
    props: ['vm'],
	components: {
		LinkLabelWithChevron
	},
	data: function() {
		var data;
		//
		data = {
			loggedIn : this.$store.state.data.personalization.personalizationUtils.isUserLoggedIn,
			unKnownUser: false,
			newUser: false
		};
		//
		return data;
    },
    mounted: mountedCallBack
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";

/* vue-component CSS */
.promotional-component {
    cursor: pointer;
    &:hover {
        outline: 1px darken($gray-96, 20%) solid;
        text-decoration: none !important;
    }
	h1 {
		font-size:32px;
	}
    .font-kpmg {
        font-family: $font-kpmg
    }
	.font-2-rem {
		font-size: 2rem !important;
		font-size: 18px !important;
	}
	div.d-flex.explorer {
		flex: 1;
		img {
			align-self: flex-start;
		}
	}
	.new-user {
		a {
			text-decoration: underline;
		}
	}
}
</style>


