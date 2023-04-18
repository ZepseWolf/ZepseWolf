import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FeedData {
  arr_of_viewed_image: Array<String>,
  arr_of_category: Array<String>
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url:string = "http://localhost:5000/api";
  constructor(private http: HttpClient) { }
  

  postLogin(_loginForm:any) {
    return this.http.post<any>(this.url+"/login",_loginForm.value );
  }

  checkIsLogin(){
    return this.http.get<any>(this.url+"/login/isloggedin" );
  }

  logout(){
    this.http.get<any>(this.url+"/login/logout" ).subscribe(data => {
      console.log(data.message);
      //this._memoryService.getLocalStorage().clear();
    })
  }
  
  postRegister(_registerForm:any){
    return this.http.post<any>(this.url+"/users/register",_registerForm.value );
  }
  
  getUserData(id:string){
    return this.http.get<any>(this.url+"/users/"+id);
  }

  postPublicKey(publicKey:any){
    return this.http.get<any>(this.url+"/encryption/setFrontPublicKey", publicKey ); //public key is string might have error , might need object
  }
  
  private startService(){
    this.http.get<any>(this.url+"/authentication/" ).subscribe(data => {
    })
  }
  
  postFeed(userData: FeedData){
    return this.http.post<any>(this.url+"/image/feed" ,userData);
  }

  get_bidded_items(){
    var test_data_arr = [
      {image_id: "5f70347f979a2130b060ecd2", bidded_price: 20},
      {image_id: "5f7172f10f3d804fc0266a37", bidded_price: 202},
      {image_id: "6093af7cef3ad8159cad90a5", bidded_price: 2320}
    ]
    return this.http.post<any>(this.url+"/image/bidded_imgs" ,test_data_arr); // to be repalce with this._memoryService.GET_USER_DATA().bidded_imgs
  }

  // get_bidded_items(){

  //   return this.http.post<any>(this.url+"/image/bidded_imgs" ,this._memoryService.GET_USER_DATA().bidded_imgs);
  // }

}
