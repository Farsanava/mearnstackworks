import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  uid=""

  eventForm = this.fb.group({  //create form group form that page
    uid: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    date: ['',[Validators.required]],
    event: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })
  user:any
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { 
    this.user=JSON.parse(localStorage.getItem("currentUsername") || '')
  }
 
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("please Login!!!")
      this.router.navigateByUrl("")
    }
  }
  showevent(){
    this.router.navigateByUrl('/showevent')
  }
  addevent() {
   
    var uid = this.eventForm.value.uid
    var date = this.eventForm.value.date
    var event = this.eventForm.value.event
    if (this.eventForm.valid) {
      // var result=
      this.ds.addevent(uid,date,event)
      .subscribe((result:any)=>{
        if(result){
          // alert(amount+ "successfully credited....New balanceis:" +result)
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      })
      
    }
    else{
      alert("Form Invalid")
    }
    
  }
  logout(){
    localStorage.removeItem("token")
    // localStorage.removeItem("currentAcno")
    // localStorage.removeItem("currentUsername")
    var router=this.router
    setTimeout(function(){
      router.navigateByUrl("")
    },3000)
  }
   deleteFromParent(){
    this.uid=JSON.parse(localStorage.getItem("currentUserid")||'')
  }
  onDelete(event:any){
    // console.log(event);
    // alert("from parent" + event)
    this.ds.deleteAcc(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }

    },
    (result)=>{
      alert(result.error.message);
    }
    )
}
onCancel(){
  this.uid=""
}
}
