System.register(["../model/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, KanbanController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            KanbanController = class KanbanController {
                constructor() {
                    // Write TypeScript code!
                    const appDiv = document.getElementById('app');
                    appDiv.innerHTML = `<h2>TypeScript Starter</h2>
                        <h1>See console for genereted object</h1>`;
                    console.log(new index_1.History(new Date(), '', '', 8, new index_1.Task('', '', 8)));
                    /*document
                    .querySelector('.form')
                    .addEventListener('submit',controller.adiciona.bind(controller));*/
                }
            };
            exports_1("KanbanController", KanbanController);
        }
    };
});
