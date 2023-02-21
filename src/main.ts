// vue import
import { createApp } from 'vue'
import App from './App.vue'

// router import
import router from './router'

// store import
import store from './store'

// md icons import
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'


// SCSS imports
import './style.scss'
import './components/DialogueBox.scss'
import './components/positions/GamePos1.scss'
import './components/positions/GamePos2.scss'
import './components/positions/GamePos3.scss'
import './components/positions/GamePos4.scss'


createApp(App)
    .use(mdiVue, {
        icons: mdijs
    })
    .use(router)
    .use(store)
    .mount('#app')
