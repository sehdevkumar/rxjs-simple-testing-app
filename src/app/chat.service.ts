import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
   
  subject = new Subject()

  constructor() { }
  
   messages:string[] = []


  sendMessage(msg:any){

       this.messages.push(msg)
       this.subject.next(this.messages)
  }

  getMessage(){
     return this.subject.asObservable()
  }
}
