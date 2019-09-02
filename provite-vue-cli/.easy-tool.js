module.exports = {
  // 指定一个源，将在该源下获取接口数据
  host: 'http://emptycup.hikvision.com.cn',
  upload: {
    // 上传多语言的基础目录（基于项目目录）
    entry: 'src/i18n/zh_CN',
    // Easy Tool平台的多语言Id
    id: ''
  },
  download: {
    // 下载多语言的基础目录（基于项目目录，无需手动创建）
    output: 'public/static/i18n',
    // Easy Tool平台的多语言Id集合, ids可以是数组或单个字符串
    ids: [
      '',
      ''
    ]
  }
}