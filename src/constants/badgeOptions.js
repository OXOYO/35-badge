// 年龄选项配置
export const AGE_OPTIONS = [
  { 
    value: '18-', 
    label: '18-',
    bgColor: '#FFB6C1', // 粉红色，代表年轻
    textColor: '#FFFFFF'
  },
  { 
    value: '18+', 
    label: '18+',
    bgColor: '#98FB98', // 淡绿色，代表青年
    textColor: '#000000'
  },
  { 
    value: '20+', 
    label: '20+',
    bgColor: '#87CEEB', // 天蓝色，代表壮年
    textColor: '#000000'
  },
  { 
    value: '30+', 
    label: '30+',
    bgColor: '#9370DB', // 中紫色
    textColor: '#FFFFFF'
  },
  { 
    value: '35+', 
    label: '35+',
    bgColor: '#4169E1', // 皇家蓝
    textColor: '#FFFFFF'
  },
  { 
    value: '40+', 
    label: '40+',
    bgColor: '#32CD32', // 酸橙绿
    textColor: '#FFFFFF'
  },
  { 
    value: '45+', 
    label: '45+',
    bgColor: '#FFD700', // 金色
    textColor: '#000000'
  },
  { 
    value: '50+', 
    label: '50+',
    bgColor: '#FF8C00', // 深橙色
    textColor: '#FFFFFF'
  },
  { 
    value: '60+', 
    label: '60+',
    bgColor: '#DC143C', // 深红色
    textColor: '#FFFFFF'
  },
  { 
    value: '70+', 
    label: '70+',
    bgColor: '#8B4513', // 棕色
    textColor: '#FFFFFF'
  },
  { 
    value: '80+', 
    label: '80+',
    bgColor: '#2F4F4F', // 深石板灰
    textColor: '#FFFFFF'
  },
  { 
    value: '90+', 
    label: '90+',
    bgColor: '#000000', // 黑色
    textColor: '#FFFFFF'
  },
  { 
    value: '100+', 
    label: '100+',
    bgColor: '#808080', // 灰色
    textColor: '#FFFFFF'
  }
]

// 学历选项配置
export const EDUCATION_OPTIONS = [
  { 
    value: '文盲', 
    label: '文盲',
    bgColor: '#808080', // 灰色
    textColor: '#FFFFFF'
  },
  { 
    value: '小学', 
    label: '小学',
    bgColor: '#9370DB', // 中紫色
    textColor: '#FFFFFF'
  },
  { 
    value: '初中', 
    label: '初中',
    bgColor: '#4169E1', // 皇家蓝
    textColor: '#FFFFFF'
  },
  { 
    value: '高中', 
    label: '高中',
    bgColor: '#32CD32', // 酸橙绿
    textColor: '#FFFFFF'
  },
  { 
    value: '大专', 
    label: '大专',
    bgColor: '#FFD700', // 金色
    textColor: '#000000'
  },
  { 
    value: '本科', 
    label: '本科',
    bgColor: '#FF8C00', // 深橙色
    textColor: '#FFFFFF'
  },
  { 
    value: '硕士', 
    label: '硕士',
    bgColor: '#DC143C', // 深红色
    textColor: '#FFFFFF'
  },
  { 
    value: '博士', 
    label: '博士',
    bgColor: '#000000', // 黑色
    textColor: '#FFFFFF'
  },
  // 本科学校的级别类选项
  { value: 'C9', label: 'C9', bgColor: '#FF6347', textColor: '#FFFFFF' },
  { value: '985', label: '985', bgColor: '#FF4500', textColor: '#FFFFFF' },
  { value: '211', label: '211', bgColor: '#FFD700', textColor: '#000000' },
  { value: '双一流', label: '双一流', bgColor: '#32CD32', textColor: '#FFFFFF' },
  { value: '常春藤', label: '常春藤', bgColor: '#000000', textColor: '#FFFFFF' },
  { value: '海归', label: '海归', bgColor: '#4169E1', textColor: '#FFFFFF' },
  { value: '双非', label: '双非', bgColor: '#808080', textColor: '#FFFFFF' },
  { value: '重本', label: '重本', bgColor: '#FF8C00', textColor: '#FFFFFF' },
  { value: '普本', label: '普本', bgColor: '#9370DB', textColor: '#FFFFFF' },
  { value: '专升本', label: '专升本', bgColor: '#20B2AA', textColor: '#FFFFFF' }
]

// 培养模式类选项
export const EDUCATION_MODE_OPTIONS = [
  { value: '本硕', label: '本硕' },
  { value: '本硕博', label: '本硕博' },
  { value: '直博', label: '直博' },
  { value: '硕博', label: '硕博' },
  { value: '双学位', label: '双学位' },
  { value: '联合培养', label: '联合培养' },
  { value: '中外合作', label: '中外合作' }
]

// 纯度类选项
export const EDUCATION_TYPE_OPTIONS = [
  { value: '全日制', label: '全日制' },
  { value: '非全日制', label: '非全日制' },
  { value: '保研', label: '保研' },
  { value: '考研', label: '考研' }
]

