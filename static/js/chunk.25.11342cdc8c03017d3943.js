webpackJsonp([25],{406:function(t,s,a){var n=a(0)(a(479),a(480),null,null,null);t.exports=n.exports},433:function(t,s,a){var n=a(434);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(391)("2859ee6e",n,!0,{})},434:function(t,s,a){(t.exports=a(390)(!1)).push([t.i,"",""])},479:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),a(433),a(433),s.default={data:function(){return{count1:1,count2:2,count3:3,count4:4}},methods:{info:function(){this.$Message.info("这是一条普通提示")},success:function(){this.$Message.success("这是一条成功提示")},warning:function(){this.$Message.warning("这是一条警告提示")},error:function(){this.$Message.error("这是一条错误提示")},delay:function(){this.$Message.info("这是一条10秒后关闭的提示",1e4)},callback:function(){var t=this;this.$Message.warning("此条信息关闭后会显示一条普通信息",3e3,function(){t.$Message.info("信息关闭了")})}},mounted:function(){}}},480:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("Message信息提示")]),t._v(" "),a("p",[t._v("Message提供一种不打断用户操作的轻量级提示方式，顶部居中显示并自动消失。常用于主动操作后的信息提示。")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("基本使用")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("显示普通提示")])],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("基本提示，展示信息3s后消失。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-button")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("type")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("primary"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@click")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("info"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("显示普通提示"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-button")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        methods"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("info")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("info")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'这是一条普通提示'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("提示类型")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-button",{attrs:{type:"success"},on:{click:t.success}},[t._v("显示成功提示")]),t._v(" "),a("x-button",{attrs:{type:"warning"},on:{click:t.warning}},[t._v("显示警告提示")]),t._v(" "),a("x-button",{attrs:{type:"danger"},on:{click:t.error}},[t._v("显示错误提示")])],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("支持四种方法："),a("code",[t._v("info(信息提示)")]),t._v("， "),a("code",[t._v("success(成功提示)")]),t._v("， "),a("code",[t._v("warning(警告提示)")]),t._v("，"),a("code",[t._v("error（错误提示）")]),t._v("。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-button")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("type")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("success"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@click")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("success"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("显示成功提示"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-button")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-button")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("type")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("warning"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@click")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("warning"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("显示警告提示"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-button")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-button")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("type")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("danger"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@click")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("error"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("显示错误提示"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-button")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        methods"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("success")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("success")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'这是一条成功提示'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("warning")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("warning")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'这是一条警告提示'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("error")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("error")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'这是一条错误提示'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("自定义时长")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-button",{attrs:{type:"info"},on:{click:t.delay}},[t._v("显示10s的提示")])],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("显示一个10秒的提示。也可以在"),a("code",[t._v("Message.config()")]),t._v("中全局配置，详见API。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-button")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("type")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("info"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@click")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("delay"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("显示10s的提示"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-button")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        methods"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("delay")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("info")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'这是一条10秒后关闭的提示'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("10000")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("关闭时的回调函数")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-button",{attrs:{type:"info"},on:{click:t.callback}},[t._v("关闭时显示信息")])],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("使用关闭时的回调函数。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-button")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("type")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("info"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@click")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("callback"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("关闭时显示信息"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-button")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        methods"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("callback")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("warning")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'此条信息关闭后会显示一条普通信息'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("3000")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                    "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("info")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'信息关闭了'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n                "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("使用提示")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("API")]),t._v(" "),a("p",[t._v("通过以下方法来使用：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("h2",[t._v("全局配置")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("XCUI为"),a("code",[t._v("Vue.prototype")]),t._v("添加了全局方法"),a("code",[t._v("$Message")]),t._v(", 如果您完整引入了XCUI， 可以直接使用如"),a("code",[t._v("this.$Message.info('message')")]),t._v("的方式进行信息提示操作。"),a("br"),t._v("\n当然，您也可以使用"),a("code",[t._v("import Message from 'xcui/lib/message'")]),t._v(" 的单组件方式调用。"),a("br"),t._v("\nMessage在XCUI中被注册为一个"),a("a",{attrs:{href:"https://vuejs.org/v2/guide/plugins.html"}},[t._v("Vue 插件")]),t._v(", 在"),a("strong",[t._v("单文件引入")]),t._v("时，请使用"),a("code",[t._v("Vue.use(Message)")]),t._v(" 挂载，再进行使用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[this._v("单组件使用时，请遵循以下的方式注册"),s("code",[this._v("Message")]),this._v("插件。如果已经全局使用"),s("code",[this._v("Vue.use(xcui)")]),this._v(", 则无需再次注册。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" Vue "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'vue'")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v(" Message "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'xcui/lib/message'")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\nVue"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("use")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("Message"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("span",{staticClass:"token comment"},[t._v("// 普通提示")]),t._v("\n"),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("info")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("content"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" duration"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" onClose"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token comment"},[t._v("// 成功提示")]),t._v("\n"),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("success")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("content"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" duration"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" onClose"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token comment"},[t._v("// 警告提示")]),t._v("\n"),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("warning")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("content"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" duration"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" onClose"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token comment"},[t._v("// 错误提示")]),t._v("\n"),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("error")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("content"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" duration"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" onClose"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"markdown-table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("是否必选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("提示信息内容")]),t._v(" "),a("td",[t._v("必选")])]),t._v(" "),a("tr",[a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("3000")]),t._v(" "),a("td",[t._v("自动关闭延时，单位: 毫秒, 默认3000毫秒后自动关闭。设置0则不会自动关闭")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("onClose")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("关闭后的回调函数")]),t._v(" "),a("td",[t._v("可选")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可使用"),s("code",[this._v("Message.config(options)")]),this._v("来进行全局设置，例如，设置所有的提示都在1s内关闭。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用"),s("code",[this._v("Message.destroy()")]),this._v(" 可全局销毁"),s("code",[this._v("Message")]),this._v("实例。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("span",{staticClass:"token comment"},[t._v("// 全局的提示信息距离顶部50px, 1s后关闭")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("config")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n    top"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("50")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    duration"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1000")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\n"),a("span",{staticClass:"token comment"},[t._v("// 销毁`Message`实例")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$Message"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("destroy")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"markdown-table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("top")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("24")]),t._v(" "),a("td",[t._v("提示信息距离页面顶端的距离，单位为像素")])]),t._v(" "),a("tr",[a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("3000")]),t._v(" "),a("td",[t._v("自动关闭延时，单位: 毫秒, 默认3000毫秒后自动关闭。设置0则不会自动关闭")])]),t._v(" "),a("tr",[a("td",[t._v("insertTo")]),t._v(" "),a("td",[t._v("DOMElement")]),t._v(" "),a("td",[t._v("document.body")]),t._v(" "),a("td",[t._v("message的dom元素插入位置")])])])])}]}}});