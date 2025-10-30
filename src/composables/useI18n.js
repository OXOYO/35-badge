import { ref, computed } from 'vue'
import zh from '../locales/zh.js'
import en from '../locales/en.js'

const languages = {
  zh,
  en
}

const currentLanguage = ref('zh')

export function useI18n() {
  const t = key => {
    return languages[currentLanguage.value][key] || key
  }

  const switchLanguage = lang => {
    currentLanguage.value = lang
  }

  const currentLang = computed(() => currentLanguage.value)

  return {
    t,
    switchLanguage,
    currentLang
  }
}
