import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';
import { configure, defineRule } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// 設定錯誤訊息中文
configure({
  generateMessage: localize({
    zh_TW
  })
});

//設定區域語系
setLocale('zh_TW');

// Install all rules
Object.keys(AllRules).forEach((rule) => {
  if (rule !== 'default') {
    defineRule(rule, AllRules[rule]);
  }
});

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component('Button', Button);
app.component('TabMenu', TabMenu);
app.component('InputText', InputText);

app.mount('#app');
