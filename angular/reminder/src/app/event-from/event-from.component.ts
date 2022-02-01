import { Component, EventEmitter,Output,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-event-from',
  templateUrl: './event-from.component.html',
  styleUrls: ['./event-from.component.css']
})
export class EventFromComponent implements OnInit {
  
  
  uid=""
  event:any
  constructor(private ds:DataService,private router:Router) { 
    this.uid=JSON.parse(localStorage.getItem("currentUserid")||'')
    this.ds.getEvent(this.uid)
    .subscribe((result:any)=>{
      if(result){
        this.event=result.event
        localStorage.setItem("currentEvent",JSON.stringify(result.currentEvent))
      }
      } ,
      (result)=>{
        alert(result.error.message)
      }
    )
  }

  
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
     
      this.router.navigateByUrl("/showevent")
    }
  }
  // deleteEvent(){
  //   this.ds.deleteEvent(event)
  //   .subscribe((result:any)=>{
  //     if(result){
  //       alert(result.message)
  //       this.router.navigateByUrl("")
  //     }

  //   },
  //   (result)=>{
  //     alert(result.error.message);
  //   }
  //   )
  // }
  // cancel(){
  //   this.event=""
  // }
  
 
}
