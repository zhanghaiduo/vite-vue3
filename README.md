# h5
## 基础框架
vite + vue3 + vuex4 + rem  基础框架
## 目录结构
```bash
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
├── src                        # 源代码
│   ├── api                    # 所有请求
│   │   ├── zhangqi            # 文件夹按项目名去区分
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── constants              # 常量文件(权限编码)
│   ├── directive              # 自定义指令(按钮权限控制v-has)
│   ├── filters                # 全局 filter
│   ├── router                 # 路由
│   │   ├── zhangqi            # 文件夹按项目名去区分
│   ├── store                  # 全局 store管理
│   │   ├── zhangqi            # 文件夹按项目名去区分
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   │   ├── zhangqi            # 文件夹按项目名去区分
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── .env.development           # 开发变量配置
├── .env.production            # 生产变量配置
├── .env.staging               # 测试变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
├── index.html                 # html模板
└── package.json               # package.json  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
