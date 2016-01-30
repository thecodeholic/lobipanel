# LobiPanel
jQuery plugin for bootstrap panels. It extends panels with several common and useful functions.

[View Demo](http://lobianijs.com/site/lobipanel)

### Features

- Sort, drag, expand, resize, minimize bootstrap panels
- Specify url and load content in panel from this url
- Change the name of the panel
- Customize action icons and action tooltips
- Works for nested panels
- HTML5 localStorage support
    - Save panel state: (pinned, unpinned, collapsed, fullscreen, minimized) and apply it on page load
    - Save panel position among siblings and apply on next time

### Installation and dependecies

LobiPanel is depended on jQuery, jQuery ui and bootstrap.

#### 1. Include necessary css/js files

```html
<!DOCTYPE html>
<html>
   <head>
      <!--Include this css file in the <head> tag -->
      <link rel="stylesheet" href="lib/jquery-ui.min.css"/>
      <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="dist/css/lobipanel.min.css"/>
   </head>

   <body>
      ...
      <!--Include these script files in the <head> or <body> tag-->
      <script src="lib/jquery.1.11.min.js"></script>
      <script src="lib/jquery-ui.min.js"></script>
      <script src="bootstrap/dist/js/bootstrap.min.js"></script>
      <script src="dist/js/lobipanel.min.js"></script>
   </body>
</html>
```

#### 2. Initialize plugin and use it

### For documentation and examples visit the plugin's [home page](http://lobianijs.com/site/lobipanel)
