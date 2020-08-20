<!-- @format -->

# qiankun 主应用

使用[creat-react-app](https://www.html.cn/create-react-app/docs/getting-started/)创建。

### PS

1. 安装了[huskey githooks](https://www.html.cn/create-react-app/docs/setting-up-your-editor/)触发代码提交时候格式化以及校验，如果不想要，可以把
   `package.json`的对应`husky`以及`lint-staged`属性移除。

```json
"lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --single-quote --write",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```
