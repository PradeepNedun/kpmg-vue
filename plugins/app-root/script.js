import Vue from 'vue'
import $ from 'jquery'
import BrowserDetect from '~/plugins/BrowserDetect'

export default ({app, store})  => {
    app.data = () => {
        return {
            isDev: false,
            hostDomain: 'https://assets.kpmg.com',
            assetsDomain: 'https://assets.kpmg.com'
         }
     }
     app.mounted = () => {
        setBrowserNameOnAllTags();
        preventDefautlOnAnchorTags();
        //
        function preventDefautlOnAnchorTags() {
            var allAnchorTags;
            //
            allAnchorTags = $('a');
            //
            $.each(allAnchorTags, function(idx, elem){
                $(elem).click(function(evt){
                    evt.preventDefault();
                })
            })
        }
        function setBrowserNameOnAllTags() {
            var allElements;
            //
            allElements = $('*');
            //
            BrowserDetect.init();
            //
            allElements.addClass(BrowserDetect.browser.toLowerCase());
        }
     }
    //
    if(process.browser) {
        // SET INITIAL SIZE OF WINDOW
        store.commit('SET_WINDOW_DIMENSIONS', {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth
        })
        // RESET VALUES ON WINDOW RESIZE
        $(window).resize(function(evt) {
            //
            store.commit('SET_WINDOW_DIMENSIONS', {
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth
            })
        }) 
    }
}