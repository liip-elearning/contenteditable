YUI.add("moodle-contenteditable_bold-button",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)};n.NAME="contenteditable_bold",n.ATTRS={},e.extend(n,e.Base,{initializer:function(e){M.editor_contenteditable.add_toolbar_button(e.elementid,"bold",e.icon,this.click)},click:function(e){e.preventDefault(),document.execCommand("bold",!1,null)}}),M.contenteditable_bold=M.contenteditable_bold||{},M.contenteditable_bold.init=function(e,t){return new n(e,t)}},"@VERSION@",{requires:["node"]});