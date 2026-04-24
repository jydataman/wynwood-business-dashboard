module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/data.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "neighborhood": "Wynwood",
    "lastUpdated": "2026-04-24",
    "baseline2025": [
        {
            "category": "Dining/Nightlife",
            "total": 123,
            "subcategories": [
                {
                    "name": "Restaurant",
                    "count": 41
                },
                {
                    "name": "Fast Casual",
                    "count": 27
                },
                {
                    "name": "Bakery/Sweets",
                    "count": 17
                },
                {
                    "name": "Coffee/Cafe",
                    "count": 16
                },
                {
                    "name": "Bar",
                    "count": 12
                },
                {
                    "name": "Nightclub",
                    "count": 10
                }
            ]
        },
        {
            "category": "Shopping",
            "total": 63,
            "subcategories": [
                {
                    "name": "Gifts",
                    "count": 11
                },
                {
                    "name": "Apparel",
                    "count": 9
                },
                {
                    "name": "Women's Apparel",
                    "count": 7
                },
                {
                    "name": "Men's Apparel",
                    "count": 6
                },
                {
                    "name": "Eyewear",
                    "count": 6
                },
                {
                    "name": "Home",
                    "count": 5
                },
                {
                    "name": "Footwear",
                    "count": 5
                },
                {
                    "name": "Hobby/Sport",
                    "count": 4
                },
                {
                    "name": "Cannabis/Smoke Shop",
                    "count": 3
                },
                {
                    "name": "Wedding",
                    "count": 2
                },
                {
                    "name": "Vintage/Used",
                    "count": 2
                },
                {
                    "name": "Pet",
                    "count": 1
                }
            ]
        },
        {
            "category": "Professional Services",
            "total": 58,
            "subcategories": [
                {
                    "name": "Creative Agencies",
                    "count": 15
                },
                {
                    "name": "Interior Design",
                    "count": 7
                },
                {
                    "name": "Real Estate",
                    "count": 7
                },
                {
                    "name": "Law Firm",
                    "count": 4
                },
                {
                    "name": "Healthcare",
                    "count": 3
                },
                {
                    "name": "School",
                    "count": 3
                },
                {
                    "name": "Software",
                    "count": 2
                },
                {
                    "name": "Architecture Firm",
                    "count": 2
                },
                {
                    "name": "Co-working Space",
                    "count": 2
                },
                {
                    "name": "Bank",
                    "count": 2
                },
                {
                    "name": "Home and Industrial",
                    "count": 4
                },
                {
                    "name": "Non-Profit",
                    "count": 1
                },
                {
                    "name": "Auto Repair",
                    "count": 1
                },
                {
                    "name": "Storage",
                    "count": 1
                }
            ]
        },
        {
            "category": "Galleries & Venues",
            "total": 30,
            "subcategories": [
                {
                    "name": "Art Gallery",
                    "count": 14
                },
                {
                    "name": "Museum",
                    "count": 5
                },
                {
                    "name": "Event Space",
                    "count": 5
                },
                {
                    "name": "Recreation",
                    "count": 5
                },
                {
                    "name": "Performance Space",
                    "count": 1
                }
            ]
        },
        {
            "category": "Health, Wellness & Beauty",
            "total": 24,
            "subcategories": [
                {
                    "name": "Fitness",
                    "count": 11
                },
                {
                    "name": "Beauty Services",
                    "count": 6
                },
                {
                    "name": "Tattoo",
                    "count": 5
                },
                {
                    "name": "Spa/Massage",
                    "count": 2
                }
            ]
        },
        {
            "category": "Hotels",
            "total": 3,
            "subcategories": [
                {
                    "name": "Boutique/Luxury",
                    "count": 3
                }
            ]
        }
    ],
    "newOpenings2026": [
        {
            "date": "2025-11-01",
            "name": "Design Lab 22",
            "type": "Retail/Customize Clothes",
            "address": "2729 NW 3rd Ave",
            "contact": "Brenna Wagnon",
            "description": "Specializing in custom merch and bold tactile design."
        },
        {
            "date": "2025-12-01",
            "name": "Miax Global",
            "type": "Global Exchange/Trading Floor",
            "address": "545 NW 26th St",
            "description": "Electronic exchanges and physical trading floor."
        },
        {
            "date": "2026-01-01",
            "name": "Cha Cha Cha",
            "type": "Restaurant",
            "address": "2637 N Miami Ave",
            "description": "Mexican snack bar born in Mexico City."
        },
        {
            "date": "2026-01-16",
            "name": "Francesco Martucci",
            "type": "Pizzeria/Bar",
            "address": "10 NE 27th St",
            "isAnchor": true,
            "description": "World's best pizzeria's first U.S. location."
        },
        {
            "date": "2026-02-21",
            "name": "West Elm",
            "type": "Furniture & Decor",
            "address": "286 NW 29th St",
            "isAnchor": true,
            "description": "Sustainable modern furniture and decor."
        },
        {
            "date": "2026-03-01",
            "name": "Paris Baguette",
            "type": "Bakery/Cafe",
            "address": "The Strata",
            "description": "Global bakery and cafe chain."
        }
    ]
};
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data.json.[json].cjs [app-rsc] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            padding: '40px',
            fontFamily: 'sans-serif',
            backgroundColor: '#f4f4f9',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    marginBottom: '30px',
                    borderBottom: '2px solid #000',
                    paddingBottom: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: 0,
                            fontSize: '2.5rem',
                            fontWeight: '900'
                        },
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].neighborhood.toUpperCase(),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#2563eb'
                                },
                                children: "PULSE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 10,
                                columnNumber: 45
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#666',
                            fontWeight: 'bold'
                        },
                        children: [
                            "VERSION 1.0 | ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].lastUpdated
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].baseline2025.map((sector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'white',
                            padding: '20px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                            border: '1px solid #e5e7eb'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: 0,
                                    fontSize: '0.75rem',
                                    color: '#9ca3af',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                },
                                children: sector.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '10px 0 0 0',
                                    fontSize: '2rem',
                                    fontWeight: '800',
                                    color: '#111827'
                                },
                                children: sector.total
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, sector.category, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00bs3ho._.js.map