<script>
function expand(textbox) {
    console.log(textbox);
}
</script>
<template id="type-ahead-component-template">
    <div 
		class="
			type-ahead-component vue-component
			input-group
		" 
		:class="[classes]"
	>
		
  <div class="input-wrapper mobile">
		<input type="text" class="type-ahead-select taller"
				 :placeholder="placeholder"
				 autocomplete="off"
				 v-model="query"
				 @keydown.down="down"
				 @keydown.up="up"
				 @keydown.enter.prevent="hit"
				 @keydown.esc="reset('escape')"
				 @input="update($event)"
         @keyup.enter="onKeyUpEnter"
         @keyup.right = "right"
    />
  </div>
    <input type="text" class="type-ahead-select desktop"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="query"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.enter.prevent="hit"
      @keydown.esc="reset('escape')"
      @input="update($event)"
      @keyup.enter="onKeyUpEnter"
      @keyup.right = "right"
    />
      <div v-show="hasItems" class="dropdown-menu-list dropdown-menu" role="menu" aria-labelledby="dropdownMenu" 
		:class="{hasItems: hasItems}"
      >
      <ul>
        <li 
			v-for="(item , index) in items" 
			:class="{active:activeClass(index)}"
			v-bind:key="index + '-typeahead'"
            @mousedown="hit" @mousemove="setActive(index)">
          <a v-html="highlighting(item, vue)"></a>
        </li>
      </ul>
      <ul v-if="showSearchingFlag" v-show="!hasItems&&!isEmpty" class="dropdown-menu" role="menu"
          aria-labelledby="dropdownMenu">
        <li class="active" @mousemove="setActive(index)" v-if="!loading">
          <a>
            <span v-html="NoResultText"></span>
          </a>
        </li>
        <li class="active" @mousemove="setActive(index)" v-else>
          <a>
            <span v-html="SearchingText"></span>
          </a>
        </li>
      </ul>
      </div>
    </div>
</template>


<style scoped>
  .dropdown-menu-list {
    display: list-item;
    width: 100%;
  }
