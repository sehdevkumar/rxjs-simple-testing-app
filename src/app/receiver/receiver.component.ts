import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(private chat:ChatService) { }
  
  chatsList:string[] = []


    ngOnInit(): void {
     this.chat.getMessage()
     .subscribe((response:any)=>{
         this.chatsList = response
        
     })

    
  }

}
