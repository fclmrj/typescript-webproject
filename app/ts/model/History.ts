import {Task} from './index';

export class History{

  constructor( readonly _created: Date, 
              readonly _title: string,
              readonly _description: string = '',
              readonly _points: number,
              readonly _task: Task){
              }
}