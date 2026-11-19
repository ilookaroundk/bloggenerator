(function() {
    var createPageHandler = function() {
        var $translateStyle$ = function(value) {
            if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                const matchs = item.match(/([^:]+):(.*)/);
                if (matchs && matchs.length > 2) return [
                    matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                    matchs[2].trim()
                ];
                return [];
            }));
            return value;
        };
        return (()=>{
            var __webpack_modules__ = {
                "./src/pages/index/index.ux?uxType=page" (module, __unused_rspack_exports, __webpack_require__) {
                    const $style$ = {
                        ".page": {
                            width: "192px",
                            height: "490px",
                            backgroundColor: "#000000"
                        },
                        ".list": {
                            width: "192px",
                            height: "490px",
                            paddingTop: "0px",
                            paddingRight: "10px",
                            paddingBottom: "0px",
                            paddingLeft: "10px"
                        },
                        ".exit-wrap": {
                            width: "172px",
                            height: "64px",
                            marginTop: "12px",
                            marginRight: "0px",
                            marginBottom: "12px",
                            marginLeft: "0px",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#c62828",
                            borderRadius: "32px"
                        },
                        ".exit-btn": {
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        },
                        ".t-h1": {
                            width: "172px",
                            marginTop: "26px",
                            marginBottom: "8px",
                            fontSize: "26px",
                            fontWeight: "bold",
                            color: "#4fc3f7"
                        },
                        ".t-h2": {
                            width: "172px",
                            marginTop: "20px",
                            marginBottom: "4px",
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#ffca28"
                        },
                        ".t-p": {
                            width: "172px",
                            marginTop: "6px",
                            fontSize: "21px",
                            lineHeight: "28px",
                            color: "#ffffff"
                        },
                        ".t-sub": {
                            width: "152px",
                            marginLeft: "20px",
                            marginTop: "4px",
                            fontSize: "20px",
                            lineHeight: "26px",
                            color: "#b0bec5"
                        },
                        ".t-tb": {
                            width: "172px",
                            marginTop: "12px",
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#81c784"
                        },
                        ".t-ts": {
                            width: "152px",
                            marginLeft: "20px",
                            fontSize: "20px",
                            lineHeight: "26px",
                            color: "#cfd8dc"
                        }
                    };
                    const $template$ = {
                        type: 'div',
                        attr: {},
                        classList: [
                            "page"
                        ],
                        children: [
                            {
                                type: 'list',
                                attr: {
                                    scrollbar: "false"
                                },
                                classList: [
                                    "list"
                                ],
                                children: [
                                    {
                                        type: 'list-item',
                                        attr: {
                                            type: "exit"
                                        },
                                        children: [
                                            {
                                                type: 'div',
                                                attr: {},
                                                classList: [
                                                    "exit-wrap"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return this.exitApp(evt);
                                                    }
                                                },
                                                children: [
                                                    {
                                                        type: 'text',
                                                        attr: {
                                                            value: "EXIT"
                                                        },
                                                        classList: [
                                                            "exit-btn"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: 'list-item',
                                        attr: {
                                            type: function() {
                                                return this.$item.t;
                                            }
                                        },
                                        repeat: function() {
                                            return this.lines;
                                        },
                                        children: [
                                            {
                                                type: 'text',
                                                attr: {
                                                    value: function() {
                                                        return this.$item.s;
                                                    }
                                                },
                                                classList: function() {
                                                    const $classValue$ = "t-" + this.$item.t;
                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                    return $classValue$;
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        type: 'list-item',
                                        attr: {
                                            type: "exit"
                                        },
                                        children: [
                                            {
                                                type: 'div',
                                                attr: {},
                                                classList: [
                                                    "exit-wrap"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return this.exitApp(evt);
                                                    }
                                                },
                                                children: [
                                                    {
                                                        type: 'text',
                                                        attr: {
                                                            value: "EXIT"
                                                        },
                                                        classList: [
                                                            "exit-btn"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    };
                    const $script$ = function __scriptModule__(module, exports, $app_require$) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$("@app-module/system.router"));
                        var _content = _interopRequireDefault(__webpack_require__("./src/common/content.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            private: {
                                lines: _content.default
                            },
                            exitApp () {
                                try {
                                    if (this.$app && this.$app.exit) return void this.$app.exit();
                                } catch (e) {}
                                _system.default.back();
                            },
                            onBackPress () {
                                this.exitApp();
                                return true;
                            }
                        };
                        const moduleOwn = exports.default || module.exports;
                        const accessors = [
                            'public',
                            'protected',
                            'private'
                        ];
                        if (moduleOwn.data && accessors.some(function(acc) {
                            return moduleOwn[acc];
                        })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                        if (!moduleOwn.data) {
                            moduleOwn.data = {};
                            moduleOwn._descriptor = {};
                            accessors.forEach(function(acc) {
                                const accType = typeof moduleOwn[acc];
                                if ('object' === accType) {
                                    moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                    for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                        access: acc
                                    };
                                } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                            });
                        }
                    };
                    module.exports = function($app_require$, $app_exports$, $app_module$) {
                        $script$($app_module$, $app_exports$, $app_require$);
                        if ($app_exports$.__esModule && $app_exports$.default) $app_module$.exports = $app_exports$.default;
                        $app_module$.exports.template = $template$;
                        $app_module$.exports.style = $style$;
                    };
                    $app_define$("@app-component/index", [], module.exports);
                    $app_bootstrap$("@app-component/index", {
                        packagerVersion: '2.0.5'
                    });
                },
                "./src/common/content.js" (__unused_rspack_module, exports) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports["default"] = void 0;
                    var _default = exports["default"] = [
                        {
                            t: "h1",
                            s: "CELLULAR RESPIRATION"
                        },
                        {
                            t: "p",
                            s: "Cellular respiration is how cells get energy. It has two types: aerobic (with oxygen) and anaerobic (without oxygen, also called fermentation)."
                        },
                        {
                            t: "p",
                            s: "Aerobic respiration requires oxygen and produces more ATP. Anaerobic respiration requires no oxygen and produces less ATP."
                        },
                        {
                            t: "p",
                            s: "Every stage starts from glucose."
                        },
                        {
                            t: "h2",
                            s: "Diagram"
                        },
                        {
                            t: "p",
                            s: "Glucose -> Glycolysis (cytoplasm, 2 ATP, 2 NADH) -> Pyruvate (2, C-C-C)"
                        },
                        {
                            t: "p",
                            s: "Pyruvate -> Without oxygen: Fermentation (cytoplasm)"
                        },
                        {
                            t: "sub",
                            s: "Animals: lactic acid"
                        },
                        {
                            t: "sub",
                            s: "Bacteria, yeast: ethanol"
                        },
                        {
                            t: "p",
                            s: "Pyruvate -> With oxygen: Krebs cycle (mitochondria)"
                        },
                        {
                            t: "sub",
                            s: "Starts with acetyl CoA (C-C), ends with oxaloacetate (C4)"
                        },
                        {
                            t: "sub",
                            s: "Products: 2 ATP, 6 CO2, 7 NADH, 2 FADH2"
                        },
                        {
                            t: "sub",
                            s: "-> Electron transport chain (mitochondria, 32 ATP)"
                        },
                        {
                            t: "sub",
                            s: "Oxygen accepts electrons and forms water (6 H2O)"
                        },
                        {
                            t: "sub",
                            s: "-> Total: 34 to 36 ATP"
                        },
                        {
                            t: "h2",
                            s: "Stage 1: Glycolysis"
                        },
                        {
                            t: "p",
                            s: "Location: cytoplasm."
                        },
                        {
                            t: "p",
                            s: "Starts with glucose and ends with 2 pyruvate (C-C-C)."
                        },
                        {
                            t: "p",
                            s: "Products: 2 ATP and 2 NADH."
                        },
                        {
                            t: "p",
                            s: "Pyruvate's next path depends on whether oxygen is present."
                        },
                        {
                            t: "h2",
                            s: "Stage 2: Krebs cycle (citric acid cycle)"
                        },
                        {
                            t: "p",
                            s: "Location: mitochondria (notes say cristae)."
                        },
                        {
                            t: "p",
                            s: "Starts with acetyl CoA (C-C) and ends with oxaloacetate (C4)."
                        },
                        {
                            t: "p",
                            s: "Products: 2 ATP, 6 CO2, 7 NADH, and 2 FADH2."
                        },
                        {
                            t: "h2",
                            s: "Stage 3: Electron transport chain"
                        },
                        {
                            t: "p",
                            s: "Location: mitochondria (notes say matrix)."
                        },
                        {
                            t: "p",
                            s: "Produces 32 ATP."
                        },
                        {
                            t: "p",
                            s: "Oxygen is the final electron acceptor and combines to form water (6 H2O)."
                        },
                        {
                            t: "p",
                            s: "Total yield: 34 to 36 ATP per glucose."
                        },
                        {
                            t: "h2",
                            s: "Pyruvate pathways"
                        },
                        {
                            t: "p",
                            s: "With oxygen: pyruvate enters the Krebs cycle in the mitochondria and releases CO2."
                        },
                        {
                            t: "p",
                            s: "Without oxygen: pyruvate undergoes fermentation in the cytoplasm."
                        },
                        {
                            t: "p",
                            s: "Animals produce lactic acid. Bacteria and yeast produce ethanol."
                        },
                        {
                            t: "h2",
                            s: "Items to double-check"
                        },
                        {
                            t: "p",
                            s: "Notes place the Krebs cycle in the cristae and the electron transport chain in the matrix. Textbooks usually place the Krebs cycle in the matrix and the electron transport chain on the cristae."
                        },
                        {
                            t: "p",
                            s: "Notes list 6 CO2 and 7 NADH for the Krebs cycle. Standard values per glucose are 4 CO2 and 6 NADH."
                        },
                        {
                            t: "p",
                            s: "Total ATP varies by textbook, often 30 to 32 or 36 to 38."
                        },
                        {
                            t: "h1",
                            s: "PHOTOSYNTHESIS"
                        },
                        {
                            t: "p",
                            s: "Photosynthesis comes from the Greek words photo (\"light\") and synthesis (\"putting together\")."
                        },
                        {
                            t: "p",
                            s: "Plants use photosynthesis to make their own food."
                        },
                        {
                            t: "p",
                            s: "Plants get raw materials from sunlight, air, and soil."
                        },
                        {
                            t: "h2",
                            s: "Water and minerals"
                        },
                        {
                            t: "p",
                            s: "When it rains, water gets absorbed into the ground."
                        },
                        {
                            t: "p",
                            s: "Plants take in this water along with minerals from the soil through their roots."
                        },
                        {
                            t: "p",
                            s: "Inside the roots are special tubes called xylem and phloem. They carry water and minerals up through the plant to the leaves."
                        },
                        {
                            t: "h2",
                            s: "Leaves"
                        },
                        {
                            t: "p",
                            s: "The leaves are where photosynthesis takes place."
                        },
                        {
                            t: "p",
                            s: "They take in carbon dioxide from the air through tiny openings called stomata."
                        },
                        {
                            t: "p",
                            s: "The plant puts the materials together to make food and gives off oxygen as a by-product."
                        },
                        {
                            t: "h2",
                            s: "Other headings"
                        },
                        {
                            t: "p",
                            s: "Internal Leaf Anatomy (no content recorded)."
                        },
                        {
                            t: "p",
                            s: "ATP is adenosine triphosphate."
                        },
                        {
                            t: "p",
                            s: "Cellular respiration is how cells get energy."
                        },
                        {
                            t: "h1",
                            s: "CLASSIFICATION SYSTEM"
                        },
                        {
                            t: "h2",
                            s: "Taxonomy"
                        },
                        {
                            t: "p",
                            s: "Taxonomy is the science of naming, describing, and grouping organisms."
                        },
                        {
                            t: "p",
                            s: "Carolus Linnaeus is the father of taxonomy."
                        },
                        {
                            t: "p",
                            s: "Systematics is the study of the diversity of organisms. It includes naming, grouping, and studying history."
                        },
                        {
                            t: "h2",
                            s: "Naming terms"
                        },
                        {
                            t: "p",
                            s: "Binomial nomenclature is a two-name system of naming organisms."
                        },
                        {
                            t: "p",
                            s: "Genus: a group of related species."
                        },
                        {
                            t: "p",
                            s: "Species: a group of organisms that can interbreed and are isolated from other groups."
                        },
                        {
                            t: "p",
                            s: "Kingdom: a major level above phylum. A kingdom consists of smaller groups called phyla."
                        },
                        {
                            t: "h2",
                            s: "Six kingdoms (three recorded)"
                        },
                        {
                            t: "p",
                            s: "The heading says six kingdoms, but the notes record three: Animalia, Plantae, and Fungi."
                        },
                        {
                            t: "h2",
                            s: "Animalia"
                        },
                        {
                            t: "p",
                            s: "Animals eat food and can move. They cannot make their own food."
                        },
                        {
                            t: "p",
                            s: "Examples: dogs, cats, birds."
                        },
                        {
                            t: "p",
                            s: "Rule: If it moves and eats, it's an animal."
                        },
                        {
                            t: "h2",
                            s: "Plantae"
                        },
                        {
                            t: "p",
                            s: "Plants make their own food and do not move. They are green."
                        },
                        {
                            t: "p",
                            s: "Examples: trees, grass."
                        },
                        {
                            t: "p",
                            s: "Rule: If it is green and does not move, it's a plant."
                        },
                        {
                            t: "h2",
                            s: "Fungi"
                        },
                        {
                            t: "p",
                            s: "Fungi do not make their own food and do not move. They absorb food and are not green."
                        },
                        {
                            t: "p",
                            s: "Examples: mushrooms, molds."
                        },
                        {
                            t: "p",
                            s: "Rule: If it grows but is not green, it is not a plant."
                        },
                        {
                            t: "h2",
                            s: "Animal phyla"
                        },
                        {
                            t: "tb",
                            s: "Porifera"
                        },
                        {
                            t: "ts",
                            s: "Trait: Mostly asymmetrical"
                        },
                        {
                            t: "ts",
                            s: "Examples: not recorded"
                        },
                        {
                            t: "tb",
                            s: "Cnidaria"
                        },
                        {
                            t: "ts",
                            s: "Trait: not recorded"
                        },
                        {
                            t: "ts",
                            s: "Examples: not recorded"
                        },
                        {
                            t: "tb",
                            s: "Platyhelminthes"
                        },
                        {
                            t: "ts",
                            s: "Trait: Flat, soft-bodied"
                        },
                        {
                            t: "ts",
                            s: "Examples: not recorded"
                        },
                        {
                            t: "tb",
                            s: "Nematoda"
                        },
                        {
                            t: "ts",
                            s: "Trait: Cylindrical, unsegmented"
                        },
                        {
                            t: "ts",
                            s: "Examples: Ascaris, hookworm"
                        },
                        {
                            t: "tb",
                            s: "Annelida"
                        },
                        {
                            t: "ts",
                            s: "Trait: Segmented, body divided"
                        },
                        {
                            t: "ts",
                            s: "Examples: Leech, earthworm"
                        },
                        {
                            t: "tb",
                            s: "Mollusca"
                        },
                        {
                            t: "ts",
                            s: "Trait: Soft-bodied, protected by a shell"
                        },
                        {
                            t: "ts",
                            s: "Examples: Snails, clams"
                        },
                        {
                            t: "tb",
                            s: "Arthropoda"
                        },
                        {
                            t: "ts",
                            s: "Trait: Jointed appendages, exoskeleton"
                        },
                        {
                            t: "ts",
                            s: "Examples: Butterfly, spider"
                        },
                        {
                            t: "tb",
                            s: "Echinodermata"
                        },
                        {
                            t: "ts",
                            s: "Trait: Spiny skin, water vascular system"
                        },
                        {
                            t: "ts",
                            s: "Examples: Starfish, sea urchin"
                        },
                        {
                            t: "tb",
                            s: "Chordata"
                        },
                        {
                            t: "ts",
                            s: "Trait: Possesses a notochord"
                        },
                        {
                            t: "ts",
                            s: "Examples: Fish, frog, snake"
                        },
                        {
                            t: "p",
                            s: "Other headings on the taxonomy page: Philippine Eagle and Sampaguita."
                        }
                    ];
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
            var __webpack_exports__ = __webpack_require__("./src/pages/index/index.ux?uxType=page");
        })();
    };
    if ("u" < typeof window) return createPageHandler();
    window.createPageHandler = createPageHandler;
})();
