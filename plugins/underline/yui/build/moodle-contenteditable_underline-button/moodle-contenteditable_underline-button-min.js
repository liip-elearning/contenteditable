YUI.add("moodle-contenteditable_underline-button",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)};n.NAME="contenteditable_underline",n.ATTRS={},e.extend(n,e.Base,{initializer:function(e){M.editor_contenteditable.add_toolbar_button(e.elementid,"underline",e.icon,this.click)},click:function(e){e.preventDefault(),document.execCommand("underline",!1,null)}}),M.contenteditable_underline=M.contenteditable_underline||{},M.contenteditable_underline.init=function(e,t){return new n(e,t)}},"@VERSION@",{requires:["node"]});