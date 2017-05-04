# LobiPanel
[![CDNJS](https://img.shields.io/cdnjs/v/lobipanel.svg)](https://cdnjs.com/libraries/lobipanel)

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
        <!--Default installation-->
        <link rel="stylesheet" href="lib/jquery-ui.min.css"/>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css"/>

        <!--Installation using bower. Preferred!!! -->
        <!--<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css"/>-->
        <!--<link rel="stylesheet" href="bower_components/jquery-ui/themes/ui-lightness/jquery-ui.min.css"/>-->
        <!--Run `bower install font-awesome` and uncomment this line to see font awesome examples-->
        <!--<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css"/>-->

        <link rel="stylesheet" href="dist/css/lobipanel.min.css"/>
   </head>

    <body>
        ...
        <!--Default installation-->
        <script src="lib/jquery.1.11.min.js"></script>
        <script src="lib/jquery-ui.min.js"></script>
        <script src="lib/jquery.ui.touch-punch.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>

        <!--Installation using bower. Preferred!!! -->
        <!--<script src="bower_components/jquery/dist/jquery.min.js"></script>-->
        <!--<script src="bower_components/jquery-ui/jquery-ui.min.js"></script>-->
        <!--<script src="bower_components/jquery-ui-touch-punch-improved/jquery.ui.touch-punch-improved.js"></script>-->
        <!--<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>-->

        <script src="dist/js/lobipanel.js"></script>

   </body>
</html>
```

#### 2. Initialize plugin and use it

### For documentation and examples visit the plugin's [home page](http://lobianijs.com/site/lobipanel)
