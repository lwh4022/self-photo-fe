import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ChainedBackend from 'i18next-chained-backend';
import HttpApi from 'i18next-http-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'


i18n
.use(initReactI18next)
.use(ChainedBackend)

.init({
  fallbackLng : 'kr',
  lng: 'kr',
  initImmediate: false,
  backend: {
    backends : [
      LocalStorageBackend,
      HttpApi
    ],
    backendOptions : [{
      prefix: 'language_',
      store:  typeof window !== 'undefined' ? window.localStorage : null,
      expirationTime: 1 * 24 * 60 * 60 * 1000
    }, {
      loadPath: '/locales/{{ns}}/{{lng}}.json'
    }]
  },
  ns: ["App", 'Login'],
  defaultNS: 'App',
  debug : true,
  saveMissing : true,
  supportedLngs: ['kr', 'vn'],
  lowerCaseLng: true,
  missingKeyHandler : (_, ns, key) => {
    console.error(`${ns} key : ${key} not found`)
  },
  interpolation: {
    escapeValue : false
  }
})

export default i18n