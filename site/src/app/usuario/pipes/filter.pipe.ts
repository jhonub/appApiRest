import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg:any[]):any  {
    if(arg.length < 4){
      return value;
    } 
    const resultUsuario = [];
    for( const usuario of value ){
        if(usuario.nombre.toLowerCase().indexOf(arg) > -1 ){
          resultUsuario.push(usuario);
        }
        if(usuario.email.toLowerCase().indexOf(arg) > -1){
          resultUsuario.push(usuario)
        };
    };
    return resultUsuario;
  }  

}
