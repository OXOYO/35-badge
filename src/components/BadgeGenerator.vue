<template>
  <div class="badge-generator">
    <el-row :gutter="20">
      <!-- 左侧配置区域 -->
      <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
        <div class="config-panel">
          <!-- 基础信息配置 -->
          <div class="section">
            <h2>{{ t('formTitle') }}</h2>
            <div class="badge-options">
              <!-- 徽章配置 -->
              <div
                v-for="(item, segment) in badgeConfig"
                :key="segment"
                class="option-group"
              >
                <div class="option-row">
                  <label>{{ t(segment) }}:</label>
                  <el-radio-group :model-value="item.value">
                    <el-radio
                      v-for="(option, index) in OPTIONS_MAP[segment]"
                      :key="index"
                      :value="option.value"
                      @click="handleRadioClick(segment, option.value)"
                    >
                      <span
                        class="badge-option"
                        :style="{
                          backgroundColor: option.bgColor,
                          color: option.textColor
                        }"
                      >
                        {{ option.label }}
                      </span>
                    </el-radio>
                  </el-radio-group>
                  <el-input-number
                    v-model="item.index"
                    :min="1"
                    :max="20"
                    :disabled="item.value === ''"
                    controls-position="right"
                  />
                  <el-color-picker
                    v-model="item.bgColor"
                    :predefine="PREDEFINE_COLORS"
                    :disabled="item.value === ''"
                    @active-change="
                      color => handleColorChange(segment, 'bgColor', color)
                    "
                  />
                  <el-color-picker
                    v-model="item.textColor"
                    :predefine="PREDEFINE_COLORS"
                    :disabled="item.value === ''"
                    @active-change="
                      color => handleColorChange(segment, 'textColor', color)
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- 自定义文本段 -->
          <div class="section">
            <h2>{{ t('customText') }}</h2>
            <div class="custom-text-section">
              <div
                v-for="(item, index) in customTexts"
                :key="index"
                class="option-group"
              >
                <div class="option-row">
                  <label>{{ t('customText') }}{{ index + 1 }}:</label>
                  <el-input
                    v-model="item.text"
                    :placeholder="`${t('customText')}${index + 1}`"
                    clearable
                    maxlength="5"
                    show-word-limit
                  ></el-input>
                  <el-input-number
                    v-model="item.index"
                    :min="1"
                    :max="20"
                    :disabled="item.value === ''"
                    controls-position="right"
                  />
                  <el-color-picker
                    v-model="item.bgColor"
                    :predefine="PREDEFINE_COLORS"
                    :disabled="!item.text"
                    @active-change="
                      color =>
                        handleCustomTextColorChange(index, 'bgColor', color)
                    "
                  />
                  <el-color-picker
                    v-model="item.textColor"
                    :predefine="PREDEFINE_COLORS"
                    :disabled="!item.text"
                    @active-change="
                      color =>
                        handleCustomTextColorChange(index, 'textColor', color)
                    "
                  />
                  <el-button
                    v-if="customTexts.length > 1"
                    type="danger"
                    :icon="Delete"
                    @click="removeCustomText(index)"
                  />
                </div>
              </div>
              <div class="option-group">
                <el-button
                  v-if="customTexts.length < MAX_CUSTOM_TEXT_COUNT"
                  type="primary"
                  :icon="Plus"
                  style="width: 100%"
                  @click="addCustomText"
                >
                </el-button>
              </div>
            </div>
          </div>

          <!-- 样式设置 -->
          <div class="section">
            <h2>{{ t('styleSettings') }}</h2>
            <div class="style-options">
              <div class="option-group">
                <label>{{ t('badgeStyle') }}:</label>
                <el-select
                  v-model="styleConfig.badgeStyle"
                  :placeholder="t('badgeStyle')"
                >
                  <el-option
                    v-for="item in BADGE_STYLES"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>

          <!-- 链接设置 -->
          <div class="section">
            <h2>{{ t('linkSettings') }}</h2>
            <div class="link-options">
              <div class="option-group">
                <label>{{ t('linkUrl') }}:</label>
                <el-input
                  v-model="linkConfig.url"
                  :placeholder="t('linkUrl')"
                  clearable
                ></el-input>
              </div>

              <div class="option-group">
                <label>{{ t('linkTarget') }}:</label>
                <el-select
                  v-model="linkConfig.target"
                  :placeholder="t('linkTarget')"
                >
                  <el-option
                    v-for="item in LINK_TARGETS"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>

              <div class="option-group">
                <label>{{ t('linkTitle') }}:</label>
                <el-input
                  v-model="linkConfig.title"
                  :placeholder="t('linkTitle')"
                  clearable
                ></el-input>
              </div>
            </div>
          </div>
        </div>
      </el-col>

      <!-- 右侧预览区域 -->
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <div class="preview-panel">
          <div class="section">
            <h2>{{ t('previewTitle') }}</h2>
            <div class="badge-preview-container">
              <div class="badge-preview" v-html="linkedBadgeSvg"></div>
            </div>

            <div class="badge-code-container">
              <pre><code ref="svgCodeRef" class="language-xml hljs" v-html="highlightedSvgCode"></code></pre>
            </div>

            <div class="badge-actions">
              <el-button type="primary" @click="copySvgCode">
                {{ t('copySvgCode') }}
              </el-button>
              <el-button type="success" @click="downloadSvg">
                {{ t('downloadSvg') }}
              </el-button>
              <el-button type="warning" @click="downloadPng">
                {{ t('downloadPng') }}
              </el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import { getTextWidth } from '../utils/textUtils.js'
