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
        module.exports = __webpack_require__(3);
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
                    default: "standard"
                },
                currentPageNum: {
                    type: Number,
                    default: 1
                },
                total: {
                    type: Number,
                    default: 0
                },
                pageSize: {
                    type: Number,
                    default: 20
                },
                withPageSize: {
                    type: Boolean,
                    default: true
                },
                pageSizeRange: {
                    type: Array,
                    default: function _default() {
                        return [ 10, 20, 50, 100 ];
                    }
                },
                rangeLength: {
                    type: Number,
                    default: 10,
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
                    var curPage = this.currentPageNum;
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
                    }
                    if (result.end > totalPage) {
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
                    if (pageNo > 0 && pageNo <= this.totalPageCount) {
                        this.$emit("go-to-page", pageNo, this.currentPageNum);
                    }
                },
                changePageSize: function changePageSize($event) {
                    this.$emit("change-pagesize", Number($event.target.value));
                },
                prev: function prev() {
                    this.turnToPage(this.currentPageNum - 1);
                },
                next: function next() {
                    this.turnToPage(this.currentPageNum + 1);
                },
                isActive: function isActive(number) {
                    return number + this.getRangePage.begin - 1 === this.currentPageNum;
                }
            }
        };
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        var __vue_exports__, __vue_options__;
        var __vue_styles__ = {};
        __webpack_require__(2);
        __vue_exports__ = __webpack_require__(1);
        var __vue_template__ = __webpack_require__(4);
        __vue_options__ = __vue_exports__ = __vue_exports__ || {};
        if (typeof __vue_exports__.default === "object" || typeof __vue_exports__.default === "function") {
            __vue_options__ = __vue_exports__ = __vue_exports__.default;
        }
        if (typeof __vue_options__ === "function") {
            __vue_options__ = __vue_options__.options;
        }
        __vue_options__.render = __vue_template__.render;
        __vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
        module.exports = __vue_exports__;
    }, function(module, exports) {
        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {
                    staticClass: "v-pagination-wrap"
                }, [ _vm.type === "standard" ? [ _c("div", {
                    staticClass: "row"
                }, [ _vm.withPageSize ? _c("div", {
                    staticClass: "v-pagination-page-size col-md-3 gray"
                }, [ _vm._v("\n                共"), _c("span", {
                    domProps: {
                        textContent: _vm._s(_vm.total)
                    }
                }), _vm._v("条\n                  \n                每页\n                "), _c("select", {
                    staticClass: "gray",
                    domProps: {
                        value: _vm.pageSize
                    },
                    on: {
                        change: function($event) {
                            _vm.changePageSize($event);
                        }
                    }
                }, _vm._l(_vm.pageSizeRange, function(opt) {
                    return _c("option", {
                        domProps: {
                            value: opt,
                            textContent: _vm._s(opt)
                        }
                    }, [ _vm._v("1") ]);
                })), _vm._v("\n                条\n            ") ]) : _vm._e(), _vm._v(" "), _c("div", {
                    staticClass: "v-pagination-standard text-right",
                    class: [ _vm.withPageSize ? "col-md-9" : "col-md-12" ]
                }, [ _c("div", {
                    staticClass: "btn-group"
                }, [ _c("button", {
                    staticClass: "btn btn-default",
                    class: {
                        disabled: _vm.currentPageNum == 1
                    },
                    on: {
                        click: _vm.prev
                    }
                }, [ _vm._v("上一页") ]), _vm._v(" "), _vm.getRangePage.begin > 1 ? _c("button", {
                    staticClass: "btn btn-default page-btn"
                }, [ _c("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function($event) {
                            _vm.turnToPage(1);
                        }
                    }
                }, [ _vm._v("1") ]) ]) : _vm._e(), _vm._v(" "), _vm.getRangePage.begin > 1 ? _c("button", {
                    staticClass: "btn btn-default page-btn"
                }, [ _c("a", {
                    staticClass: "apostrophe"
                }, [ _vm._v("...") ]) ]) : _vm._e(), _vm._v(" "), _vm._l(_vm.getRangePage.end - _vm.getRangePage.begin + 1, function(number) {
                    return _c("button", {
                        staticClass: "btn btn-default page-btn",
                        class: {
                            active: _vm.isActive(number)
                        },
                        on: {
                            click: function($event) {
                                _vm.turnToPage(number + _vm.getRangePage.begin - 1);
                            }
                        }
                    }, [ _vm.isActive(number) ? _c("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        domProps: {
                            textContent: _vm._s(number + _vm.getRangePage.begin - 1)
                        }
                    }) : _c("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        domProps: {
                            textContent: _vm._s(number + _vm.getRangePage.begin - 1)
                        }
                    }) ]);
                }), _vm._v(" "), _vm.getRangePage.end < _vm.totalPageCount ? _c("button", {
                    staticClass: "btn btn-default page-btn"
                }, [ _c("a", {
                    staticClass: "apostrophe"
                }, [ _vm._v("...") ]) ]) : _vm._e(), _vm._v(" "), _vm.getRangePage.end < _vm.totalPageCount ? _c("button", {
                    staticClass: "btn btn-default page-btn"
                }, [ _c("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    domProps: {
                        textContent: _vm._s(_vm.totalPageCount)
                    },
                    on: {
                        click: function($event) {
                            _vm.turnToPage(_vm.totalPageCount);
                        }
                    }
                }) ]) : _vm._e(), _vm._v(" "), _c("button", {
                    staticClass: "btn btn-default",
                    class: {
                        disabled: _vm.currentPageNum == _vm.totalPageCount
                    },
                    on: {
                        click: _vm.next
                    }
                }, [ _vm._v("下一页") ]) ], 2) ]) ]) ] : _c("div", {
                    staticClass: "v-pagination-mini"
                }, [ _c("span", {
                    staticClass: "gray"
                }, [ _vm._v("共"), _c("span", {
                    domProps: {
                        textContent: _vm._s(_vm.total)
                    }
                }), _vm._v("条") ]), _vm._v(" "), _c("button", {
                    staticClass: "btn btn-default prev-trigger",
                    class: {
                        disabled: _vm.currentPageNum < 2
                    },
                    on: {
                        click: _vm.prev
                    }
                }, [ _c("span", {
                    staticClass: "caret"
                }) ]), _vm._v(" "), _c("span", {
                    staticClass: "gray"
                }, [ _c("span", {
                    domProps: {
                        textContent: _vm._s(_vm.currentPageNum)
                    }
                }), _vm._v("/"), _c("span", {
                    domProps: {
                        textContent: _vm._s(_vm.totalPageCount)
                    }
                }) ]), _vm._v(" "), _c("button", {
                    staticClass: "btn btn-default next-trigger",
                    class: {
                        disabled: _vm.currentPageNum == _vm.totalPageCount
                    },
                    on: {
                        click: _vm.next
                    }
                }, [ _c("span", {
                    staticClass: "caret"
                }) ]) ]) ], 2);
            },
            staticRenderFns: []
        };
    } ]);
});

