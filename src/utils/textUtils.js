/**
 * 计算文本在SVG中的宽度
 * @param {string} text - 要测量的文本
 * @param {number} fontSize - 字体大小（默认11px）
 * @returns {number} 文本宽度（像素）
 */
export function getTextWidth(text, fontSize = 11) {
  // 创建离屏 canvas
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  // 设置字体样式，使用等宽字体以确保字符间距一致
  context.font = `${fontSize}px monospace`

  // 精确测量文本宽度
  const metrics = context.measureText(text)

  // 不添加额外的内边距，使文本紧密排列
  return metrics.width
}