import { useI18n } from '../composables/useI18n.js'
import {
  AGE_OPTIONS,
  EDUCATION_OPTIONS,
  POSITION_OPTIONS,
  EMPLOYMENT_STATUS_OPTIONS,
  OVERTIME_STATUS_OPTIONS,
  SALARY_OPTIONS,
  PREDEFINE_COLORS,
  DEFAULT_COLORS,
  BADGE_STYLES,
  LINK_TARGETS
} from '../constants/badgeOptions.js'

import { Delete, Plus } from '@element-plus/icons-vue'

// 注册 highlight.js 的 XML 语言支持
hljs.registerLanguage('xml', xml)

const { t } = useI18n()

// 选项集合
const OPTIONS_MAP = {
  age: AGE_OPTIONS,
  education: EDUCATION_OPTIONS,
  position: POSITION_OPTIONS,
  employmentStatus: EMPLOYMENT_STATUS_OPTIONS,
  overtimeStatus: OVERTIME_STATUS_OPTIONS,
  salary: SALARY_OPTIONS
}

// 徽章配置
const badgeConfig = reactive({
  age: {
    index: 0,
    value: '',
    bgColor: DEFAULT_COLORS.bgColor,
    textColor: DEFAULT_COLORS.textColor
  },
  education: {
    index: 1,
    value: '',
    bgColor: DEFAULT_COLORS.bgColor,
    textColor: DEFAULT_COLORS.textColor
  },
  position: {
    index: 2,
    value: '',
    bgColor: DEFAULT_COLORS.bgColor,
    textColor: DEFAULT_COLORS.textColor
  },
  employmentStatus: {
    index: 3,
    value: '',
    bgColor: DEFAULT_COLORS.bgColor,
    textColor: DEFAULT_COLORS.textColor
  },
  overtimeStatus: {
    index: 4,
    value: '',
    bgColor: DEFAULT_COLORS.bgColor,
    textColor: DEFAULT_COLORS.textColor
  },
  salary: {
    index: 5,
    value: '',
    bgColor: DEFAULT_COLORS.bgColor,
    textColor: DEFAULT_COLORS.textColor
  }
})

// 自定义文本数组
const customTexts = ref([
  { index: 6, text: '', bgColor: '#007ec6', textColor: '#fff' }
])

const MAX_CUSTOM_TEXT_COUNT = 5

// 样式配置
const styleConfig = ref({
  badgeStyle: 'flat'
})

// 链接配置
const linkConfig = ref({
  url: '',
  target: '_blank',
  title: ''
})

// SVG 代码引用
const svgCodeRef = ref(null)

// 添加自定义文本项
const addCustomText = () => {
  if (customTexts.value.length < MAX_CUSTOM_TEXT_COUNT) {
    customTexts.value.push({
      index: customTexts.value.length + 6,
      text: '',
      bgColor: DEFAULT_COLORS.bgColor,
      textColor: DEFAULT_COLORS.textColor
    })
  }
}

// 删除自定义文本项
const removeCustomText = index => {
  if (customTexts.value.length > 1) {
    customTexts.value.splice(index, 1)
  }
}

// 处理自定义文本颜色变化
const handleCustomTextColorChange = (index, type, color) => {
  customTexts.value[index][type] = color || DEFAULT_COLORS[type]
}

// 处理单选按钮点击事件
const handleRadioClick = (segment, value) => {
  // 如果点击的是已选中的选项，则取消选中
  if (badgeConfig[segment].value === value) {
    badgeConfig[segment].value = ''
    // 重置颜色为默认值
    badgeConfig[segment].bgColor = DEFAULT_COLORS.bgColor
    badgeConfig[segment].textColor = DEFAULT_COLORS.textColor
  } else {
    // 选中新选项
    const option = OPTIONS_MAP[segment].find(opt => opt.value === value)
    if (option) {
      badgeConfig[segment].value = value
      badgeConfig[segment].bgColor = option.bgColor
      badgeConfig[segment].textColor = option.textColor
    }
  }
}

