import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

export default ({app, store})  => {
    const messages = {
        en: {
            message: require('~/locales/en.json')
        },
        es: {
            message: require('~/locales/es.json')
        },
        fr: {
            message: require('~/locales/fr.json')
        }
    }

    app.i18n = new VueI18n({
        locale: 'es',
        messages
    })
}