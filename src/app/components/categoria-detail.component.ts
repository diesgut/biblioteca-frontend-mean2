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
  selector: 'categoria-detail',
  templateUrl: '../views/categoria-detail.html',
  providers: [CategoriaService]
})

export class CategoriaDetailComponent implements OnInit {
  public titulo: string;
  public categoria: Categoria;
  public errorMensaje: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoriaService: CategoriaService
  ) {
    this.titulo = "Detalle de categoria";
  }

  ngOnInit() {
    console.log('CategoriaDetailComponent cargado');
    this.getCategoria();
    //  console.log('cantidad de categorias '+this.categorias.length);
  }

  getCategoria() {

    this._route.params.forEach((params: Params) => {
      let id=params['id'];

      this._categoriaService.getCategoria(id).subscribe(
        result => {
          console.dir(result);
          this.categoria = result.categoria;
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
