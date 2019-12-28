System.register([], function (exports_1, context_1) {
    "use strict";
    var History;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            History = class History {
                constructor(_created, _title, _description = '', _points, _task) {
                    this._created = _created;
                    this._title = _title;
                    this._description = _description;
                    this._points = _points;
                    this._task = _task;
                }
            };
            exports_1("History", History);
        }
    };
});
