import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit,OnDestroy {

  constructor(private chat:ChatService) { }
  
  chatsList:string[] = []
  subs:Subscription= new Subscription();


    ngOnInit(): void {
    this.subs =  this.chat.getMessage()
     .subscribe((response:any)=>{
         this.chatsList = response
        
     },
      err=>{
        console.log("Got an Error! as:",err)
      },
      ()=>{
        console.log("Task has Completed!")
      }
     )
   

    
  }

  ngOnDestroy(){
      this.subs.unsubscribe()
  }

}
