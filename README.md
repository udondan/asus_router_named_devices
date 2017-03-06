Rename devices on ASUS router
=============================

This is a small userscript to enable you to rename devices on ASUS router. You won't be able to rename devices on the fly through the ASUS UI. Instead you can define your MAC list in a JavaScript file.

Tested with firmware **1.1.2.2_34-g3271f8f** on an ASUS **DSL-AC52U**. Let me know if this doesn't work for you. I'm also happily accepting pull requests for improvements.

Setup
-----

Install [Web Override], which allows you to inject JavaScript, HTML and CSS into any website. Download [this file][import] and import it into Web Override.

The script is configured to run on the IP 192.168.1.1 - if your router is on another IP, change it in then Web Override settings.

Open the JavaScript section in Web Override and fill in the list of MAC addresses at the top.

   [Web Override]: https://chrome.google.com/webstore/detail/web-override/lllllobkincmdnjfkbknjacacmnlajll
   [import]: https://raw.githubusercontent.com/udondan/asus_router_named_devicesk/master/web_orverride_import.json
