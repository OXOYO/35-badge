<template>
  <div id="app">
    <header class="header">
      <div class="header-content">
        <h1>{{ t('projectTitle') }}</h1>
        <p>{{ t('projectDescription') }}</p>
        <div class="language-switch">
          <el-button 
            :type="currentLang === 'zh' ? 'primary' : 'default'" 
            @click="switchLanguage('zh')"
            size="small"
          >
            中文
          </el-button>
          <el-button 
            :type="currentLang === 'en' ? 'primary' : 'default'" 
            @click="switchLanguage('en')"
            size="small"
          >
            English
          </el-button>
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
            href="https://github.com/your-username/35-badge" 
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
import { useI18n } from './composables/useI18n.js'
import BadgeGenerator from './components/BadgeGenerator.vue'

const { t, switchLanguage, currentLang } = useI18n()
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  position: relative;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.language-switch {
  position: absolute;
  top: 0;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
}

.main {
  flex: 1;
  padding: 2rem 0;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer {
  background: #333;
  color: white;
  padding: 2rem 0;
  text-align: center;
  margin-top: auto;
}

.footer-content p {
  margin-bottom: 0.5rem;
}

.footer a {
  color: #64b5f6;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .header p {
    font-size: 1rem;
  }
  
  .language-switch {
    position: static;
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>