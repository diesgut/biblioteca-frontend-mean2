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
  selector: 'categoria-edit',
  templateUrl: '../views/categoria-add.html',
  providers: [CategoriaService]
})

export class CategoriaEditComponent implements OnInit {
  public titulo: string;
  public categoria: Categoria;
  public errorMensaje: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoriaService: CategoriaService
  ) {
    this.titulo = "Editar categoria";
  }

  ngOnInit() {
    console.log('CategoriaEditComponent cargado');
    this.categoria=new Categoria("","","");
    this.getCategoria();
    //  console.log('cantidad de categorias '+this.categorias.length);
  }

  getCategoria() {

    this._route.params.forEach((params: Params) => {
      let id=params['id'];

      this._categoriaService.getCategoria(id).subscribe(
        result => {

          this.categoria = result.categoria;
            console.dir(result);
          if (!this.categoria) {
            alert('No se encontro la categoria');
            this._router.navigate(['/']);
          }
        },
        error => {
          this.errorMensaje = < any > error;
          if (this.errorMensaje != null) {
            console.log('Error ' + this.errorMensaje);
          }
        }
      );

    });
  }


}
