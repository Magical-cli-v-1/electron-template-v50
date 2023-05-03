module.exports = {
  packagerConfig: {
    "name": "Magical-electron-template",
    "productName": "Magical-electron-template",
    "description": "This is a Magical-electron-template",
    "version": "1.0.0",
    "authors": "Magical",
    "homepage": "https://your-app-homepage.com/",
    "repository": {
      "url": "https://your-app-repository.com/"
    }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
