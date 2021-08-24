import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ChatService {
  

  messages: string[] = [];

  subjectBehave = new BehaviorSubject<string[]>(this.messages);

  constructor() {}

  sendMessage(msg: any) {
    this.messages.push(msg);
    this.subjectBehave.next(this.messages)
  }

  getMessage() {
    return this.subjectBehave.asObservable();
  }
}
