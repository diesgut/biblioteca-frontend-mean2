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
  selector: 'categoria-add',
  templateUrl: '../views/categoria-add.html',
  providers: [CategoriaService]
})

export class CategoriaAddComponent implements OnInit {
  public titulo: string;
  public categoria: Categoria;
  public errorMensaje: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoriaService: CategoriaService
  ) {
    this.titulo = "Registro de Categorias";
  }

  ngOnInit() {
    console.log('CategoriaAddComponent cargado');
    this.categoria=new Categoria("","","");
    //  console.log('cantidad de categorias '+this.categorias.length);
  }

  onSubmit(){
    console.log('onSubmit ');
    console.dir(this.categoria);
    this._categoriaService.addCategoria(this.categoria).subscribe(
      response=>{
        this.categoria=response.categoria;


        if(!response.categoria){
          alert('Error en el servidor');
        }else{
          this._router.navigate(['/']);
        }
      },error=>{
        this.errorMensaje=<any>error;
        if(this.errorMensaje!=null){
          console.log(this.errorMensaje);
        }
      }
    );
  }

}
