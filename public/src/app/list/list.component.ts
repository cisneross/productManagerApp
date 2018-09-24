import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import {Router} from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
prodList=[];
  constructor(private _httpService: HttpService,private _router:Router) { }

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(){
    let observable = this._httpService.findProducts();
    observable.subscribe((data:any)=>{
      console.log('made it back to the component.ts', data);
      this.prodList = data;
    })
  }
  onEdit(id){
    console.log(id);
    this._router.navigate([`products/edit/${id}`]);
  }
  onDelete(id){
    console.log(id);
    let observable  = this._httpService.sendProdToDelete(id);
    observable.subscribe((data: any) => {
      this.getAllProducts();
    });
  }


}
