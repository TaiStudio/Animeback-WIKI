
### Ajouter au menu Tray
```js
ExtensionAPI["ExtensionKit"].Tray("Example Extension", [{label: 'OTHERS',type: 'normal',click: () => {
   console.log('Hello Wordl !');
}}]);
```