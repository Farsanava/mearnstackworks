import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({  //create form group form that page
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    uid: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private ds: DataService, private routerLogin: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // register() {
     
  //   // registerForm ile value akathan uname acno pass ullath 
  //   // soooo ingne kodth
  //   var uname = this.registerForm.value.uname
  //   var uid = this.registerForm.value.uid
  //   var pass = this.registerForm.value.pass

  //   if (this.registerForm.valid) {
  //      var result = this.ds.register(uname,uid,pass)
  //       if (result) {
  //         alert("Account create successfully")
  //         this.routerLogin.navigateByUrl('')
  //       }
  //   else{
  //       alert("account already exist")
  //       this.routerLogin.navigateByUrl('')
  //      }
  //     } 
  //   else {
  //     alert("form invalid")
  //   }
  // }
  register() {
   
    var uname = this.registerForm.value.uname  // registerForm ile value akathan uname acno pass ullath 
    // soooo ingne kodth
    var uid = this.registerForm.value.uid
    var pass = this.registerForm.value.pass

    if (this.registerForm.valid) {
      //let database=this.ds.data // service nte ullil ullath
      // var result =
       this.ds.register( uname,uid, pass)
       .subscribe((result:any)=>{
        if (result) {
          // alert("Account create successfully")
          alert(result.message)
          this.routerLogin.navigateByUrl('')
        }
      },
      (result:any)=>{
        alert(result.error.message)
        // alert("account already exist")
        this.routerLogin.navigateByUrl('')
      }
       )
      }
     
    else {
      alert("form invalid")
    }
  }
}
