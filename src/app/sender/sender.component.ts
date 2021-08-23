import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
   
  message:string = ""

  constructor(private chat:ChatService) { 
   
  }

  ngOnInit(): void {
  }

  setData(){
     this.chat.sendMessage(this.message)
  }

}
