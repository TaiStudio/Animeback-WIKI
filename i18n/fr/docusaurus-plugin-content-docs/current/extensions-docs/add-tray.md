---
sidebar_label: 'Ajouter au TRAY!'
sidebar_position: 9
---

### Ajouter au menu Tray
```js
ExtensionAPI["ExtensionKit"].Tray("Example Extension", [{label: 'OTHERS',type: 'normal',click: () => {
   console.log('Hello Wordl !');
}}]);
```