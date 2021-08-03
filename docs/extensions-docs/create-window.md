---
id: extension-window
title: Create window
description: Create window
slug: /extension/window
sidebar_position: 8
---

### Create a window
you can create custom windows for your options menu or other!
```js
ExtensionAPI["ExtensionKit"].createWindow("HTML file", "URL", "width", "height", "frame", "autoHideMenuBar", "resize", "nodeIntegration", "skipTaskbar", "iconFile", "alwaysOnTop", "BackgroundColor", "transparent", "Pos");
//Example
ExtensionAPI["ExtensionKit"].createWindow(ExtensionAPI["dir"].folder + "/pages/index.html", null, 640, 480, true, true, false, true, false, ExtensionAPI["dir"].folder + "/icon.png");
```