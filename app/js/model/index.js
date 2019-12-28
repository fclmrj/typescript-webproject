System.register(["./History", "./Task"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (History_1_1) {
                exportStar_1(History_1_1);
            },
            function (Task_1_1) {
                exportStar_1(Task_1_1);
            }
        ],
        execute: function () {
        }
    };
});