</style>
<script>
  import $ from 'jquery'

  export default{
         props: {
            selectfirst: {
                required: false,
                type: Boolean,
                default: false
            },
            queryParamName: {
                required: false,
                type: String,
                default: ':keyword'
            },
            limit: {
                required: false,
                type: Number,
                default: 10
            },
            minChars: {
                required: false,
                type: Number,
                default: 3
            },
            src: {
                required: false,
                type: String
            },
            delaytime: {
                required: false,
                default: 500,
                type: Number
            },
            placeholder: {
                required: false,
                type: String
            },
            showSearchingFlag: {
                required: false,
                default: false,
                type: Boolean
            },
            NoResultText: {
                required: false,
                default: 'No result',
                type: String
            },
            SearchingText: {
                required: false,
                default: 'Searching...',
                type: String
            },
            classes: {
                required: false,
                type: String
            },
            value: {
                required: false,
                type: String,
                default: ''
            },
            onhit: {
                required: false,
                type: Function,
                default: function (item) {
                    this.query = item;
                }
            },
            highlighting: {
                required: false,
                type: Function,
                default: function (item) {
                    var re = new RegExp(this.query, 'ig');
                    var matches = item.match(re);
                    if(matches) {
                        matches.forEach(iterateMatches);
                    }
                    //
                    return item;
                    // private functions
                    function iterateMatches(match) {
                        item = item.replace(match, '<b>' + match + '</b>');
                    }
                }
            },
            render: {
                required: false,
                type: Function,
                default: function (items) {
                    return items;
                }
            },
            getresponse: {
                required: false,
                type: Function
            },
            fetch: {
                required: false,
                type: Function,
                default: function (url) {
                    return $.get(url);
                }
            },
            objectArray: {
                required: false,
                type: Array
            }
        },
        data: function() {
            return {
                items: [],
                query: '',
                current: -1,
                loading: false,
                lastTime: 0,
                data: []
            };
        },
        methods: {
            /*CUSTOM CODE*/
            onKeyUpEnter: function (evt) {
                this.$emit('typeaheadkeyupenter', {
                    current: this.current,
                    evt: evt
                });
            },
            /*CUSTOM CODE*/

            objectUpdate: function () {
                var $this;
                $this = this;
                //
                var filtered = this.objectArray.filter(filterObjectArray);

                this.data = this.limit ? filtered.slice(0, this.limit) : filtered;
                this.items = this.render(this.limit ? this.data.slice(0, this.limit) : this.data, this);

                this.current = -1;
                if (this.selectfirst) {
                    this.down();
                }
                // 
                function filterObjectArray(entity) {
                    var includesQuery;
                    //
                    includesQuery = entity.toLowerCase().indexOf($this.query.toLowerCase());
                    //
                    return includesQuery;
                }
            },
            setVal: function(elem) {
                //Private functions
                function getTypeAheadVal(keyword, matchText) {
                    if(matchText.indexOf(keyword) > -1) {
                        return matchText.replace(new RegExp(keyword, 'i'), '');
                    } else {
                        return '';
                    }
                }
                function mobile() {
                    var $inputMobile;
                    $inputMobile = $(".input-wrapper.mobile input");
                    $inputMobile.after('<span class="typeahead-value typeahead-elem mobile" >' + typeAheadVal + '</span>');
                    if($('.tempKey.mobile').length === 0) {
                        $inputMobile.after('<span class="tempKey mobile" style="display:none;position:absolute;">' + keyTyped + '</span>');
                    }
                    $('.typeahead-elem.mobile').css({
                        'left': 8 + $('.tempKey.mobile').width() + 'px'
                    })
                }
                function desktop() {
                    var $inputDesktop;
                    $inputDesktop = $("input.desktop");
                    $inputDesktop.after('<span class="typeahead-value typeahead-elem desktop" >' + typeAheadVal + '</span>');
                    if($('.tempKey.desktop').length === 0) {
                        $inputDesktop.after('<span class="tempKey desktop" style="display:none;position:absolute;">' + keyTyped + '</span>');
                    }
                    $('.typeahead-elem.desktop').css({
                        'left': 8 + $('.tempKey.desktop').width() + 'px'
                    });
                }
                function findMobileOrDesktop() {
                    if(window.innerWidth <= 640) {
                        mobile();
                    } else {
                        desktop();
                    }
                }
                var keyTyped = this.query,
                    matchText = this.items[0],
                    keyword = keyTyped.toLowerCase(),
                    typeAheadVal = '',
                    typeAheadElemMobile = $('.mobile-navbar-component .typeahead-value'),
                    typeAheadElemDesktop = $('.desktop-navbar-component .typeahead-value');
                if(matchText) {
                    typeAheadVal = getTypeAheadVal(keyword, matchText.toLowerCase());
                }
                if (typeAheadVal.indexOf(" ") === 0) {
                    typeAheadVal = typeAheadVal.replace(/\s/, "&nbsp;");
                }
                if($('.tempKey.desktop').length) {
                    if(window.innerWidth > 640) {
                        $('.tempKey.desktop').html(keyTyped);
                        $('.typeahead-elem.desktop').css({
                            'left': 8 + $('.tempKey.desktop').width() + 'px'
                        })
                    }
                }
                if($('.tempKey.mobile').length) {
                    if(window.innerWidth <= 640) {
                        $('.tempKey.mobile').html(keyTyped);
                        $('.typeahead-elem.mobile').css({
                            'left': 8 + $('.tempKey.mobile').width() + 'px'
                        });
                    }
                }
                if (typeAheadElemDesktop.length || typeAheadElemMobile.length) {
                    if(window.innerWidth <= 640) {
                        typeAheadElemMobile.html(typeAheadVal);
                    } else {
                        typeAheadElemDesktop.html(typeAheadVal);
                    }
                } else {
                    findMobileOrDesktop();
                }
            },
            update: function (event) {
                var $this;
                $this = this;
                this.lastTime = event.timeStamp;
                if (!this.query) {
                    $this.removeSuggestion();
                    return this.reset();
                }
                if (this.minChars && this.query.length < this.minChars) {
                    $this.removeSuggestion();
                    return;
                }
                setTimeout(function() {
                    if ($this.lastTime - event.timeStamp === 0) {
                        if($this.objectArray){
                            return $this.objectUpdate();
                        }
                        $this.loading = true;
                        var re = new RegExp($this.queryParamName, 'g');
                        handleResponse(["finance analytics", "finance analytics", "finance analytics"]);
                    }
                    //
                    function handleResponse(response){
                        if ($this.query) {
                            var data = $this.getresponse(response);
                            $this.data = $this.limit ? data.slice(0, $this.limit) : data;
                            $this.items = response;
                            $this.current = -1;
                            $this.loading = false;
                            $this.setVal();
                            if ($this.selectfirst) {
                                $this.down();
                            }
                        }
                    }
                }, $this.delaytime);
            },
            setActive: function (index) {
                this.current = index;
            },
            activeClass: function (index) {
                return this.current === index;
            },
            hit: function () {
                if (this.current !== -1) {
                    this.onhit(this.items[this.current], this, this.current);
                }
                this.reset();
            },
            up: function () {
                if (this.current > 0) {
                    this.current--;
                } else if (this.current === -1) {
                    this.current = this.items.length - 1;
                } else {
                    this.current = -1;
                }
                if (!this.selectfirst && this.current !== -1) {
                    this.onhit(this.items[this.current], this);
                }
            },
            down: function () {
                if (this.current < this.items.length - 1) {
                    this.current++;
                } else {
                    this.current = -1;
                }
                if (!this.selectfirst && this.current !== -1) {
                    this.onhit(this.items[this.current], this);
                }
            },
            reset: function () {
                this.items = [];
                this.loading = false;
            },
            right: function () {
                var $this;
                $this = this;
                if(this.items.length > 0) {
                    this.query = this.items[0];
                    $this.removeSuggestion();
                     setTimeout(function() {
                        $('.navbar-typeahead-component .type-ahead-select.desktop').removeAttr('style').css('width', '90%');
                        $('.navbar-typeahead-component .mobile input').removeAttr('style').css('width', '100%');
                    },250);
                }
            },
            removeSuggestion: function() {
                $('.typeahead-value').remove();
            }
        },
        watch: {
            'value': function (value) {
                this.query = this.query !== value ? value : this.query;
            },
            query: function (value) {
                this.$emit('input', value);
            }
        },
        computed: {
            vue: function () {
                return this;
            },
            hasItems: function () {
                return (this.items.length > 0);
            },
            isEmpty: function () {
                return this.query === '';
            }
        },
        mounted: function () {
            var $this;
            //
            $this = this;
            //
            document.addEventListener('click', onClickHandler);
            //
            if (this.objectArray) {
                this.objectArray.sort();
            }
            // private functions
            function onClickHandler(e) {
                if (!$this.$el.contains(e.target)) {
                    $this.reset();
                }
            }
        }
    }
</script>

<style scoped>
div.input-group input.type-ahead-select{
	border-top-right-radius: .25rem;
	border-bottom-right-radius: .25rem;
}
div.dropdown-menu-list.dropdown-menu.hasItems {
	position:absolute !important;
	left: -30px;
	right:-20px;
    border-top: 0;
    width: 100% !important;
}
div.dropdown-menu-list.dropdown-menu.hasItems ul li {
	padding-left: 30px;
}
ul li{
	padding: 5px .50rem;
	margin: 0px .25rem;
	cursor: pointer;
	border-radius: 4px;
	cursor: pointer;
}
ul li:hover, ul li.active {
	background-color: #f1f2f3;
}
@media (min-width:641px) {
	.type-ahead-component div.dropdown-menu-list.dropdown-menu.hasItems {
        top: 28px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .type-ahead-component .mobile {
			display: none;
    }
}
@media (max-width:640px) {
    .type-ahead-component .desktop {
        display: none;
    }
    .type-ahead-component .mobile {
		display: block;
    }
}

</style>