webpackJsonp([10],{430:function(t,s,a){var n=a(0)(a(521),a(522),function(t){a(519)},null,null);t.exports=n.exports},454:function(t,s,a){var n=a(455);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(411)("2859ee6e",n,!0,{})},455:function(t,s,a){(t.exports=a(410)(!1)).push([t.i,"",""])},519:function(t,s,a){var n=a(520);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(411)("1867a436",n,!0,{})},520:function(t,s,a){(t.exports=a(410)(!1)).push([t.i,".demo-input-number .x-input-number+.x-input-number{margin-left:15px}",""])},521:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),a(454),s.default={data:function(){return{num1:1,num2:1,num3:1,num4:1,num5:1,num6:1}},methods:{handleChange:function(t,s){console.log("val: "+t),console.log("oldVal: "+s)}}}},522:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("InputNumber 数字输入框")]),t._v(" "),a("p",[t._v("通过鼠标或键盘，输入范围内的数值。")]),t._v(" "),a("h2",[t._v("基础用法")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-input-number",{attrs:{min:1,max:10},on:{change:t.handleChange},model:{value:t.num1,callback:function(s){t.num1=s},expression:"num1"}})],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("通过在"),a("code",[t._v("x-input-number")]),t._v("元素中设置"),a("code",[t._v("v-model")]),t._v("属性绑定变量即可。绑定的变量值即为默认值。通过"),a("code",[t._v("@change")]),t._v("事件可以监听值的变化。通过键盘的"),a("code",[t._v("上下箭头键")]),t._v("也可改变输入框的值。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-input-number")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("num1"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":min")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("1"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":max")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("10"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("@change")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("handleChange"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-input-number")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                num1"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        methods"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("handleChange")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("val"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" oldVal"),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                console"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("log")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token template-string"},[a("span",{staticClass:"token string"},[t._v("`val: ")]),a("span",{staticClass:"token interpolation"},[a("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("$"),a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("val"),a("span",{staticClass:"token interpolation-punctuation punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])])]),a("span",{staticClass:"token string"},[t._v("`")])]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n                console"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("log")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token template-string"},[a("span",{staticClass:"token string"},[t._v("`oldVal: ")]),a("span",{staticClass:"token interpolation"},[a("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("$"),a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("oldVal"),a("span",{staticClass:"token interpolation-punctuation punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])])]),a("span",{staticClass:"token string"},[t._v("`")])]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("禁用状态")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-input-number",{attrs:{min:1,max:10,disabled:!0},model:{value:t.num2,callback:function(s){t.num2=s},expression:"num2"}})],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("设置"),a("code",[t._v("disabled")]),t._v("属性可以将计数器设置为禁用。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-input-number")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("num2"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":min")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("1"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":max")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("10"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":disabled")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("true"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-input-number")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                num2"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("步数")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-input-number",{attrs:{step:3},model:{value:t.num3,callback:function(s){t.num3=s},expression:"num3"}})],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("通过设置"),a("code",[t._v("step")]),t._v("属性可以定义递增/递减的步数。"),a("code",[t._v("step")]),t._v("可以设置为整数或小数。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-input-number")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("num3"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":step")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("3"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-input-number")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                num3"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])]),t._v(" "),a("h2",[t._v("尺寸")]),t._v(" "),a("xcui-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("x-input-number",{attrs:{size:"large"},model:{value:t.num4,callback:function(s){t.num4=s},expression:"num4"}}),t._v(" "),a("x-input-number",{model:{value:t.num5,callback:function(s){t.num5=s},expression:"num5"}}),t._v(" "),a("x-input-number",{attrs:{size:"small"},model:{value:t.num6,callback:function(s){t.num6=s},expression:"num6"}})],1),t._v(" "),a("span",{attrs:{slot:"info-title"},slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{attrs:{slot:"info"},slot:"info"},[a("p",[t._v("额外提供了"),a("code",[t._v("large")]),t._v(", "),a("code",[t._v("small")]),t._v(" 两种尺寸的输入框，通过设置"),a("code",[t._v("size")]),t._v("属性即可。")])]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-input-number")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("num4"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("size")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("large"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-input-number")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-input-number")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("num5"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-input-number")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-input-number")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("num6"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("size")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("small"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-input-number")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                num4"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                num5"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                num6"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"markdown-table"},[a("thead",[a("tr",[a("th",[t._v("名字")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("是否必选")]),t._v(" "),a("th",[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("和"),a("code",[t._v("v-model")]),t._v("的绑定值")]),t._v(" "),a("td",[t._v("必选，通过设置"),a("code",[t._v("v-model")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("min")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("计数器最小值")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("max")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Infinity")]),t._v(" "),a("td",[t._v("计数器最大值")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("step")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("增减步长")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否禁用")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td",[t._v("true,false")])]),t._v(" "),a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("可选尺寸")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td",[t._v("large,small")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"markdown-table"},[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("返回值")]),t._v(" "),a("th",[t._v("设置属性")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("绑定值改变时触发")]),t._v(" "),a("td",[t._v("(变更后的值，变更前的值)")]),t._v(" "),a("td",[a("code",[t._v("@change")])])])])])}]}}});