// 岗位选项配置
export const POSITION_OPTIONS = [
  { 
    value: '实习', 
    label: '实习',
    bgColor: '#87CEEB', // 天蓝色
    textColor: '#000000'
  },
  { 
    value: '初级', 
    label: '初级',
    bgColor: '#98FB98', // 淡绿色
    textColor: '#000000'
  },
  { 
    value: '中级', 
    label: '中级',
    bgColor: '#FFD700', // 金色
    textColor: '#000000'
  },
  { 
    value: '高级', 
    label: '高级',
    bgColor: '#FF8C00', // 深橙色
    textColor: '#FFFFFF'
  },
  { 
    value: '专家', 
    label: '专家',
    bgColor: '#DC143C', // 深红色
    textColor: '#FFFFFF'
  },
  { 
    value: '架构师', 
    label: '架构师',
    bgColor: '#000000', // 黑色
    textColor: '#FFFFFF'
  },
  { 
    value: '技术经理', 
    label: '技术经理',
    bgColor: '#8B008B', // 深洋红色
    textColor: '#FFFFFF'
  },
  { 
    value: 'CTO', 
    label: 'CTO',
    bgColor: '#4B0082', // 靛蓝色
    textColor: '#FFFFFF'
  }
]

// 在职状态选项配置
export const EMPLOYMENT_STATUS_OPTIONS = [
  { 
    value: '待业', 
    label: '待业',
    bgColor: '#808080', // 灰色
    textColor: '#FFFFFF'
  },
  { 
    value: '离职', 
    label: '离职',
    bgColor: '#A9A9A9', // 暗灰色
    textColor: '#FFFFFF'
  },
  { 
    value: '裁员', 
    label: '裁员',
    bgColor: '#696969', // 深灰色
    textColor: '#FFFFFF'
  },
  { 
    value: '实习', 
    label: '实习',
    bgColor: '#87CEEB', // 天蓝色
    textColor: '#000000'
  },
  { 
    value: '兼职', 
    label: '兼职',
    bgColor: '#98FB98', // 淡绿色
    textColor: '#000000'
  },
  { 
    value: '全职', 
    label: '全职',
    bgColor: '#32CD32', // 酸橙绿
    textColor: '#FFFFFF'
  },
  { 
    value: '自由职业', 
    label: '自由职业',
    bgColor: '#FFD700', // 金色
    textColor: '#000000'
  },
  { 
    value: '创业', 
    label: '创业',
    bgColor: '#FF8C00', // 深橙色
    textColor: '#FFFFFF'
  },
  { 
    value: '高管', 
    label: '高管',
    bgColor: '#DC143C', // 深红色
    textColor: '#FFFFFF'
  },
  { 
    value: '老板', 
    label: '老板',
    bgColor: '#000000', // 黑色
    textColor: '#FFFFFF'
  }
]

// 加班状态选项配置
export const OVERTIME_STATUS_OPTIONS = [
  { 
    value: '不加班', 
    label: '不加班',
    bgColor: '#98FB98', // 淡绿色
    textColor: '#000000'
  },
  { 
    value: '8小时工作制', 
    label: '8小时',
    bgColor: '#87CEEB', // 天蓝色
    textColor: '#000000'
  },
  { 
    value: '995', 
    label: '995',
    bgColor: '#FFD700', // 金色
    textColor: '#000000'
  },
  { 
    value: '996', 
    label: '996',
    bgColor: '#FF8C00', // 深橙色
    textColor: '#FFFFFF'
  },
  { 
    value: '大小周', 
    label: '大小周',
    bgColor: '#DC143C', // 深红色
    textColor: '#FFFFFF'
  },
  { 
    value: '1095', 
    label: '1095',
    bgColor: '#8B0000', // 深红色
    textColor: '#FFFFFF'
  },
  { 
    value: '007', 
    label: '007',
    bgColor: '#000000', // 黑色
    textColor: '#FFFFFF'
  }
]

// 年薪选项配置（只保留关键节点值）
export const SALARY_OPTIONS = [
  { 
    value: 0, 
    label: '0W',
    bgColor: '#E0E0E0', // 浅灰色
    textColor: '#000000'
  },
  { 
    value: 30, 
    label: '30W',
    bgColor: '#B0B0B0', // 中灰色
    textColor: '#000000'
  },
  { 
    value: 50, 
    label: '50W',
    bgColor: '#909090', // 深灰色
    textColor: '#FFFFFF'
  },
  { 
    value: 80, 
    label: '80W',
    bgColor: '#606060', // 更深的灰色
    textColor: '#FFFFFF'
  },
  { 
    value: 100, 
    label: '100W',
    bgColor: '#404040', // 深灰
    textColor: '#FFFFFF'
  },
  { 
    value: 150, 
    label: '150W',
    bgColor: '#000000', // 黑色
    textColor: '#FF0000' // 红色文字
  },
  { 
    value: 200, 
    label: '200W',
    bgColor: '#808080', // 灰色
    textColor: '#FFFFFF'
  },
  { 
    value: 999, 
    label: '财富自由',
    bgColor: '#FFD700', // 金色
    textColor: '#000000'
  }
]
