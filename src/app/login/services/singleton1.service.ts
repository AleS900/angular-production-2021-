import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Singleton1Service {

  private message:string = '';

  constructor() {

  }

  getMessage():string{
    return this.message
  }

  setMessage(message:string):void{
    this.message = message;
  }

}