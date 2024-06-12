import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(Quasar, quasarUserOptions);
app.use(router);
app.mount('#app');


// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

