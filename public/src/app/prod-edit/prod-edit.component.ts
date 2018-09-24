import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent implements OnInit {
editProduct = {title:'', price: '', img_url: ''};
errorMesgs = [];
  constructor(private _httpService: HttpService,private _router:Router,private _activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.findSingleProduct();
  }
  findSingleProduct(){
    this._activatedroute.params.subscribe((params)=>{
      console.log('this is the id', params['id']);
      var id = params['id'];
      var tempObservable = this._httpService.findOneProd(id);
      tempObservable.subscribe((data:any)=>{
        this.editProduct = data;
        console.log('this is the product',this.editProduct);
      });
    });
  }
  onEditSubmit(){
    let observable = this._httpService.editProduct(this.editProduct);
    observable.subscribe((data: any) => {
      if (data.errors) {
        console.log(data.errors);
        console.log(data.errors.title.message);
        this.errorMesgs.push(data.errors.title.message);
        this.errorMesgs.push(data.errors.price.message);
        this.errorMesgs.push(data.errors.img_url.message);
      }
      else {
        console.log('edited', data);
        this.editProduct = {title:'', price: '', img_url: ''};
        this._router.navigate(['/products']);
      }

    })
  }
}
