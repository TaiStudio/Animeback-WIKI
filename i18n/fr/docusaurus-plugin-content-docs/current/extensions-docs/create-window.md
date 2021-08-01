---
id: extension-window
title: Cree une fenêtre
description: Create window
slug: /extension/window
sidebar_position: 8
---

### Cree une fenêtre
vous pouvez crée des fenêtre personnalise pour votre menu options ou autre !
```js
ExtensionAPI["ExtensionKit"].createWindow("Fichier HTML", "URL", "width", "height", "frame", "autoHideMenuBar", "resize", "nodeIntegration", "skipTaskbar", "iconFile", "alwaysOnTop", "BackgroundColor", "transparent", "Pos");
//Exemple
ExtensionAPI["ExtensionKit"].createWindow(ExtensionAPI["dir"].folder + "/pages/index.html", null, 640, 480, true, true, false, true, false, ExtensionAPI["dir"].folder + "/icon.png");
```