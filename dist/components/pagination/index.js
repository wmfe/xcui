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
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class="v-pagination-wrap {{ class || \'\' }}"> <template v-if="type === \'standard\' "> <div class=row> <div v-if=withPageSize class="v-pagination-page-size col-md-3"> 共<span v-text=total></span>条 &nbsp;&nbsp; 每页 <select v-model=pageSize> <option v-for="opt in pageSizeRange" :value=opt v-text=opt>1</option> </select> 条 </div> <div class="v-pagination-standard col-md-9 text-right"> <div class=btn-group> <button @click=prev class="btn btn-default" :class="{\'disabled\': currentPageNo == 1}">上一页</button> <button class="btn btn-default page-btn" v-if="getRangePage.begin > 1"> <a href=javascript:void(0); @click=turnToPage(1)>1</a> </button> <button class="btn btn-default page-btn" v-if="getRangePage.begin > 1"> <a class=apostrophe>...</a> </button> <button class="btn btn-default page-btn" v-for="number in (getRangePage.end - getRangePage.begin + 1)" :class="{\'active\': isActive(number)}"> <a v-if=isActive(number) href=javascript:void(0); v-text="number + getRangePage.begin"></a> <a v-else href=javascript:void(0); v-text="number + getRangePage.begin" @click="turnToPage(number + getRangePage.begin)"></a> </button> <button class="btn btn-default page-btn" v-if="getRangePage.end < totalPageCount"> <a class=apostrophe>...</a> </button> <button class="btn btn-default page-btn" v-if="getRangePage.end < totalPageCount"> <a href=javascript:void(0); v-text=totalPageCount @click=turnToPage(totalPageCount)></a> </button> <button @click=next class="btn btn-default" :class="{\'disabled\': currentPageNo == totalPageCount}">下一页</button> </div> </div> </div> </template> <div v-else class=v-pagination-mini> <span>共<span v-text=total></span>条</span> <button class="btn btn-default prev-trigger" :class="{\'disabled\': currentPageNo < 2}" @click=prev> <span class=caret></span> </button> <span v-text=currentPageNo></span>/<span v-text=totalPageCount></span> <button class="btn btn-default next-trigger" :class="{\'disabled\': currentPageNo == totalPageCount}" @click=next> <span class=caret></span> </button> </div> </div> ';
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-pagination",
            props: {
                type: {
                    type: String,
                    "default": "standard"
                },
                currentPageNo: {
                    type: Number,
                    "default": 1
                },
                total: {
                    type: Number,
                    "default": 0
                },
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
                    "default": 10,
                    coerce: function coerce(val) {
                        if (val < 1) {
                            return 1;
                        }
                        return val;
                    }
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
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
<<<<<<< HEAD
        __webpack_require__(2);
        __vue_script__ = __webpack_require__(1);
        __vue_template__ = __webpack_require__(3);
=======
        var __vue_styles__ = {};
        __webpack_require__(1);
        __vue_script__ = __webpack_require__(3);
        __vue_template__ = __webpack_require__(2);
>>>>>>> d9794581c5983ae5d91429ce41755b660d50184d
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    } ]);
});

