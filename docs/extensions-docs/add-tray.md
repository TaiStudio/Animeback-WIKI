---
sidebar_label: 'Add to Tray menu'
sidebar_position: 9
---

### Add to Tray menu
```js
   ExtensionAPI["ExtensionKit"].Tray("Example Extension", [{label: 'OTHERS',type: 'normal',click: () => {
      console.log('Hello Wordl !');
   }}]);
```