if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/moodle-contenteditable_link-button/moodle-contenteditable_link-button.js']) {
   __coverage__['build/moodle-contenteditable_link-button/moodle-contenteditable_link-button.js'] = {"path":"build/moodle-contenteditable_link-button/moodle-contenteditable_link-button.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":65}}},"2":{"name":"(anonymous_2)","line":7,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":28}}},"3":{"name":"(anonymous_3)","line":8,"loc":{"start":{"line":8,"column":30},"end":{"line":8,"column":42}}},"4":{"name":"(anonymous_4)","line":33,"loc":{"start":{"line":33,"column":19},"end":{"line":33,"column":31}}},"5":{"name":"(anonymous_5)","line":39,"loc":{"start":{"line":39,"column":23},"end":{"line":39,"column":40}}},"6":{"name":"(anonymous_6)","line":46,"loc":{"start":{"line":46,"column":15},"end":{"line":46,"column":27}}},"7":{"name":"(anonymous_7)","line":58,"loc":{"start":{"line":58,"column":23},"end":{"line":58,"column":43}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":80,"column":50}},"2":{"start":{"line":4,"column":0},"end":{"line":77,"column":2}},"3":{"start":{"line":8,"column":8},"end":{"line":29,"column":10}},"4":{"start":{"line":9,"column":12},"end":{"line":9,"column":61}},"5":{"start":{"line":10,"column":12},"end":{"line":10,"column":31}},"6":{"start":{"line":11,"column":12},"end":{"line":13,"column":13}},"7":{"start":{"line":12,"column":16},"end":{"line":12,"column":23}},"8":{"start":{"line":14,"column":12},"end":{"line":14,"column":88}},"9":{"start":{"line":15,"column":12},"end":{"line":28,"column":13}},"10":{"start":{"line":16,"column":16},"end":{"line":21,"column":19}},"11":{"start":{"line":23,"column":16},"end":{"line":23,"column":34}},"12":{"start":{"line":24,"column":16},"end":{"line":24,"column":96}},"13":{"start":{"line":25,"column":16},"end":{"line":25,"column":103}},"14":{"start":{"line":26,"column":16},"end":{"line":26,"column":32}},"15":{"start":{"line":27,"column":16},"end":{"line":27,"column":59}},"16":{"start":{"line":31,"column":8},"end":{"line":31,"column":114}},"17":{"start":{"line":34,"column":8},"end":{"line":34,"column":57}},"18":{"start":{"line":35,"column":8},"end":{"line":35,"column":27}},"19":{"start":{"line":37,"column":8},"end":{"line":37,"column":109}},"20":{"start":{"line":40,"column":8},"end":{"line":40,"column":47}},"21":{"start":{"line":41,"column":8},"end":{"line":44,"column":9}},"22":{"start":{"line":42,"column":12},"end":{"line":42,"column":85}},"23":{"start":{"line":43,"column":12},"end":{"line":43,"column":66}},"24":{"start":{"line":47,"column":8},"end":{"line":47,"column":27}},"25":{"start":{"line":48,"column":8},"end":{"line":48,"column":47}},"26":{"start":{"line":50,"column":8},"end":{"line":50,"column":67}},"27":{"start":{"line":52,"column":8},"end":{"line":52,"column":39}},"28":{"start":{"line":53,"column":8},"end":{"line":56,"column":9}},"29":{"start":{"line":54,"column":12},"end":{"line":54,"column":85}},"30":{"start":{"line":55,"column":12},"end":{"line":55,"column":61}},"31":{"start":{"line":59,"column":8},"end":{"line":71,"column":103}},"32":{"start":{"line":73,"column":8},"end":{"line":73,"column":84}},"33":{"start":{"line":74,"column":8},"end":{"line":74,"column":89}},"34":{"start":{"line":75,"column":8},"end":{"line":75,"column":23}}},"branchMap":{"1":{"line":4,"type":"binary-expr","locations":[{"start":{"line":4,"column":25},"end":{"line":4,"column":47}},{"start":{"line":4,"column":51},"end":{"line":77,"column":1}}]},"2":{"line":11,"type":"if","locations":[{"start":{"line":11,"column":12},"end":{"line":11,"column":12}},{"start":{"line":11,"column":12},"end":{"line":11,"column":12}}]},"3":{"line":15,"type":"if","locations":[{"start":{"line":15,"column":12},"end":{"line":15,"column":12}},{"start":{"line":15,"column":12},"end":{"line":15,"column":12}}]},"4":{"line":15,"type":"binary-expr","locations":[{"start":{"line":15,"column":16},"end":{"line":15,"column":58}},{"start":{"line":15,"column":62},"end":{"line":15,"column":108}}]},"5":{"line":41,"type":"if","locations":[{"start":{"line":41,"column":8},"end":{"line":41,"column":8}},{"start":{"line":41,"column":8},"end":{"line":41,"column":8}}]},"6":{"line":53,"type":"if","locations":[{"start":{"line":53,"column":8},"end":{"line":53,"column":8}},{"start":{"line":53,"column":8},"end":{"line":53,"column":8}}]}},"code":["(function () { YUI.add('moodle-contenteditable_link-button', function (Y, NAME) {","","","M.contenteditable_link = M.contenteditable_link || {","    dialogue : null,","    selection : null,","    init : function(params) {","        var display_chooser = function(e) {","            var elementid = this.getAttribute('data-editor');","            e.preventDefault();","            if (!M.editor_contenteditable.is_active(elementid)) {","                return;","            }","            M.contenteditable_link.selection = M.editor_contenteditable.get_selection();","            if (M.contenteditable_link.selection !== false && (M.contenteditable_link.selection + '') !== '') {","                var dialogue = new M.core.dialogue({","                    visible: false,","                    modal: true,","                    close: true,","                    draggable: true","                });","","                dialogue.render();","                dialogue.set('bodyContent', M.contenteditable_link.get_form_content(elementid));","                dialogue.set('headerContent', M.util.get_string('createlink', 'contenteditable_link'));","                dialogue.show();","                M.contenteditable_link.dialogue = dialogue;","            }","        };","","        M.editor_contenteditable.add_toolbar_button(params.elementid, 'link', params.icon, display_chooser, this);","    },","    open_browser : function(e) {","        var elementid = this.getAttribute('data-editor');","        e.preventDefault();","","        M.editor_contenteditable.show_filepicker(elementid, 'link', M.contenteditable_link.browser_callback);","    },","    browser_callback : function(params) {","        M.contenteditable_link.dialogue.hide();","        if (params.url !== '') {","            M.editor_contenteditable.set_selection(M.contenteditable_link.selection);","            document.execCommand('createLink', false, params.url);","        }","    },","    set_link : function(e) {","        e.preventDefault();","        M.contenteditable_link.dialogue.hide();","","        var input = e.currentTarget.get('parentNode').one('input');","","        var value = input.get('value');","        if (value !== '') {","            M.editor_contenteditable.set_selection(M.contenteditable_link.selection);","            document.execCommand('createLink', false, value);","        }","    },","    get_form_content : function(elementid) {","        var content = Y.Node.create('<form>' +","                             '<label for=\"urlentry\">' + M.util.get_string('enterurl', 'contenteditable_link') +","                             '</label><br/>' +","                             '<input type=\"url\" value=\"\" id=\"urlentry\" size=\"64\"/>' +","                             '<button id=\"openlinkbrowser\" data-editor=\"' + Y.Escape.html(elementid) + '\">' +","                             M.util.get_string('browserepositories', 'contenteditable_link') +","                             '</button>' +","                             '<hr/>' +","                             '<button id=\"urlentrysubmit\">' +","                             M.util.get_string('createlink', 'contenteditable_link') +","                             '</button>' +","                             '</form>' +","                             '<hr/>' + M.util.get_string('accessibilityhint', 'contenteditable_link'));","","        content.one('#urlentrysubmit').on('click', M.contenteditable_link.set_link);","        content.one('#openlinkbrowser').on('click', M.contenteditable_link.open_browser);","        return content;","    }","};","","","}, '@VERSION@', {\"requires\": [\"node\", \"escape\"]});","","}());"]};
}
var __cov_OgzB9ZCI7py0IHeCVWpCEg = __coverage__['build/moodle-contenteditable_link-button/moodle-contenteditable_link-button.js'];
__cov_OgzB9ZCI7py0IHeCVWpCEg.s['1']++;YUI.add('moodle-contenteditable_link-button',function(Y,NAME){__cov_OgzB9ZCI7py0IHeCVWpCEg.f['1']++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['2']++;M.contenteditable_link=(__cov_OgzB9ZCI7py0IHeCVWpCEg.b['1'][0]++,M.contenteditable_link)||(__cov_OgzB9ZCI7py0IHeCVWpCEg.b['1'][1]++,{dialogue:null,selection:null,init:function(params){__cov_OgzB9ZCI7py0IHeCVWpCEg.f['2']++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['3']++;var display_chooser=function(e){__cov_OgzB9ZCI7py0IHeCVWpCEg.f['3']++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['4']++;var elementid=this.getAttribute('data-editor');__cov_OgzB9ZCI7py0IHeCVWpCEg.s['5']++;e.preventDefault();__cov_OgzB9ZCI7py0IHeCVWpCEg.s['6']++;if(!M.editor_contenteditable.is_active(elementid)){__cov_OgzB9ZCI7py0IHeCVWpCEg.b['2'][0]++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['7']++;return;}else{__cov_OgzB9ZCI7py0IHeCVWpCEg.b['2'][1]++;}__cov_OgzB9ZCI7py0IHeCVWpCEg.s['8']++;M.contenteditable_link.selection=M.editor_contenteditable.get_selection();__cov_OgzB9ZCI7py0IHeCVWpCEg.s['9']++;if((__cov_OgzB9ZCI7py0IHeCVWpCEg.b['4'][0]++,M.contenteditable_link.selection!==false)&&(__cov_OgzB9ZCI7py0IHeCVWpCEg.b['4'][1]++,M.contenteditable_link.selection+''!=='')){__cov_OgzB9ZCI7py0IHeCVWpCEg.b['3'][0]++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['10']++;var dialogue=new M.core.dialogue({visible:false,modal:true,close:true,draggable:true});__cov_OgzB9ZCI7py0IHeCVWpCEg.s['11']++;dialogue.render();__cov_OgzB9ZCI7py0IHeCVWpCEg.s['12']++;dialogue.set('bodyContent',M.contenteditable_link.get_form_content(elementid));__cov_OgzB9ZCI7py0IHeCVWpCEg.s['13']++;dialogue.set('headerContent',M.util.get_string('createlink','contenteditable_link'));__cov_OgzB9ZCI7py0IHeCVWpCEg.s['14']++;dialogue.show();__cov_OgzB9ZCI7py0IHeCVWpCEg.s['15']++;M.contenteditable_link.dialogue=dialogue;}else{__cov_OgzB9ZCI7py0IHeCVWpCEg.b['3'][1]++;}};__cov_OgzB9ZCI7py0IHeCVWpCEg.s['16']++;M.editor_contenteditable.add_toolbar_button(params.elementid,'link',params.icon,display_chooser,this);},open_browser:function(e){__cov_OgzB9ZCI7py0IHeCVWpCEg.f['4']++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['17']++;var elementid=this.getAttribute('data-editor');__cov_OgzB9ZCI7py0IHeCVWpCEg.s['18']++;e.preventDefault();__cov_OgzB9ZCI7py0IHeCVWpCEg.s['19']++;M.editor_contenteditable.show_filepicker(elementid,'link',M.contenteditable_link.browser_callback);},browser_callback:function(params){__cov_OgzB9ZCI7py0IHeCVWpCEg.f['5']++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['20']++;M.contenteditable_link.dialogue.hide();__cov_OgzB9ZCI7py0IHeCVWpCEg.s['21']++;if(params.url!==''){__cov_OgzB9ZCI7py0IHeCVWpCEg.b['5'][0]++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['22']++;M.editor_contenteditable.set_selection(M.contenteditable_link.selection);__cov_OgzB9ZCI7py0IHeCVWpCEg.s['23']++;document.execCommand('createLink',false,params.url);}else{__cov_OgzB9ZCI7py0IHeCVWpCEg.b['5'][1]++;}},set_link:function(e){__cov_OgzB9ZCI7py0IHeCVWpCEg.f['6']++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['24']++;e.preventDefault();__cov_OgzB9ZCI7py0IHeCVWpCEg.s['25']++;M.contenteditable_link.dialogue.hide();__cov_OgzB9ZCI7py0IHeCVWpCEg.s['26']++;var input=e.currentTarget.get('parentNode').one('input');__cov_OgzB9ZCI7py0IHeCVWpCEg.s['27']++;var value=input.get('value');__cov_OgzB9ZCI7py0IHeCVWpCEg.s['28']++;if(value!==''){__cov_OgzB9ZCI7py0IHeCVWpCEg.b['6'][0]++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['29']++;M.editor_contenteditable.set_selection(M.contenteditable_link.selection);__cov_OgzB9ZCI7py0IHeCVWpCEg.s['30']++;document.execCommand('createLink',false,value);}else{__cov_OgzB9ZCI7py0IHeCVWpCEg.b['6'][1]++;}},get_form_content:function(elementid){__cov_OgzB9ZCI7py0IHeCVWpCEg.f['7']++;__cov_OgzB9ZCI7py0IHeCVWpCEg.s['31']++;var content=Y.Node.create('<form>'+'<label for="urlentry">'+M.util.get_string('enterurl','contenteditable_link')+'</label><br/>'+'<input type="url" value="" id="urlentry" size="64"/>'+'<button id="openlinkbrowser" data-editor="'+Y.Escape.html(elementid)+'">'+M.util.get_string('browserepositories','contenteditable_link')+'</button>'+'<hr/>'+'<button id="urlentrysubmit">'+M.util.get_string('createlink','contenteditable_link')+'</button>'+'</form>'+'<hr/>'+M.util.get_string('accessibilityhint','contenteditable_link'));__cov_OgzB9ZCI7py0IHeCVWpCEg.s['32']++;content.one('#urlentrysubmit').on('click',M.contenteditable_link.set_link);__cov_OgzB9ZCI7py0IHeCVWpCEg.s['33']++;content.one('#openlinkbrowser').on('click',M.contenteditable_link.open_browser);__cov_OgzB9ZCI7py0IHeCVWpCEg.s['34']++;return content;}});},'@VERSION@',{'requires':['node','escape']});
