const { app, BrowserWindow, screen, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const io  = require('./server')
const path = require('path')

// 创建一个变量来保存主窗口实例
let win;

// TODO: 创建主窗口
const createWindow = () => {

  // 获取屏幕宽度和高度
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  // 设置主窗口的参数
  win = new BrowserWindow({
    width,
    height,
    // 开启node环境
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  // TODO: 需要嵌入的web页面的 URL
  win.loadURL('http://localhost:3000/')


  // TODO:用于区分是生产环境还是开发环境
  // if (isDev) {
  //   win.loadURL('http://localhost:3000/')
  // } else {
  //   win.loadFile(path.resolve(__dirname), '../renderer/src/index.html')
  // }

  // TODO: 在应用启动时开启开发者工具
  // win.webContents.openDevTools();

}

app.on('ready', createWindow)


// TODO: 利用 socket.io 和 渲染进程 建立通信
io.on('connection', (socket) => {
  socket.on('create-left-window', createLeftWindow);
});


// 创建一个变量来保存新窗口实例
let leftWindow = null;

const createLeftWindow = (event, arg) => {
  // 获取主页面的窗口大小信息
  let mainWindow = BrowserWindow.getFocusedWindow();
  // 如果 leftWindow 已存在，则将其激活
  if (leftWindow) {
    leftWindow.show();
  } else {
    // 创建新窗口
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    leftWindow = new BrowserWindow({
      fullscreen: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })
    // 全屏
    leftWindow.isMaximized();
    // 根据主页面设置左侧窗口弹出位置
    if (mainWindow) {
      let mainBounds = mainWindow.getBounds();
      leftWindow.setPosition(mainBounds.x - width, mainBounds.y);
    }
    // 新窗口的页面路由
    leftWindow.loadURL('http://localhost:3000/maps/detail');
    // 监听窗口关闭事件，释放变量并清空实例
    leftWindow.on('closed', () => {
      leftWindow = null;
    });
  }
}

