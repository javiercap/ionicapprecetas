import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
/*
  Generated class for the RecetasServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecetasServicesProvider {

  constructor(public http: Http) {
    //console.log('Hello RecetasServicesProvider Provider');
  }



	getAll(){
	  	return new Promise(
	  		resolve=>{
	  			this.http.get("http://www.almadechef.com/recetasws/list/")
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					alert(err + 'Desde servivio');
	  				}
	  			)
	  		}
	  	);
	}



	getOne(id){
	  	return new Promise(
	  		resolve=>{
	  			this.http.get("http://www.almadechef.com/recetasws/listone/"+id)
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
	}


	getIng(id){
	  	return new Promise(
	  		resolve=>{
	  			this.http.get("http://www.almadechef.com/recetasws/listIng/"+id+"/")
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
	}

	getPro(id){
	  	return new Promise(
	  		resolve=>{
	  			this.http.get("http://www.almadechef.com/recetasws/listPro/"+id+"/")
	  			.map(res=> res.json())
	  			.subscribe(
	  				data => {
	  					resolve(data);
	  				},
	  				err=>{
	  					console.log(err);
	  				}
	  			)
	  		}
	  	);
	}


}
