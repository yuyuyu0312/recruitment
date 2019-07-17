const Mock = require('mockjs')

const RandomTitle = () => {
  return Mock.mock('@ctitle(18, 30)')
}

const NewPosition = Mock.mock({
  'positionList|10-40': [{
    'id|1000-9999': 1000,
    'title': RandomTitle(),
    'city|1': [
      '杭州',
      '上海',
      '广州',
      '深圳',
      '北京',
      '武汉',
      '苏州'
    ],
    'date|1-3': 1
  }]
})

module.exports = NewPosition