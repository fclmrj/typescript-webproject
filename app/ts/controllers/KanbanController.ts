import {History, Task} from '../model/index';

export class KanbanController{

  constructor(){
    
    // Write TypeScript code!
    const appDiv: HTMLElement = document.getElementById('app');
    appDiv.innerHTML = `<h2>TypeScript Starter</h2>
                        <h1>See console for genereted object</h1>`;
    
    console.log(new History(new Date(),'','',8,new Task('','',8)));

    /*document
    .querySelector('.form')
    .addEventListener('submit',controller.adiciona.bind(controller));*/
  }
}