// 处理颜色变化
const handleColorChange = (segment, type, color) => {
  if (color) {
    return
  }
  const value = badgeConfig[segment].value
  if (value !== '') {
    const option = OPTIONS_MAP[segment].find(opt => opt.value === value)
    if (option) {
      color = option[type]
    }
  }
  badgeConfig[segment][type] = color || DEFAULT_COLORS[type]
}

// 生成徽章SVG
const badgeSvg = computed(() => {
  // 构建活动段落
  const segments = []

  Object.keys(badgeConfig).forEach(segment => {
    if (badgeConfig[segment] && badgeConfig[segment].value !== '') {
      segments.push({
        index: badgeConfig[segment].index,
        label: segment,
        text: badgeConfig[segment].value,
        bgColor: badgeConfig[segment].bgColor,
        textColor: badgeConfig[segment].textColor
      })
    }
  })

  // 添加自定义文本段落
  customTexts.value.forEach(item => {
    if (item.text) {
      segments.push({
        index: item.index,
        label: item.text,
        text: item.text,
        bgColor: item.bgColor,
        textColor: item.textColor
      })
    }
  })

  // 排序
  segments.sort((a, b) => a.index - b.index)

  if (segments.length === 0) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20"><rect width="100" height="20" fill="#e0e0e0" rx="3"/><text x="50" y="15" font-family="monospace" font-size="11" fill="#666" text-anchor="middle">${t('emptyBadge')}</text></svg>`
  }

  // 计算每个段落的宽度，确保文本有足够的空间显示
  let totalWidth = 0
  const segmentWidths = []

  segments.forEach(segment => {
    // 计算文本宽度，并添加足够的padding确保文本不会被截断
    const textWidth = getTextWidth(segment.text, 11) + 10 // 增加更多padding确保文本完全显示
    segmentWidths.push(textWidth)
    totalWidth += textWidth
  })

  // 根据样式配置设置SVG属性
  let height = 20 // 默认高度
  const fontSize = 11 // 默认字体大小
  const fontWeight = 'normal' // 默认字体粗细
  const textY = 15 // 默认文本Y坐标
  let useGradient = false // 是否使用渐变
  let useShadow = false // 是否使用阴影
  let crispEdges = false // 是否使用crispEdges渲染
  let rx = 3 // 默认圆角半径

  // 根据徽章样式调整属性
  switch (styleConfig.value.badgeStyle) {
    case 'flat':
      height = 20
      useGradient = true
      useShadow = true
      rx = 3
      break
    case 'flat-square':
      height = 20
      crispEdges = true
      rx = 0
      break
    case 'plastic':
      height = 18
      useGradient = true
      useShadow = true
      rx = 4
      break
    default:
      // default样式与flat相同
      height = 20
      useGradient = true
      useShadow = true
      rx = 3
  }

  // 生成SVG - 创建连接在一起的徽章段落
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}"`

  // 如果使用crispEdges渲染，添加shape-rendering属性
  if (crispEdges) {
    svg += ` shape-rendering="crispEdges"`
  }

  svg += '>'

  // 如果使用渐变，添加渐变定义
  if (useGradient) {
    svg += `<linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>`
  }

  // 如果使用圆角或阴影，添加clipPath
  if (rx > 0 || useShadow) {
    svg += `<clipPath id="r">
    <rect width="${totalWidth}" height="${height}" rx="${rx}" fill="#fff"/>
  </clipPath>`
  }

  // 绘制背景和文本作为一个整体，避免重叠
  let currentX = 0

  // 如果使用clipPath，将所有内容包装在g标签中
  if (rx > 0 || useShadow) {
    svg += '<g clip-path="url(#r)">'
  }

  segments.forEach((segment, index) => {
    const width = segmentWidths[index]

    // 绘制背景矩形
    svg += `<rect x="${currentX}" y="0" width="${width}" height="${height}" fill="${segment.bgColor}"`

    // 如果使用crispEdges，不需要额外属性
    if (crispEdges) {
      svg += '/>'
    } else {
      svg += '/>'
    }

    // 更新下一个段落的起始位置
    currentX += width
  })

  // 如果使用渐变，绘制渐变层
  if (useGradient) {
    svg += `<rect width="${totalWidth}" height="${height}" fill="url(#s)"/>`
  }

  // 结束clipPath包装
  if (rx > 0 || useShadow) {
    svg += '</g>'
  }

  // 绘制文本
  svg += `<g fill="#fff" text-anchor="middle" font-family="monospace" text-rendering="geometricPrecision" font-size="${fontSize}0"`

  if (fontWeight !== 'normal') {
    svg += ` font-weight="${fontWeight}"`
  }

  svg += '>'

  // 重置currentX以重新计算文本位置
  currentX = 0
  segments.forEach((segment, index) => {
    const width = segmentWidths[index]
    const textX = currentX + width / 2

    // 如果使用阴影效果，添加阴影文本
    if (useShadow) {
      svg += `<text aria-hidden="true" x="${textX * 10}" y="${textY * 10 + 10}" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${getTextWidth(segment.text, fontSize) * 10}">${segment.text}</text>`
    }

    // 添加主文本
    svg += `<text x="${textX * 10}" y="${textY * 10}" transform="scale(.1)" fill="${segment.textColor}" textLength="${getTextWidth(segment.text, fontSize) * 10}">${segment.text}</text>`

    // 更新下一个段落的起始位置
    currentX += width
  })

  svg += '</g>'

  svg += '</svg>'

  return svg
})

