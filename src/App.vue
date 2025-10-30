<template>
  <div id="app">
    <header class="header">
      <div class="header-content">
        <a class="header-text" href="/">
          <!-- <h1>{{ t('projectTitle') }}</h1> -->
           <img src="./assets/35-badge.svg" alt="35-Badge" />
          <p>{{ t('projectDescription') }}</p>
        </a>
        <div class="language-switch">
          <el-segmented
            :model-value="currentLang"
            :options="languageOptions"
            @change="onLanguageChange"
          />
        </div>
      </div>
    </header>
    
    <main class="main">
      <div class="content-wrapper">
        <BadgeGenerator />
      </div>
    </main>
    
    <footer class="footer">
      <div class="footer-content">
        <p>{{ t('projectLink') }}: 
          <el-link 
            :href="siteInfo.repository" 
            target="_blank" 
            type="primary"
          >
            {{ t('githubRepo') }}
          </el-link>
        </p>
        <p>© {{ new Date().getFullYear() }} 35-Badge. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from './composables/useI18n.js'
import BadgeGenerator from './components/BadgeGenerator.vue'
import { siteInfo } from './constants/config.js'

const { t, switchLanguage, currentLang } = useI18n()

const languageOptions = computed(() => [
  { label: '中文', value: 'zh' },
  { label: 'English', value: 'en' }
])

const onLanguageChange = (lang) => {
  switchLanguage(lang)
  window.document.title = t('projectDescription')
}

onMounted(() => {
  window.document.title = t('projectDescription')
})

</script>

<style>
@import './styles/variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color-primary);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: var(--primary-gradient);
  color: var(--text-color-primary);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: var(--container-max-width);
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.header-text h1 {
  font-size: 32px;
  margin-bottom: 4px;
  font-weight: 700;
}

.header-text p {
  font-size: 16px;
  opacity: 0.9;
  color: var(--text-color-secondary);
  margin: 0;
}

.header-text {
  text-decoration: none;
  color: inherit;
  display: block;
}

.header-text:hover {
  text-decoration: none;
}

.language-switch {
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-base);
  padding: 4px;
}

.main {
  flex: 1;
  padding: 20px 0;
}

.content-wrapper {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
}

.footer {
  background: #333;
  color: white;
  padding: 24px 0;
  text-align: center;
  margin-top: auto;
}

.footer-content p {
  margin-bottom: 8px;
}

.footer a {
  color: #64b5f6;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .header-text h1 {
    font-size: 28px;
  }
  
  .main {
    padding: 16px 0;
  }
}
</style>