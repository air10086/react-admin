/** 代码格式化配置文件 */
module.exports = {
  // 每行最多多少个字符
  printWidth: 80,
  //tab缩进 默认为2
  tabWidth: 2,
  // 使用tab缩进， 默认false
  useTabs: false,
  //使用分号 默认true
  semi: false,
  //使用单引号 默认false(在jsx中配置无效，默认是双引号)
  singleQuote: true,
  //对象属性的引号使用
  quoteProps: 'as-needed',
  // jsx单引号
  jsxSingleQuote: false,
  // 行尾逗号 默认none 可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: 'all',
  // 对象中的空格 默认true
  bracketSpacing: true,
  // jsx标签闭合标签 默认false
  jsxBracketSameLine: true,
  // 箭头函数参数括号 默认avoid 可选 avoid | always
  // avoid 能省略括号的时候省略 例 x => x
  arrowParens: 'avoid',
}
