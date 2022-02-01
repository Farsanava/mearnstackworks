import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({  //create form group form that page
    uid: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private routerLogin:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // login() {
  //   var uid = this.loginForm.value.uid
  //   var pass = this.loginForm.value.pass

  //   if (this.loginForm.valid) {
  //   let result=this.ds.login(uid,pass)
  //     if (result) {   
  //       alert("Login success")
  //       this.routerLogin.navigateByUrl('dashboard')
  //     }
  //    else{
  //      alert("invlid username or password")
  //    }
    
  //   }
  //   else{
  //     alert("Form Invalid")
  //   }
    
  // }
  login() {
   
    var uid = this.loginForm.value.uid
    var pass = this.loginForm.value.pass
    if (this.loginForm.valid) {
    // let result=
    this.ds.login(uid,pass)
    //asynchronous event in angular
    .subscribe((result:any)=>{
      if (result) {
      
        // alert("Login success")
        alert(result.message)
        localStorage.setItem("currentUsername",JSON.stringify(result.currentUsername))
        localStorage.setItem("currentUserid",JSON.stringify(result.currentUserid))
        localStorage.setItem("token",JSON.stringify(result.token))
        this.routerLogin.navigateByUrl('dashboard')
      }
      },
    (result:any)=>{
      alert(result.error.message)
    })
    
    }
    else{
      alert("Form Invalid")
    }
    
  }
}
