// 样式选项常量

// 徽章样式选项
export const BADGE_STYLES = [
  { label: '平面样式', value: 'flat', description: '扁平化设计样式' },
  { label: '平面方形', value: 'flat-square', description: '扁平化设计，无圆角' },
  { label: '塑料样式', value: 'plastic', description: '塑料质感样式' }
]

// 徽章颜色选项
export const BADGE_COLORS = [
  { label: '亮绿色', value: 'brightgreen', hex: '#4c1' },
  { label: '绿色', value: 'green', hex: '#97ca00' },
  { label: '黄绿色', value: 'yellowgreen', hex: '#a4a61d' },
  { label: '黄色', value: 'yellow', hex: '#dfb317' },
  { label: '橙黄色', value: 'orange', hex: '#fe7d37' },
  { label: '橙色', value: 'red', hex: '#e05d44' },
  { label: '红色', value: 'lightgrey', hex: '#9f9f9f' },
  { label: '蓝色', value: 'blue', hex: '#007ec6' },
  { label: '灰色', value: 'grey', hex: '#555' },
  { label: '浅灰', value: 'lightgray', hex: '#9f9f9f' },
  { label: '粉色', value: 'pink', hex: '#e99695' },
  { label: '紫色', value: 'purple', hex: '#800080' }
]

// 链接目标选项
export const LINK_TARGETS = [
  { label: '_blank (新窗口)', value: '_blank' },
  { label: '_self (当前窗口)', value: '_self' },
  { label: '_parent (父窗口)', value: '_parent' },
  { label: '_top (顶层窗口)', value: '_top' }
]

// 徽章对齐选项
export const BADGE_ALIGNMENTS = [
  { label: '居左', value: 'left' },
  { label: '居中', value: 'center' },
  { label: '居右', value: 'right' }
]