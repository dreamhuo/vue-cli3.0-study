
import { createApp } from './app'

const { app } = createApp();

// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount('#app');
