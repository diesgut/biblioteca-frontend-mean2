import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response,
  Headers
} from '@angular/http';
import 'rxjs/add/operator/map';
import {
  Observable
} from 'rxjs/Observable';
import {
  Categoria
} from '../models/categoria';

import {
  GLOBAL
} from './global';

@Injectable()
export class CategoriaService {

  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getCategorias() {
    return this._http.get(this.url + 'categorias').map(res => res.json());
  }

  getCategoria(id:string) {
    return this._http.get(this.url + 'categoria/'+id).map(res => res.json());
  }

  addCategoria(categoria: Categoria) {
    let json = JSON.stringify(categoria);
    let params = json;
    let header = new Headers({
      'Content-Type': 'application/json'
    });
    console.log('addCategoria '+params);
    return this._http.post(this.url + "categoria",params,{headers:header}).map(res=>res.json());
  }

  deleteCategoria(id:string){
    return this._http.delete(this.url+'categoria/'+id).map(res=>res.json());
  }

  editCategoria(id:string,categoria:Categoria){
    console.log('editCategoria');
    let json=JSON.stringify(categoria);
    let params=json;
    let header = new Headers({
      'Content-Type': 'application/json'
    });
    console.dir(categoria);
    return this._http.put(this.url + "categoria/"+id,params,{headers:header}).map(res=>res.json());
  }

}
