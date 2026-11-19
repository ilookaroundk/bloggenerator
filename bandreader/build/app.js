(function() {
    var $app_define_wrap$ = $app_define_wrap$ || function() {};
    var manifestJson = {
        package: "com.notes.bandreader",
        name: "Notes",
        versionName: "1.0.0",
        versionCode: 1,
        minPlatformVersion: 1000,
        icon: "/common/logo.png",
        features: [
            {
                name: "system.router"
            },
            {
                name: "system.prompt"
            }
        ],
        config: {
            logLevel: "log",
            designWidth: 192
        },
        router: {
            entry: "pages/index",
            pages: {
                "pages/index": {
                    component: "index"
                }
            }
        },
        display: {
            titleBar: false,
            backgroundColor: "#000000"
        }
    };
    var createAppHandler = function() {
        (()=>{
            var __webpack_modules__ = {
                "./src/manifest.json" (module) {
                    "use strict";
                    module.exports = JSON.parse('{"package":"com.notes.bandreader","name":"Notes","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","features":[{"name":"system.router"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":192},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"}}},"display":{"titleBar":false,"backgroundColor":"#000000"}}');
                }
            };
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
                var cachedModule = __webpack_module_cache__[moduleId];
                if (void 0 !== cachedModule) return cachedModule.exports;
                var module = __webpack_module_cache__[moduleId] = {
                    exports: {}
                };
                __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                return module.exports;
            }
            (()=>{
                __webpack_require__.rv = ()=>"1.7.12";
            })();
            (()=>{
                __webpack_require__.ruid = "bundler=rspack@1.7.12";
            })();
            (()=>{
                const $style$ = {};
                const $script$ = function __scriptModule__(module, exports, $app_require$) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _default = exports.default = {
                        onCreate () {}
                    };
                };
                $app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$) {
                    $script$($app_module$, $app_exports$, $app_require$);
                    if ($app_exports$.__esModule && $app_exports$.default) $app_module$.exports = $app_exports$.default;
                    $app_module$.exports.manifest = __webpack_require__("./src/manifest.json");
                    $app_module$.exports.style = {
                        list: [
                            $style$
                        ]
                    };
                });
                $app_bootstrap$('@app-application/app', {
                    packagerVersion: "2.0.5"
                });
            })();
        })();
    };
    if ("u" < typeof window) return createAppHandler();
    window.createAppHandler = createAppHandler;
    global.manifest = manifestJson;
})();
