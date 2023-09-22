# primevue-veevalidate

primevue-veevalidate 範本專案

## 套件說明

| 名稱                     | 功能      | 官方網站                                                         |
| ------------------------ | --------- | ---------------------------------------------------------------- |
| vite                     | 構件工具  | https://vitejs.dev/                                              |
| vee-validate             | 驗證表單  | https://vee-validate.logaretm.com/v4/                            |
| primevue                 | UI 元件庫 | https://primevue.org/                                            |
| vite-plugin-vue-devtools | Debug     | https://github.com/webfansplz/vite-plugin-vue-devtools/tree/main |
| Global Validators        | Debug     | https://vee-validate.logaretm.com/v4/guide/global-validators/    |
| Localization (i18n)      | Debug     | https://vee-validate.logaretm.com/v4/guide/i18n/                 |

## 設定中文語系以及使用全域驗證器

### main.js

```javascript
import { configure, defineRule } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

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
```
