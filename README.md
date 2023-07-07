## 傻瓜式配置，将你的 web 页面秒变 PC 端应用 🤺

### 配置

* `cnpm install` ，注意，这里最好用 `cnpm`.
* 在 `app/main/index.js` 文件夹找到 `http://localhost:3000/` 直接替换为你自己项目的 web页面 `URL`

  ```
  // 创建一个变量来保存主窗口实例
  let win;

  // TODO: 创建主窗口
  const createWindow = () => {

    // TODO: 需要嵌入的web页面的 URL
    win.loadURL('http://localhost:3000/')

  }
  ```

### 启动

* `npm run dev`

### 打包

* `npm run pack`
