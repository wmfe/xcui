(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(4);
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            props: {
                type: {
                    type: String,
                    "default": "standard"
                },
                currentPageNo: {
                    type: Number,
                    "default": 1
                },
                total: Number,
                pageSize: {
                    type: Number,
                    "default": 20
                },
                "class": String,
                withPageSize: {
                    type: Boolean,
                    "default": true
                },
                pageSizeRange: {
                    type: Array,
                    "default": function _default() {
                        return [ 10, 20, 50, 100 ];
                    }
                },
                rangeLength: {
                    type: Number,
                    "default": 10
                }
            },
            computed: {
                totalPageCount: function totalPageCount() {
                    return Math.ceil(this.total / this.pageSize);
                },
                getRangePage: function getRangePage() {
                    var curPage = this.currentPageNo;
                    var midpoint = curPage;
                    var pageRange = this.rangeLength - 1;
                    var leftHand = Math.floor(pageRange / 2);
                    var rightHand = Math.ceil(pageRange / 2);
                    var totalPage = this.totalPageCount;
                    var result = {
                        begin: 1,
                        end: 1
                    };
                    if (!midpoint) {
                        result.begin = curPage - leftHand;
                        result.end = curPage + rightHand;
                    } else {
                        result.begin = midpoint - leftHand;
                        result.end = midpoint + rightHand;
                    }
                    if (result.begin < 1) {
                        result.end = result.end - result.begin + 1;
                        result.begin = 1;
                        if (result.end > totalPage) {
                            result.end = totalPage;
                        }
                    } else if (result.end > totalPage) {
                        result.begin += totalPage - result.end;
                        result.end = totalPage;
                        if (result.begin < 1) {
                            result.begin = 1;
                        }
                    }
                    return result;
                }
            },
            watch: {
                pageSize: function pageSize(val) {
                    this.$emit("change-pagesize", this.pageSize);
                    this.$emit("go-to-page", 1, this.currentPageNo);
                }
            },
            methods: {
                turnToPage: function turnToPage(pageNo) {
                    if (pageNo > 0 && pageNo <= this.totalPageCount) {
                        this.$emit("go-to-page", pageNo, this.currentPageNo);
                        this.currentPageNo = pageNo;
                    }
                },
                prev: function prev() {
                    this.turnToPage(this.currentPageNo - 1);
                },
                next: function next() {
                    this.turnToPage(this.currentPageNo + 1);
                },
                isActive: function isActive(number) {
                    return number + this.getRangePage.begin === this.currentPageNo;
                }
            }
        };
    }, function(module, exports) {}, function(module, exports) {
<<<<<<< HEAD
        module.exports = ' <div class="v-pagination-wrap {{ class || \'\' }}" _v-c511d966=""> <template v-if="type === \'standard\' "> <div class=row _v-c511d966=""> <div v-if=withPageSize class="v-pagination-page-size col-md-6" _v-c511d966=""> 共<span v-text=total _v-c511d966=""></span>条 &nbsp;&nbsp; 每页 <select v-model=pageSize _v-c511d966=""> <option v-for="opt in pageSizeRange" :value=opt v-text=opt _v-c511d966="">1</option> </select> 条 </div> <div class="v-pagination-standard col-md-6 text-right" _v-c511d966=""> <button @click=prev class="btn btn-default" :class="{\'disabled\': currentPageNo == 1}" _v-c511d966="">上一页</button> <ul class=pagination _v-c511d966=""> <li v-if="getRangePage.begin > 1" _v-c511d966=""> <a href=javascript:void(0); @click=turnToPage(1) _v-c511d966="">1</a> </li> <li v-if="getRangePage.begin > 1" _v-c511d966=""> <a class=apostrophe _v-c511d966="">...</a> </li> <li v-for="number in (getRangePage.end - getRangePage.begin + 1)" :class="{\'active\': isActive(number)}" _v-c511d966=""> <a v-if=isActive(number) href=javascript:void(0); v-text="number + getRangePage.begin" _v-c511d966=""></a> <a v-else="" href=javascript:void(0); v-text="number + getRangePage.begin" @click="turnToPage(number + getRangePage.begin)" _v-c511d966=""></a> </li> <li v-if="getRangePage.end < totalPageCount" _v-c511d966=""> <a class=apostrophe _v-c511d966="">...</a> </li> <li v-if="getRangePage.end < totalPageCount" _v-c511d966=""> <a href=javascript:void(0); v-text=totalPageCount @click=turnToPage(totalPageCount) _v-c511d966=""></a> </li> </ul> <button @click=next class="btn btn-default" :class="{\'disabled\': currentPageNo == totalPageCount}" _v-c511d966="">下一页</button> </div> </div> </template> <div v-else="" class=v-pagination-mini _v-c511d966=""> <span _v-c511d966="">共<span v-text=total _v-c511d966=""></span>条</span> <button class="btn btn-default prev-trigger" :class="{\'disabled\': currentPageNo < 2}" @click=prev _v-c511d966=""> <span class=caret _v-c511d966=""></span> </button> <span v-text=currentPageNo _v-c511d966=""></span>/<span v-text=totalPageCount _v-c511d966=""></span> <button class="btn btn-default next-trigger" :class="{\'disabled\': currentPageNo == totalPageCount}" @click=next _v-c511d966=""> <span class=caret _v-c511d966=""></span> </button> </div> </div> ';
=======
        module.exports = ' <div class="v-pagination-wrap {{ class || \'\' }}" _v-6042eaa1=""> <template v-if="type === \'standard\' "> <div class=row _v-6042eaa1=""> <div v-if=withPageSize class="v-pagination-page-size col-md-6" _v-6042eaa1=""> 共<span v-text=total _v-6042eaa1=""></span>条 &nbsp;&nbsp; 每页 <select v-model=pageSize _v-6042eaa1=""> <option v-for="opt in pageSizeRange" :value=opt v-text=opt _v-6042eaa1="">1</option> </select> 条 </div> <div class="v-pagination-standard col-md-6 text-right" _v-6042eaa1=""> <button @click=prev class="btn btn-default" :class="{\'disabled\': currentPageNo == 1}" _v-6042eaa1="">上一页</button> <ul class=pagination _v-6042eaa1=""> <li v-if="getRangePage.begin > 1" _v-6042eaa1=""> <a href=javascript:void(0); @click=turnToPage(1) _v-6042eaa1="">1</a> </li> <li v-if="getRangePage.begin > 1" _v-6042eaa1=""> <a class=apostrophe _v-6042eaa1="">...</a> </li> <li v-for="number in (getRangePage.end - getRangePage.begin + 1)" :class="{\'active\': isActive(number)}" _v-6042eaa1=""> <a v-if=isActive(number) href=javascript:void(0); v-text="number + getRangePage.begin" _v-6042eaa1=""></a> <a v-else="" href=javascript:void(0); v-text="number + getRangePage.begin" @click="turnToPage(number + getRangePage.begin)" _v-6042eaa1=""></a> </li> <li v-if="getRangePage.end < totalPageCount" _v-6042eaa1=""> <a class=apostrophe _v-6042eaa1="">...</a> </li> <li v-if="getRangePage.end < totalPageCount" _v-6042eaa1=""> <a href=javascript:void(0); v-text=totalPageCount @click=turnToPage(totalPageCount) _v-6042eaa1=""></a> </li> </ul> <button @click=next class="btn btn-default" :class="{\'disabled\': currentPageNo == totalPageCount}" _v-6042eaa1="">下一页</button> </div> </div> </template> <div v-else="" class=v-pagination-mini _v-6042eaa1=""> <span _v-6042eaa1="">共<span v-text=total _v-6042eaa1=""></span>条</span> <button class="btn btn-default prev-trigger" :class="{\'disabled\': currentPageNo < 2}" @click=prev _v-6042eaa1=""> <span class=caret _v-6042eaa1=""></span> </button> <span v-text=currentPageNo _v-6042eaa1=""></span>/<span v-text=totalPageCount _v-6042eaa1=""></span> <button class="btn btn-default next-trigger" :class="{\'disabled\': currentPageNo == totalPageCount}" @click=next _v-6042eaa1=""> <span class=caret _v-6042eaa1=""></span> </button> </div> </div> ';
>>>>>>> d2008d92301748f4f8639e16c90f90c5a05b607b
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        var __vue_styles__ = {};
        __webpack_require__(2);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(3);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
        if (__vue_template__) {
            __vue_options__.template = __vue_template__;
        }
        if (!__vue_options__.computed) __vue_options__.computed = {};
        Object.keys(__vue_styles__).forEach(function(key) {
            var module = __vue_styles__[key];
            __vue_options__.computed[key] = function() {
                return module;
            };
        });
    } ]);
});

