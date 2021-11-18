import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
//you can import css into js
import './assets/styles/styles.css';
import './assets/styles/custom.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
