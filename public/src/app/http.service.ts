import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}
  newProd(newProduct){
    return this._http.post('/create', newProduct);
  }
  findProducts(){
    console.log('made it to service ');
    return this._http.get('/listproducts');
  }
  findOneProd(id){
    return this._http.get(`/findprod/${id}`);
  }
  editProduct(editedproduct){
    return this._http.put(`/update/${editedproduct._id}`, editedproduct);
  }
  sendProdToDelete(id){
    return this._http.delete(`/delete/${id}`);
  }
}
