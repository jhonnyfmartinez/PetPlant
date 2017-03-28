import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

var api_url = "https://petplant-server.herokuapp.com/";

@Injectable()
export class Data {

  constructor(public http: Http) {}

  remove_plant(plantId,hasImage){
    return new Promise<any>((resolve,reject)=>{
      let reqData = {plant_id:plantId,hasImage:hasImage};
      this.http.post(api_url+'remove_plant',reqData).subscribe(res=>{
        console.log(res);
        if(res.status==200){
          resolve();
        }else{
          reject();
        }
      });
    });
  }

  get_plants_by_user(userId){
    return new Promise<any>((resolve,reject)=>{
      this.http.get(api_url+'get_plants_by_user/'+userId).subscribe(res=>{
        if (res.status==200){
          resolve(res.json());
        }else{
          reject();
        }
      });
    });
  }

}
