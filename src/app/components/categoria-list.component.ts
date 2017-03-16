import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

import {
  CategoriaService
} from '../services/categoria.service';

import {
  Categoria
} from '../models/categoria';

@Component({
  selector: 'categoria-list',
  templateUrl: '../views/categoria-list.html',
  providers: [CategoriaService]
})

export class CategoriaListComponent implements OnInit {
  public titulo: string;
  public categorias: Categoria[];
  public errorMensaje: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoriaService: CategoriaService
  ) {
    this.titulo = "Listado de categorias";
  }

  ngOnInit() {
    console.log('CategoriaListComponent cargado');
    this.getCategorias();
  //  console.log('cantidad de categorias '+this.categorias.length);
  }

  getCategorias() {
    this._categoriaService.getCategorias().subscribe(
      result => {
        console.dir(result);
        this.categorias = result.categorias;
        if (!this.categorias) {
          alert('No se encontro categorias');
        }
      },
      error => {
        this.errorMensaje = < any > error;
        if (this.errorMensaje != null) {
          console.log('Error '+this.errorMensaje);
        }
      }
    );
  }

  onDelete(id:string){
    this._categoriaService.deleteCategoria(id).subscribe(
      result=>{
        if(!result.categoria){
          alert('Error en el servidor');
        }
        this.getCategorias();
      },
      error=>{
        this.errorMensaje=<any>error
      }
    );
  }

}
