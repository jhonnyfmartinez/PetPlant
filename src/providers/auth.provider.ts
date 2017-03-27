import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NativeStorage } from '@ionic-native/native-storage';

var api_url = "https://petplant-server.herokuapp.com/";

@Injectable()
export class Auth {

  constructor(public http: Http, private nativeStorage: NativeStorage) {}

  signIn(values){
    return new Promise<any>((resolve,reject)=>{
      let reqData = {
        username: values.user.value,
        password: values.pass.value
      }
      this.http.post(api_url+"auth_user",reqData).subscribe(res=>{
        if(res.json().auth){
          this.nativeStorage.setItem('userKey',res.json().id);
          resolve();
        }else{
          reject();
        }
      },error=>console.log(error));
    });
  }

  signUp(values){
    return new Promise<any>((resolve,reject)=>{
      let reqData = {
        username: values.user.value,
        password: values.pass.value,
        email: values.email.value
      };
      this.http.post(api_url+"add_user",reqData).subscribe(res=>{
        if(res.status==200){
          this.nativeStorage.setItem('userKey',res.json());
          resolve();
        }else{
          reject();
        }
      },error=>console.log(error));
    });
  }

  createPlan(values,imgData){
    return new Promise<any>((resolve,reject)=>{
      this.getUserKey().then(data=>{
        console.log(data);
        let reqData = {
          name: values.name.value,
          type: values.type.value,
          gender: values.gender.value,
          user_ref: data,
          img: imgData?imgData:undefined
        };
        this.http.post(api_url+'add_plant',reqData).subscribe(res=>{
          if(res.status=200){
            resolve();
          }else{
            reject();
          }
        }, err=>console.log(err));
      });
    });
  }

  logOut(){
    return new Promise<any>((resolve,reject)=>{
      this.nativeStorage.remove('userKey').then(()=>{
        resolve();
      }).catch(error=>reject(error));
    });
  }

  getUserKey(){
    return new Promise<any>((resolve,reject)=>{
      this.nativeStorage.getItem('userKey').then(data=>{
        resolve(data);
      }).catch(err=>{
        reject(err);
      });
    });
  }

}