// 生成带链接的徽章SVG
const linkedBadgeSvg = computed(() => {
  if (!linkConfig.value.url) {
    return badgeSvg.value
  }

  let linkStart = `<a href="${linkConfig.value.url}" target="${linkConfig.value.target}"`
  if (linkConfig.value.title) {
    linkStart += ` title="${linkConfig.value.title}"`
  }
  linkStart += '>'

  return linkStart + badgeSvg.value + '</a>'
})

// 用于代码预览的SVG（包含链接）
const badgeSvgForCodePreview = computed(() => {
  if (!linkConfig.value.url) {
    return badgeSvg.value
  }

  let linkStart = `<a href="${linkConfig.value.url}" target="${linkConfig.value.target}"`
  if (linkConfig.value.title) {
    linkStart += ` title="${linkConfig.value.title}"`
  }
  linkStart += '>'

  return linkStart + badgeSvg.value + '</a>'
})

// 高亮SVG代码
const highlightedSvgCode = computed(() => {
  return hljs.highlight(badgeSvgForCodePreview.value, { language: 'xml' }).value
})

// 在组件挂载后高亮代码
onMounted(() => {
  if (svgCodeRef.value) {
    hljs.highlightElement(svgCodeRef.value)
  }
})

// 复制SVG到剪贴板
const copySvgCode = () => {
  navigator.clipboard.writeText(badgeSvg.value)
  ElMessage.success(t('copySvgCode') + ' ' + t('success'))
}

// 下载SVG
const downloadSvg = () => {
  const blob = new Blob([badgeSvg.value], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'badge.svg'
  a.click()
  URL.revokeObjectURL(url)
  ElMessage.success(t('downloadSvg') + ' ' + t('success'))
}

// 下载PNG
const downloadPng = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const img = new Image()

  img.onload = () => {
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)

    const pngUrl = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = pngUrl
    a.download = 'badge.png'
    a.click()
    ElMessage.success(t('downloadPng') + ' ' + t('success'))
  }

  img.src = 'data:image/svg+xml,' + encodeURIComponent(badgeSvg.value)
}
</script>

<style scoped>
.badge-generator {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.main-content {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.config-panel {
  flex: 1;
  min-width: 300px;
}

.preview-panel {
  flex: 1;
  min-width: 300px;
  position: sticky;
  top: 140px;
}

.section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.section:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.section h2 {
  margin-top: 0;
  color: #333;
  border-bottom: 2px solid #409eff;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.option-group {
  margin-bottom: 15px;
}

.option-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.option-row label {
  font-weight: bold;
  min-width: 80px;
}

.education-details {
  margin-top: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.checkbox-group label {
  font-weight: normal;
}

.color-picker-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.segment-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}

.preview-badge {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.style-options {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.link-options {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.custom-text-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

/* 徽章选项样式 */
.badge-option {
  display: inline-block;
  padding: 0 4px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  min-width: 40px;
  box-sizing: border-box;
  transition: transform 0.2s ease;
}

.badge-option:hover {
  transform: scale(1.1);
}

/* 预览区域样式 */
.badge-preview-container {
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px dashed #ddd;
}

.badge-code-container {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  max-height: 300px;
  overflow-y: auto;
}

.badge-code-container pre {
  margin: 0;
  background: transparent;
  white-space: nowrap;
}

.badge-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .badge-generator {
    padding: 10px;
  }

  .style-options,
  .link-options,
  .custom-text-section {
    grid-template-columns: 1fr;
  }

  .option-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .option-row label {
    min-width: auto;
    margin-bottom: 5px;
  }

  .badge-preview-container {
    padding: 10px;
  }

  .badge-actions {
    flex-direction: column;
  }

  .badge-actions .el-button {
    width: 100%;
  }
}
</style>
