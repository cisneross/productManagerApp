import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import {Router} from '@angular/router';



@Component({
  selector: 'app-prod-create',
  templateUrl: './prod-create.component.html',
  styleUrls: ['./prod-create.component.css']
})
export class ProdCreateComponent implements OnInit {
newProduct = {title:'',price:'',img_url:''};
errorMesgs = [];
  constructor(private _httpService: HttpService,private _router:Router) { }

  ngOnInit() {
  }
  onCreateSubmit(){
    let observable = this._httpService.newProd(this.newProduct);
    observable.subscribe((data:any)=>{
      if (data.errors) {
        console.log(data.errors);
        console.log(data.errors.title.message);
        this.errorMesgs.push(data.errors.title.message);
        this.errorMesgs.push(data.errors.price.message);
        this.errorMesgs.push(data.errors.img_url.message);
      }
      else {
        console.log('Created', data);
        this.newProduct = {title:'',price:'',img_url:''};
        this._router.navigate(['/products']);
      }

    })
  }

}
