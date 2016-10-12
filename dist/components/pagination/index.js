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
                total: {
                    type: [ Number, String ],
                    "default": 0
                },
                pageSize: {
                    type: Number,
                    "default": 20
                },
                currentPageNo: {
                    type: Number,
                    "default": 1
                },
                rangeLength: {
                    type: Number,
                    "default": 10
                }
            },
            watch: {
                currentPageNo: function currentPageNo(val) {
                    this.$dispatch("turnToPage", val);
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
            methods: {
                turnToPage: function turnToPage(pageNo) {
                    this.currentPageNo = pageNo;
                },
                prev: function prev() {
                    if (this.currentPageNo - 1 > 0) {
                        this.currentPageNo -= 1;
                    }
                },
                next: function next() {
                    if (this.currentPageNo + 1 <= this.totalPageCount) {
                        this.currentPageNo += 1;
                    }
                }
            }
        };
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class=pagination-wrap _v-c511d966=""> <button @click=prev class="btn btn-default" :class="{\'disabled\': currentPageNo <= 1}" _v-c511d966="">上一页</button> <ul class=pagination _v-c511d966=""> <li v-if="getRangePage.begin > 1" _v-c511d966=""> <a href=javascript:void(0); @click=turnToPage(1) _v-c511d966="">1</a> </li> <li v-if="getRangePage.begin > 1" _v-c511d966=""> <a href=javascript:void(0) _v-c511d966="">...</a> </li> <li v-for="number in (getRangePage.end - getRangePage.begin + 1)" :class="{\'active\':number + getRangePage.begin == currentPageNo}" _v-c511d966=""> <a href=javascript:void(0); v-text="number + getRangePage.begin" @click="turnToPage(number + getRangePage.begin)" _v-c511d966=""></a> </li> <li v-if="getRangePage.end < totalPageCount" _v-c511d966=""> <a href=javascript:void(0) _v-c511d966="">...</a> </li> <li v-if="getRangePage.end < totalPageCount" _v-c511d966=""> <a href=javascript:void(0); v-text=totalPageCount @click=turnToPage(totalPageCount) _v-c511d966=""></a> </li> </ul> <button @click=next class="btn btn-default" :class="{\'disabled\': currentPageNo >= totalPageCount}" _v-c511d966="">下一页</button> </div> ';
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        __webpack_require__(2);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(3);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    } ]);
});

