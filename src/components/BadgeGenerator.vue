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
              <!-- 年龄 -->
              <div class="option-group">
                <div class="option-row">
                  <label>{{ t('age') }}:</label>
                  <el-radio-group 
                    :model-value="badgeConfig.age">
                    <el-radio 
                      v-for="(option, index) in ageOptions" 
                      :key="index"
                      :value="option.value"
                      @click="handleRadioClick('age', option.value)">
                      <span 
                        class="badge-option" 
                        :style="{ backgroundColor: option.bgColor, color: option.textColor }">
                        {{ option.label }}
                      </span>
                    </el-radio>
                  </el-radio-group>
                  <el-color-picker 
                    v-model="segmentColors.age.bgColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.age"
                    :value-on-clear="getOptionColor('age', 'bgColor')"
                    @active-change="(color) => handleColorChange('age', 'bgColor', color)" />
                  <el-color-picker 
                    v-model="segmentColors.age.textColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.age"
                    :value-on-clear="getOptionColor('age', 'textColor')"
                    @active-change="(color) => handleColorChange('age', 'textColor', color)" />
                </div>
              </div>

              <!-- 学历 -->
              <div class="option-group">
                <div class="option-row">
                  <label>{{ t('education') }}:</label>
                  <el-radio-group 
                    :model-value="badgeConfig.education">
                    <el-radio 
                      v-for="(option, index) in educationOptions" 
                      :key="index"
                      :value="option.value"
                      @click="handleRadioClick('education', option.value)">
                      <span 
                        class="badge-option" 
                        :style="{ backgroundColor: option.bgColor, color: option.textColor }">
                        {{ option.label }}
                      </span>
                    </el-radio>
                  </el-radio-group>
                  <el-color-picker 
                    v-model="segmentColors.education.bgColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.education"
                    :value-on-clear="getOptionColor('education', 'bgColor')"
                    @active-change="(color) => handleColorChange('education', 'bgColor', color)" />
                  <el-color-picker 
                    v-model="segmentColors.education.textColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.education"
                    :value-on-clear="getOptionColor('education', 'textColor')"
                    @active-change="(color) => handleColorChange('education', 'textColor', color)" />
                </div>
                
                <!-- 本科及以上时显示额外选项 -->
                <div v-if="showEducationDetails" class="education-details">
                  <div class="checkbox-group">
                    <label>学历详情:</label>
                    <el-checkbox-group 
                      v-model="combinedEducationDetails"
                      @change="handleEducationDetailsChange">
                      <el-checkbox 
                        v-for="item in allEducationOptions" 
                        :key="item.value" 
                        :label="item.value">
                        <span 
                          class="badge-option"
                          :style="{ 
                            backgroundColor: getEducationOptionColor(item.value, 'bgColor'), 
                            color: getEducationOptionColor(item.value, 'textColor') 
                          }">
                          {{ item.label }}
                        </span>
                      </el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>

              <!-- 岗位 -->
              <div class="option-group">
                <div class="option-row">
                  <label>{{ t('position') }}:</label>
                  <el-radio-group 
                    :model-value="badgeConfig.position">
                    <el-radio 
                      v-for="(option, index) in positionOptions" 
                      :key="index"
                      :value="option.value"
                      @click="handleRadioClick('position', option.value)">
                      <span 
                        class="badge-option" 
                        :style="{ backgroundColor: option.bgColor, color: option.textColor }">
                        {{ option.label }}
                      </span>
                    </el-radio>
                  </el-radio-group>
                  <el-color-picker 
                    v-model="segmentColors.position.bgColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.position"
                    :value-on-clear="getOptionColor('position', 'bgColor')"
                    @active-change="(color) => handleColorChange('position', 'bgColor', color)" />
                  <el-color-picker 
                    v-model="segmentColors.position.textColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.position"
                    :value-on-clear="getOptionColor('position', 'textColor')"
                    @active-change="(color) => handleColorChange('position', 'textColor', color)" />
                </div>
              </div>

              <!-- 在职状态 -->
              <div class="option-group">
                <div class="option-row">
                  <label>{{ t('employmentStatus') }}:</label>
                  <el-radio-group 
                    :model-value="badgeConfig.employmentStatus">
                    <el-radio 
                      v-for="(option, index) in employmentStatusOptions" 
                      :key="index"
                      :value="option.value"
                      @click="handleRadioClick('employmentStatus', option.value)">
                      <span 
                        class="badge-option" 
                        :style="{ backgroundColor: option.bgColor, color: option.textColor }">
                        {{ option.label }}
                      </span>
                    </el-radio>
                  </el-radio-group>
                  <el-color-picker 
                    v-model="segmentColors.employmentStatus.bgColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.employmentStatus"
                    :value-on-clear="getOptionColor('employmentStatus', 'bgColor')"
                    @active-change="(color) => handleColorChange('employmentStatus', 'bgColor', color)" />
                  <el-color-picker 
                    v-model="segmentColors.employmentStatus.textColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.employmentStatus"
                    :value-on-clear="getOptionColor('employmentStatus', 'textColor')"
                    @active-change="(color) => handleColorChange('employmentStatus', 'textColor', color)" />
                </div>
              </div>

              <!-- 加班状态 -->
              <div class="option-group">
                <div class="option-row">
                  <label>{{ t('overtimeStatus') }}:</label>
                  <el-radio-group 
                    :model-value="badgeConfig.overtimeStatus">
                    <el-radio 
                      v-for="(option, index) in overtimeStatusOptions" 
                      :key="index"
                      :value="option.value"
                      @click="handleRadioClick('overtimeStatus', option.value)">
                      <span 
                        class="badge-option" 
                        :style="{ backgroundColor: option.bgColor, color: option.textColor }">
                        {{ option.label }}
                      </span>
                    </el-radio>
                  </el-radio-group>
                  <el-color-picker 
                    v-model="segmentColors.overtimeStatus.bgColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.overtimeStatus"
                    :value-on-clear="getOptionColor('overtimeStatus', 'bgColor')"
                    @active-change="(color) => handleColorChange('overtimeStatus', 'bgColor', color)" />
                  <el-color-picker 
                    v-model="segmentColors.overtimeStatus.textColor" 
                    :predefine="predefineColors"
                    :disabled="!badgeConfig.overtimeStatus"
                    :value-on-clear="getOptionColor('overtimeStatus', 'textColor')"
                    @active-change="(color) => handleColorChange('overtimeStatus', 'textColor', color)" />
                </div>
              </div>

              <!-- 年薪 -->
              <div class="option-group">
                <div class="option-row">
                  <label>年薪:</label>
                  <el-radio-group 
                    :model-value="badgeConfig.salary">
                    <el-radio 
                      v-for="(option, index) in salaryOptions" 
                      :key="index"
                      :value="option.value"
                      @click="handleSalaryClick(option.value)">
                      <span 
                        class="badge-option" 
                        :style="{ backgroundColor: option.bgColor, color: option.textColor }">
                        {{ option.label }}
                      </span>
                    </el-radio>
                  </el-radio-group>
                  <el-color-picker 
                    v-model="segmentColors.salary.bgColor" 
                    :predefine="predefineColors"
                    :disabled="badgeConfig.salary === 0"
                    :value-on-clear="getDefaultSalaryColor('bgColor')"
                    @active-change="(color) => handleSalaryColorChange('bgColor', color)" />
                  <el-color-picker 
                    v-model="segmentColors.salary.textColor" 
                    :predefine="predefineColors"
                    :disabled="badgeConfig.salary === 0"
                    :value-on-clear="getDefaultSalaryColor('textColor')"
                    @active-change="(color) => handleSalaryColorChange('textColor', color)" />
                </div>
              </div>
            </div>
          </div>

          <!-- 样式设置 -->
          <div class="section">
            <h2>{{ t('styleSettings') }}</h2>
            <div class="style-options">
              <div class="option-group">
                <label>{{ t('badgeStyle') }}:</label>
                <el-select v-model="styleConfig.badgeStyle" :placeholder="t('badgeStyle')">
                  <el-option
                    v-for="item in badgeStyles"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
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
                <el-select v-model="linkConfig.target" :placeholder="t('linkTarget')">
                  <el-option
                    v-for="item in linkTargets"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
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

          <!-- 自定义文本段 -->
          <div class="section">
            <h2>{{ t('customText') }}</h2>
            <div class="custom-text-section">
              <div 
                v-for="(item, index) in customTexts" 
                :key="index" 
                class="option-group">
                <div class="option-row">
                  <label>{{ t('customText') }}{{ index + 1 }}:</label>
                  <el-input 
                    v-model="item.text" 
                    :placeholder="`${t('customText')}${index + 1}`"
                    clearable
                    maxlength="5"
                    show-word-limit
                  ></el-input>
                  <el-color-picker 
                    v-model="item.bgColor" 
                    :predefine="predefineColors"
                    :disabled="!item.text"
                    :value-on-clear="getDefaultCustomTextColors(index + 1, 'bgColor')"
                    @active-change="(color) => handleCustomTextBgColorChange(index, color)" />
                  <el-color-picker 
                    v-model="item.textColor" 
                    :predefine="predefineColors"
                    :disabled="!item.text"
                    :value-on-clear="getDefaultCustomTextColors(index + 1, 'textColor')"
                    @active-change="(color) => handleCustomTextColorChange(index, color)" />
                  <el-button 
                    v-if="customTexts.length > 1" 
                    type="danger" 
                    :icon="Delete" 
                    @click="removeCustomText(index)" />
                </div>
              </div>
              <div class="option-group">
                <el-button 
                  v-if="customTexts.length < 5" 
                  type="primary" 
                  :icon="Plus" 
                  @click="addCustomText">
                </el-button>
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
              <div class="badge-preview" 
                   v-html="linkedBadgeSvg">
              </div>
            </div>
            
            <div class="badge-code-container">
              <pre><code ref="svgCodeRef" class="language-xml hljs" v-html="highlightedSvgCode"></code></pre>
            </div>
            
            <div class="badge-actions">
              <el-button 
                type="primary" 
                @click="copySvgCode">
                {{ t('copyCode') }}
              </el-button>
              <el-button 
                type="success" 
                @click="downloadSvg">
                {{ t('downloadSvg') }}
              </el-button>
              <el-button 
                type="warning" 
                @click="downloadPng">
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
import { ref, computed, onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import { getTextWidth } from '../utils/textUtils.js'
import { useI18n } from '../composables/useI18n.js'
import {
  BADGE_STYLES,
  LINK_TARGETS,
} from '../constants/styleOptions.js'
import {
  AGE_OPTIONS,
  EDUCATION_OPTIONS,
  POSITION_OPTIONS,
  EMPLOYMENT_STATUS_OPTIONS,
  OVERTIME_STATUS_OPTIONS,
  SALARY_OPTIONS,
  EDUCATION_MODE_OPTIONS,
  EDUCATION_TYPE_OPTIONS
} from '../constants/badgeOptions.js'

import {
  Delete,
  Plus
} from '@element-plus/icons-vue'

// 注册 highlight.js 的 XML 语言支持
hljs.registerLanguage('xml', xml)

const { t } = useI18n()

// 徽章配置
const badgeConfig = ref({
  age: '',
  education: '',
  position: '',
  employmentStatus: '',
  overtimeStatus: '',
  salary: 0, // 年薪选项
  universityLevel: [], // 学校级别选项
  educationMode: [], // 培养模式选项
  educationType: [], // 学习类型选项
  customText: '',
  customText2: '',
  customText3: '',
  customText4: '',
  customText5: '',
  customText6: '',
  customText7: '',
  customText8: '',
  customText9: '',
  customText10: ''
})

// 自定义文本数组
const customTexts = ref([
  { text: '', bgColor: '#007ec6', textColor: '#fff' },
])

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

// 段落颜色配置
const segmentColors = ref({
  age: {
    bgColor: '#555',
    textColor: '#fff'
  },
  education: {
    bgColor: '#4c1',
    textColor: '#fff'
  },
  position: {
    bgColor: '#fe7d37',
    textColor: '#fff'
  },
  employmentStatus: {
    bgColor: '#97ca00',
    textColor: '#fff'
  },
  overtimeStatus: {
    bgColor: '#e05d44',
    textColor: '#fff'
  },
  salary: {
    bgColor: '#FFA500',
    textColor: '#000'
  }
})

// 选项颜色映射
const optionColorMap = {
  age: AGE_OPTIONS,
  education: EDUCATION_OPTIONS,
  position: POSITION_OPTIONS,
  employmentStatus: EMPLOYMENT_STATUS_OPTIONS,
  overtimeStatus: OVERTIME_STATUS_OPTIONS
}

// 预定义颜色
const predefineColors = [
  '#555',
  '#007ec6',
  '#4c1',
  '#fe7d37',
  '#97ca00',
  '#e05d44',
  '#800080',
  '#e99695',
  '#f0f0f0',
  '#000'
]

// 选项配置
const ageOptions = AGE_OPTIONS
const educationOptions = EDUCATION_OPTIONS
const allEducationOptions = [...EDUCATION_MODE_OPTIONS, ...EDUCATION_TYPE_OPTIONS]
const positionOptions = POSITION_OPTIONS
const employmentStatusOptions = EMPLOYMENT_STATUS_OPTIONS
const overtimeStatusOptions = OVERTIME_STATUS_OPTIONS
const salaryOptions = SALARY_OPTIONS

// 样式选项
const badgeStyles = BADGE_STYLES
const linkTargets = LINK_TARGETS


// SVG 代码引用
const svgCodeRef = ref(null)

// 学历值到标签的映射
const educationValueToLabel = {
  'highSchool': '高中',
  'associate': '大专',
  'bachelor': '本科',
  'master': '硕士',
  'doctor': '博士'
}

// 判断是否显示学历详情选项（本科及以上）
const showEducationDetails = computed(() => {
  const higherEducationLevels = ['本科', '硕士', '博士']
  const selectedEducation = badgeConfig.value.education
  if (!selectedEducation) return false
  
  const selectedLabel = educationValueToLabel[selectedEducation]
  return selectedLabel && higherEducationLevels.includes(selectedLabel)
})

// 学历详情计算属性（合并三个维度）
const combinedEducationDetails = computed({
  get() {
    return [
      ...badgeConfig.value.universityLevel,
      ...badgeConfig.value.educationMode,
      ...badgeConfig.value.educationType
    ];
  },
  set(value) {
    // 虽然值会通过handleEducationDetailsChange处理，但需要一个空的set方法
    // 实际的处理逻辑在handleEducationDetailsChange中
  }
});

// 获取选项颜色
const getOptionColor = (segment, type) => {
  const value = badgeConfig.value[segment]
  if (value) {
    const option = optionColorMap[segment].find(opt => opt.value === value)
    if (option) {
      return type === 'bgColor' ? option.bgColor : option.textColor
    }
  }
  
  // 默认颜色
  const defaultColors = {
    age: { bgColor: '#555', textColor: '#fff' },
    education: { bgColor: '#4c1', textColor: '#fff' },
    position: { bgColor: '#fe7d37', textColor: '#fff' },
    employmentStatus: { bgColor: '#97ca00', textColor: '#fff' },
    overtimeStatus: { bgColor: '#e05d44', textColor: '#fff' }
  }
  
  return defaultColors[segment][type]
}

// 获取自定义文本的默认颜色
const getDefaultCustomTextColors = (index, type) => {
  // 默认颜色配置
  const defaultColors = {
    bgColor: '#007ec6',
    textColor: '#fff'
  }
  
  return defaultColors[type]
}

// 添加自定义文本项
const addCustomText = () => {
  if (customTexts.value.length < 5) {
    customTexts.value.push({ 
      text: '', 
      bgColor: '#007ec6', 
      textColor: '#fff' 
    })
  }
}

// 删除自定义文本项
const removeCustomText = (index) => {
  if (customTexts.value.length > 1) {
    customTexts.value.splice(index, 1)
  }
}

// 处理自定义文本背景颜色变化
const handleCustomTextBgColorChange = (index, color) => {
  if (customTexts.value[index]) {
    customTexts.value[index].bgColor = color
  }
}

// 处理自定义文本文字颜色变化
const handleCustomTextColorChange = (index, color) => {
  if (customTexts.value[index]) {
    customTexts.value[index].textColor = color
  }
}

// 获取年薪的默认颜色
const getDefaultSalaryColor = (type) => {
  // 默认颜色配置
  const defaultColors = {
    bgColor: '#FFA500',
    textColor: '#000'
  }
  
  return defaultColors[type]
}

// 处理年龄变化
const handleAgeChange = (value) => {
  if (value === 0) {
    badgeConfig.value.age = ''
    segmentColors.value.age.bgColor = '#555'
    segmentColors.value.age.textColor = '#fff'
  } else {
    const selectedOption = ageOptions[value - 1]
    if (selectedOption) {
      badgeConfig.value.age = selectedOption.value
      segmentColors.value.age.bgColor = selectedOption.bgColor
      segmentColors.value.age.textColor = selectedOption.textColor
    }
  }
}

// 处理学历变化
const handleEducationChange = (value) => {
  if (!value) {
    segmentColors.value.education.bgColor = '#4c1'
    segmentColors.value.education.textColor = '#fff'
  } else {
    const selectedOption = educationOptions.find(opt => opt.value === value)
    if (selectedOption) {
      segmentColors.value.education.bgColor = selectedOption.bgColor
      segmentColors.value.education.textColor = selectedOption.textColor
    }
  }
}

// 处理学历详情变化
const handleEducationDetailsChange = (value) => {
  // 重置所有学历详情选项
  badgeConfig.value.universityLevel = [];
  badgeConfig.value.educationMode = [];
  badgeConfig.value.educationType = [];
  
  // 根据选中的值分类
  value.forEach(item => {
    // 检查培养模式选项
    const educationModeOption = EDUCATION_MODE_OPTIONS.find(opt => opt.value === item);
    if (educationModeOption) {
      badgeConfig.value.educationMode.push(item);
      return;
    }
    
    // 检查学习类型选项
    const educationTypeOption = EDUCATION_TYPE_OPTIONS.find(opt => opt.value === item);
    if (educationTypeOption) {
      badgeConfig.value.educationType.push(item);
      return;
    }
    
    // 其他选项（原UNIVERSITY_LEVEL_OPTIONS）直接添加到universityLevel
    // 因为UNIVERSITY_LEVEL_OPTIONS已合并到EDUCATION_OPTIONS中
    if (!educationModeOption && !educationTypeOption) {
      badgeConfig.value.universityLevel.push(item);
      return;
    }
  });
};

// 处理岗位变化
const handlePositionChange = (value) => {
  if (!value) {
    segmentColors.value.position.bgColor = '#fe7d37'
    segmentColors.value.position.textColor = '#fff'
  } else {
    const selectedOption = positionOptions.find(opt => opt.value === value)
    if (selectedOption) {
      segmentColors.value.position.bgColor = selectedOption.bgColor
      segmentColors.value.position.textColor = selectedOption.textColor
    }
  }
}

// 处理在职状态变化
const handleEmploymentStatusChange = (value) => {
  if (!value) {
    segmentColors.value.employmentStatus.bgColor = '#97ca00'
    segmentColors.value.employmentStatus.textColor = '#fff'
  } else {
    const selectedOption = employmentStatusOptions.find(opt => opt.value === value)
    if (selectedOption) {
      segmentColors.value.employmentStatus.bgColor = selectedOption.bgColor
      segmentColors.value.employmentStatus.textColor = selectedOption.textColor
    }
  }
}

// 处理加班状态变化
const handleOvertimeStatusChange = (value) => {
  if (!value) {
    segmentColors.value.overtimeStatus.bgColor = '#e05d44'
    segmentColors.value.overtimeStatus.textColor = '#fff'
  } else {
    const selectedOption = overtimeStatusOptions.find(opt => opt.value === value)
    if (selectedOption) {
      segmentColors.value.overtimeStatus.bgColor = selectedOption.bgColor
      segmentColors.value.overtimeStatus.textColor = selectedOption.textColor
    }
  }
}

// 处理年薪变化
const handleSalaryChange = (value) => {
  // 如果当前已选中该选项，则取消选中
  if (badgeConfig.value.salary === value) {
    badgeConfig.value.salary = 0
  }
}

// 处理年薪选项点击事件
const handleSalaryClick = (value) => {
  // 如果点击的是已选中的选项，则取消选中
  if (badgeConfig.value.salary === value) {
    badgeConfig.value.salary = 0
  } else {
    // 选中新选项
    badgeConfig.value.salary = value
  }
}

// 处理财富自由变化
const handleFinancialFreedomChange = (value) => {
  // 财富自由状态会在复选框变化时自动更新，因为是v-model绑定
}

// 处理选项变化
const handleOptionChange = (segment, value) => {
  // 如果值为空或者与当前值相同，则清空选择（实现取消选中功能）
  if (!value || badgeConfig.value[segment] === value) {
    badgeConfig.value[segment] = ''
    // 重置颜色为默认值
    const defaultColors = getDefaultColors(segment)
    segmentColors.value[segment].bgColor = defaultColors.bgColor
    segmentColors.value[segment].textColor = defaultColors.textColor
  } else {
    // 更新对应段落的颜色
    const option = getOptionByValue(segment, value)
    if (option) {
      badgeConfig.value[segment] = value
      segmentColors.value[segment].bgColor = option.bgColor
      segmentColors.value[segment].textColor = option.textColor
    }
  }
}

// 切换单选按钮选择状态
const toggleRadioSelection = (segment, value) => {
  // 如果当前已选中该选项，则取消选中
  if (badgeConfig.value[segment] === value) {
    badgeConfig.value[segment] = ''
    // 重置颜色为默认值
    const defaultColors = getDefaultColors(segment)
    segmentColors.value[segment].bgColor = defaultColors.bgColor
    segmentColors.value[segment].textColor = defaultColors.textColor
  }
}

// 处理单选按钮点击事件
const handleRadioClick = (segment, value) => {
  // 如果点击的是已选中的选项，则取消选中
  if (badgeConfig.value[segment] === value) {
    badgeConfig.value[segment] = ''
    // 重置颜色为默认值
    const defaultColors = getDefaultColors(segment)
    segmentColors.value[segment].bgColor = defaultColors.bgColor
    segmentColors.value[segment].textColor = defaultColors.textColor
  } else {
    // 选中新选项
    const option = getOptionByValue(segment, value)
    if (option) {
      badgeConfig.value[segment] = value
      segmentColors.value[segment].bgColor = option.bgColor
      segmentColors.value[segment].textColor = option.textColor
    }
  }
}

// 根据值获取选项
const getOptionByValue = (segment, value) => {
  switch (segment) {
    case 'age':
      return ageOptions.find(option => option.value === value)
    case 'education':
      return educationOptions.find(option => option.value === value)
    case 'position':
      return positionOptions.find(option => option.value === value)
    case 'employmentStatus':
      return employmentStatusOptions.find(option => option.value === value)
    case 'overtimeStatus':
      return overtimeStatusOptions.find(option => option.value === value)
    default:
      return null
  }
}

// 获取默认颜色
const getDefaultColors = (segment) => {
  switch (segment) {
    case 'age':
      return { bgColor: '#555', textColor: '#fff' }
    case 'education':
      return { bgColor: '#4c1', textColor: '#fff' }
    case 'position':
      return { bgColor: '#fe7d37', textColor: '#fff' }
    case 'employmentStatus':
      return { bgColor: '#97ca00', textColor: '#fff' }
    case 'overtimeStatus':
      return { bgColor: '#e05d44', textColor: '#fff' }
    default:
      return { bgColor: '#555', textColor: '#fff' }
  }
}

// 处理多选选项变化
const handleMultiOptionChange = (segment, value) => {
  // 移除限制，允许选择任意数量的选项
  // 原代码: if (value && value.length > 3) { badgeConfig.value[segment] = value.slice(0, 3) }
}

// 处理颜色变化
const handleColorChange = (segment, type, color) => {
  // 使用 value-on-clear 属性处理清空操作，这里不需要特殊处理
}

// 处理年薪颜色变化
const handleSalaryColorChange = (type, color) => {
  // 使用 value-on-clear 属性处理清空操作，这里不需要特殊处理
}

// 生成徽章SVG
const badgeSvg = computed(() => {
  // 构建活动段落
  const segments = []
  
  if (badgeConfig.value.age) {
    segments.push({
      label: '年龄',
      text: badgeConfig.value.age,
      bgColor: segmentColors.value.age.bgColor,
      textColor: segmentColors.value.age.textColor
    })
  }
  
  if (badgeConfig.value.education) {
    segments.push({
      label: '学历',
      text: badgeConfig.value.education,
      bgColor: segmentColors.value.education.bgColor,
      textColor: segmentColors.value.education.textColor
    })
    
    // 添加学历详情段落（将三个维度合并为一个段落）
    const educationDetails = [];
    
    // 添加学校级别
    if (badgeConfig.value.universityLevel && badgeConfig.value.universityLevel.length > 0) {
      educationDetails.push(...badgeConfig.value.universityLevel);
    }

    // 添加培养模式
    if (badgeConfig.value.educationMode && badgeConfig.value.educationMode.length > 0) {
      educationDetails.push(...badgeConfig.value.educationMode);
    }

    // 添加学习类型
    if (badgeConfig.value.educationType && badgeConfig.value.educationType.length > 0) {
      educationDetails.push(...badgeConfig.value.educationType);
    }

    if (educationDetails.length > 0) {
      segments.push({
        label: '学历详情',
        text: educationDetails.join('+'),
        bgColor: '#007ec6',
        textColor: '#fff'
      })
    }
  }
  
  if (badgeConfig.value.position) {
    segments.push({
      label: '岗位',
      text: badgeConfig.value.position,
      bgColor: segmentColors.value.position.bgColor,
      textColor: segmentColors.value.position.textColor
    })
  }
  
  if (badgeConfig.value.employmentStatus) {
    segments.push({
      label: '在职状态',
      text: badgeConfig.value.employmentStatus,
      bgColor: segmentColors.value.employmentStatus.bgColor,
      textColor: segmentColors.value.employmentStatus.textColor
    })
  }
  
  if (badgeConfig.value.overtimeStatus) {
    segments.push({
      label: '加班状态',
      text: badgeConfig.value.overtimeStatus,
      bgColor: segmentColors.value.overtimeStatus.bgColor,
      textColor: segmentColors.value.overtimeStatus.textColor
    })
  }

  // 添加年薪段落
  if (badgeConfig.value.salary === 999) {
    segments.push({
      label: '财富自由',
      text: '财富自由',
      bgColor: segmentColors.value.salary?.bgColor || '#FFD700',
      textColor: segmentColors.value.salary?.textColor || '#000'
    });
  } else if (badgeConfig.value.salary > 0) {
    segments.push({
      label: '年薪',
      text: `${badgeConfig.value.salary}W`,
      bgColor: segmentColors.value.salary?.bgColor || '#FFA500',
      textColor: segmentColors.value.salary?.textColor || '#000'
    });
  }

  // 添加自定义文本段落
  customTexts.value.forEach((item, index) => {
    if (item.text) {
      segments.push({
        label: `自定义文本${index + 1}`,
        text: item.text,
        bgColor: item.bgColor,
        textColor: item.textColor
      })
    }
  })

  if (segments.length === 0) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="20"><rect width="100" height="20" fill="#e0e0e0" rx="3"/><text x="50" y="15" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11" fill="#666" text-anchor="middle">${t('emptyBadge')}</text></svg>`
  }

  // 计算每个段落的宽度，确保文本有足够的空间显示
  let totalWidth = 0
  const segmentWidths = []
  
  segments.forEach(segment => {
    // 使用getTextWidth计算文本宽度，并添加足够的padding确保文本不会被截断
    const textWidth = getTextWidth(segment.text, 11) + 10; // 增加更多padding确保文本完全显示
    segmentWidths.push(textWidth)
    totalWidth += textWidth
  })

  // 根据样式配置设置SVG属性
  let height = 20 // 默认高度
  let fontSize = 11 // 默认字体大小
  let fontWeight = 'normal' // 默认字体粗细
  let textY = 15 // 默认文本Y坐标
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
  svg += `<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" text-rendering="geometricPrecision" font-size="${fontSize}0"`
  
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
const copySvg = () => {
  navigator.clipboard.writeText(badgeSvg.value)
  ElMessage.success(t('copySvg') + ' ' + t('success'))
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
  top: 0;
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
  padding: 4px 8px;
  border-radius: 10px;
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
