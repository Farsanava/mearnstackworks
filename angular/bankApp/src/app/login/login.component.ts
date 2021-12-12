import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner..."  // string interpolation databinding
  accno="Account Number Please"      //property binding
  acno=""
  pass=""

  data:any={
    1000:{accno:1000,uname:"sanu",password:1000,balance:5000},
    1001:{accno:1001,uname:"shabi",password:1001,balance:6000},
    1002:{accno:1002,uname:"nichu",password:1002,balance:4000},
    1003:{accno:1003,uname:"hadiashir",password:1003,balance:5000}
  }
  constructor() { }

  ngOnInit(): void {
  }
  pswChange(event:any){
     this.pass=event.target.value
     console.log(this.pass)
     
  }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno)
    
  }
  // login(a:any,p:any){
    login(){
    var acno= this.acno
    var pass=this.pass
    // var acno= a.value
    // var pass=p.value
    let db=this.data
    if(acno in db){
      if(pass==db[acno]["password"]){
        alert("Login success")
      }
      else{
         alert("Invalid Password")
      }
    }
    else{
    alert("Invalid Account Number")
    }
  }

}
