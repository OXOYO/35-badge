import { createApp } from 'vue'
import App from './App.vue'
import 'highlight.js/styles/github.css'
import ElementPlus from 'element-plus'
import './styles/variables.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')