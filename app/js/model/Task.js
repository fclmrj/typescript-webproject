System.register([], function (exports_1, context_1) {
    "use strict";
    var Task;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Task = class Task {
                constructor(_title, _description, _points) {
                    this._title = _title;
                    this._description = _description;
                    this._points = _points;
                }
            };
            exports_1("Task", Task);
        }
    };
});
