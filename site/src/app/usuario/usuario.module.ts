import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsuarioComponent, CreateUsuarioComponent, ListUsuarioComponent, FilterPipe],
  imports: [
    CommonModule,
    NgxDatatableModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    UsuarioComponent, CreateUsuarioComponent, ListUsuarioComponent
  ]
})
export class UsuarioModule { }
