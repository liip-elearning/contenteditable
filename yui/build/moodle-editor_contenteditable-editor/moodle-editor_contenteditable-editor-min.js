YUI.add("moodle-editor_contenteditable-editor",function(e,t){M.editor_contenteditable=M.editor_contenteditable||{buttonhandlers:{},filepickeroptions:{},add_toolbar_button:function(t,n,r,i){var s=e.one("#"+t+"_toolbar"),o=e.Node.create('<button class="contenteditable_'+n+'_button" data-editor="'+e.Escape.html(t)+'">'+r+"</button>");s.append(o),M.editor_contenteditable.buttonhandlers[n]||(e.one("body").delegate("click",i,".contenteditable_"+n+"_button"),M.editor_contenteditable.buttonhandlers[n]=!0)},init:function(t){var n=e.one("#"+t.elementid),r=e.Node.create('<div id="'+t.elementid+'editable" '+'contenteditable="true" '+'spellcheck="true" '+'class="editor_contenteditable"/>'),i="",s=e.Node.create('<div class="editor_contenteditable_toolbar" id="'+t.elementid+'_toolbar"/>'),o=e.io(t.content_css,{sync:!0}),u=o.responseText.indexOf("font:");u&&(i=o.responseText.substring(u+"font:".length,o.responseText.length-1),r.setStyle("font",i)),r.setStyle("min-height",1.2*(n.getAttribute("rows")-1)+"em"),r.append(n.get("value")),n.get("parentNode").insert(s,n),n.get("parentNode").insert(r,n),n.hide(),r.on("blur",function(){n.set("value",r.getHTML())}),M.editor_contenteditable.filepickeroptions[t.elementid]=t.filepickeroptions},show_filepicker:function(t,n,r){e.use("core_filepicker",function(e){var i=M.editor_contenteditable.filepickeroptions[t][n];i.formcallback=r,i.editor_target=e.one(t),M.core_filepicker.show(e,i)})},get_selection:function(){if(window.getSelection){var e=window.getSelection(),t=[],n=0;for(n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n));return t}return document.selection&&document.selection.createRange?document.selection.createRange():!1},set_selection:function(e){var t,n;if(window.getSelection){t=window.getSelection(),t.removeAllRanges();for(n=0;n<e.length;n++)t.addRange(e[n])}else document.selection&&e.select&&e.select()}}},"@VERSION@",{requires:["node","io"]});