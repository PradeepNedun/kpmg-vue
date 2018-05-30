<template id="animated-search-bar-component-template">
    <div
        class="animated-search-bar-component vue-component position-absolute d-none"
    >
        <!-- SEARCH ICON -->
        <span
            class="icon icon-search"
            v-dev="{isDev: $root.isDev, variant: 'kpmg-blue'}"
        ></span>

        <!-- SEARCH INPUT -->
		<navbar-type-ahead></navbar-type-ahead>

        <!-- CLOSE ICON -->
        <span
            class="icon icon-close text-kpmg-light-purple"
            @click="hideSearchBar();"
            v-dev="{isDev: $root.isDev, variant: 'danger'}"
        ></span>
    </div>
</template>

<script>
import $ from 'jquery';
import NavbarTypeAhead from '~/components/navbar-typeahead'

export default {
	components: {
		NavbarTypeAhead
	},
    methods: {
		showSearchBar: showSearchBar,
		hideSearchBar: hideSearchBar
	}
}

function showSearchBar(){
	var thisEl, rightElem, leftElem;
	//
	thisEl = this.$el;
	//
	rightElem = 'nav.navbar div.navbar-ikon-menu-component .icon-location';
	leftElem = 'nav.navbar a.navbar-brand';
	//
	$(thisEl)
		.removeClass('d-none')
		.addClass('d-inline');
	//
	$(thisEl)
		.stop()
		.animate({
			width: getDifferenceBetweenTwoElements(rightElem, leftElem) - 20 + 'px',
			opacity: 1
		}, function() {
			// focus on the input once the search-bar animation is completed.
			$(this).find('input').focus();
		});

	$(window).on('resize', function() {
		// WHEN OPACITY == 1, it means search bar is open when window was resized.
		var rightElem, leftElem;
		//
		rightElem = 'nav.navbar div.navbar-ikon-menu-component .icon-location';
		leftElem = 'nav.navbar a.navbar-brand';
		//
		if (+$(thisEl).css('opacity') === 1) {
			$(thisEl)
				.stop()
				.animate({
					width: getDifferenceBetweenTwoElements(rightElem, leftElem) - 20 + 'px'
				});
		}
	});
	// private functions (good candidate for abstraction)
	function getDifferenceBetweenTwoElements(rightElem, leftElem) {
		var rightElemLeftOffset, rightElemWidth, leftElemLeftOffset, leftElemWidth;
		//
		rightElemLeftOffset = $(rightElem).offset().left;
		leftElemLeftOffset = $(leftElem).offset().left;
		rightElemWidth  =$(rightElem).innerWidth();
		leftElemWidth = $(leftElem).innerWidth();
		//
		return  rightElemLeftOffset - leftElemLeftOffset - leftElemWidth;
	}
}
function hideSearchBar() {
	var thisEl;
	//
	thisEl = this.$el;
	//
	$(thisEl).animate({
		width: '0',
		opacity: 0
	}, function(){
		// RESET val of the search bar
		$(thisEl)
			.removeClass('d-inline')
			.addClass('d-none')
			.find('input')
			.val('');
	});
}

</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "~assets/scss/bootstrap/custom/_variables";
//
.animated-search-bar-component {
    background-color:$white;
    top: 2px;
    right: -2px;
    border: darken($gray-96, 20%) solid 1px !important;
    border-radius: 15px;
    //
    input.desktop {
        width: calc(100% - 72px);
        display:inline-block;
        // line-height: 2;
        height: 28px;
        vertical-align: top;
        // BORDER
        border: 0;
        // PADDING
        margin-left: 6px;
        &.explorer::-ms-clear {
            height:0px;
            width: 0px;
        }
    }
    .typeahead-elem  {
        display:inline-block;
        color: #cccccc;
        vertical-align: top;
        padding-top: 7.5px;
		position: absolute;
    }
    input:focus {
        outline:0;
    }
    span.icon.icon-close {
        position: absolute;
        font-size: 24px;
        right: 5px;;
        top: 2px;
        cursor: pointer;
        padding: 0px;
        right: 14px;
    }
    span.icon.icon-search {
        padding-top:0;
        padding-bottom:0;
        font-size: 24px;
        margin-left: 6px;
        margin-top: 6px;
        display: inline-block;
        font-weight: bold;
        // padding-left: 13px;
        // padding-top:3px;
        // padding-bottom:3px;
    }
}
</style>
