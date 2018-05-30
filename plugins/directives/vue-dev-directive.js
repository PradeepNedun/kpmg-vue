import Vue from 'vue';
import $ from 'jquery';


var config = {
    bind: toggleBorderClasses,
    update: toggleBorderClasses 
};

Vue.directive('dev', config);

function toggleBorderClasses(el, binding, vnode) {
    var toggleClasses = 'border border-' + binding.value.variant;
    //
    if (binding.value.isDev) {
        $(el).addClass(toggleClasses);
    } else {
        $(el).removeClass(toggleClasses);
    }
}

/*
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})  

*/