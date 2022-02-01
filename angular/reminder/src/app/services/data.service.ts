import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options = {
  headers: new HttpHeaders()
} 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUsername = ""
  currentUserid = ""
  currentEvent = []

  data: any = {
    1000: { uname: "sanu", uid: 1000, password: 1000, event: [] },
    1001: { uname: "shabi", uid: 1001, password: 1001, event: [] },
    1002: { uname: "nichu", uid: 1002, password: 1002, event: [] },
    1003: { uname: "hadiashir", uid: 1003, password: 1003, event: [] }
  }
  constructor(private http: HttpClient) {
    // this.getDetails()  
  }
  saveDetails() {
    if (this.data) {
      localStorage.setItem("data", JSON.stringify(this.data))  //stringify=>convert to string
    }
    if (this.currentUsername) {
      localStorage.setItem("currentUsername", JSON.stringify(this.currentUsername))
    }
    if (this.currentUserid) {
      localStorage.setItem("currentUserid", JSON.stringify(this.currentUserid))
    }
    if (this.currentEvent) {
      localStorage.setItem("currentEvent", JSON.stringify(this.currentEvent))
    }
  }
  getDetails() {
    if (localStorage.getItem("data")) {
      this.data = JSON.parse(localStorage.getItem("data") || '')   // parse=>conver to original
    }
    if (localStorage.getItem("currentUsername")) {
      this.currentUsername = JSON.parse(localStorage.getItem("currentUsername") || '')
    }
    if (localStorage.getItem("currentUserid")) {
      this.currentUserid = JSON.parse(localStorage.getItem("currentUserid") || '')
    }
    if (localStorage.getItem("currentEvent")) {
      this.currentEvent = JSON.parse(localStorage.getItem("currentEvent") || '')
    }
  }
  getEvent(uid: any) {
    const data = {
      uid
    }
    return this.http.post('http://localhost:3000/viewevent', data, this.getOptions())
  }
  // register(uname:any,uid:any,password:any){
  //   let database=this.data

  //     if(uid in database){
  //         return false
  //     }
  //     else{
  //        database[uid]={
  //         uname,  
  //         uid,
  //         password,
  //         event:[]
  //        }
  //        this.saveDetails()
  //        return true
  //     }
  //   }
  register(uname: any, uid: any, password: any) {
    const data = {
      uname,
      uid,
      password
    }
    return this.http.post('http://localhost:3000/register', data)
  }
  login(uid: any, pass: any) {
    const data = {
      uid,
      pass
    }
    return this.http.post('http://localhost:3000/login', data)
  }
  // login(uid:any,pass:any){
  // //   const data={
  // //     acno,
  // //     pass
  // //  }


  //   let database = this.data
  //   if (uid in database) {
  //     if (pass == database[uid]["password"]) {
  //       this.currentUsername=database[uid]["uname"]
  //       this.currentUserid=uid
  //       this.saveDetails()
  //       return true
  //     }
  //     else {
  //       // alert("Invalid Password")
  //       return false
  //     }
  //   }
  //   else {
  //     // alert("Invalid Account Number")
  //     return false
  //   }
  // }
  getOptions() {
    const token = JSON.parse(localStorage.getItem("token") || '')
    console.log(token);
    //request header creation
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append('x-access-token', token)
      options.headers = headers
    }
    console.log(options);
    return options
  }
  addevent(uid: any, date: any, event: any) {
    const data = {
      uid,
      date,
      event
    }
    return this.http.post('http://localhost:3000/addevent', data, this.getOptions())
  }
  deleteAcc(uid:any) {
    return this.http.delete('http://localhost:3000/deleteAcc/' + uid, this.getOptions())
  }
  // deleteEvent(event:any) {
  //   return this.http.deleteEvent('http://localhost:3000/deleteEvent/' + event, this.getOptions())
  // }
}
