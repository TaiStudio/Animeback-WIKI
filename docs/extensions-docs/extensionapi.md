
### ExtensionAPI
```js
ExtensionAPI['ExtensionKit'];   //explain below
ExtensionAPI['ipcMain'];        //
ExtensionAPI['screen'];         //
ExtensionAPI['dir'];            //returns the files of your extension
```

```js
console.log(ExtensionAPI);
//returns
// {
//     ExtensionKit: {
//       main: [Function: main],
//       createWindow: [Function: createWindow],
//       Tray: [Function: Tray],
//       reloadTray: [Function: reloadTray],
//       wallpaperExtend: [Function: wallpaperExtend]
//     },
//     ipcMain: IpcMainImpl {
//       _events: [Object: null prototype] {
//         error: [Function],
//         __ELECTRON_LOG_IPC_default__: [Function],
//         changebg: [Function],
//         optionCustom: [Function],
//         optionCustomURL: [Function],
//         optionCustomDelete: [Function],
//         optionOpenFolderExtensions: [Function],
//         downloadExtension: [Function],
//         removeExtension: [Function],
//         unloadExtension: [Function],
//         optionClock: [Function]
//       },
//       _eventsCount: 11,
//       _maxListeners: undefined,
//       _invokeHandlers: Map {},
//       handle: [Function],
//       handleOnce: [Function],
//       [Symbol(kCapture)]: false
//     },
//     screen: {},
//     dir: {
//       folder: 'AppData/Roaming/.AnimeBack/extensions/extension-name',
//       config: 'AppData/Roaming/.AnimeBack/extensions/.config/Extension Name'
//     }
// }
```