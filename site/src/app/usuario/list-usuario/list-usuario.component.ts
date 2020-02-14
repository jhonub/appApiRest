import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/webservice.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  public listUsuario:Array<any>=[];
  public data:any;

  constructor(
    private webservice:WebService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
    this.inicializator();
  }  

  inicializator(){
  this.listUsuariosQuery();
  }

  showError() {
    this.toastr.success('Usuario Eliminado!!');
  }

  listUsuariosQuery(){
    this.webservice.getListUsuarios().subscribe(
     response=>{
        this.listUsuario=response.data;
      }
    )
  }

  deleteUsuario(id){
    console.log(id);
    this.webservice.deleteUsuario(id).subscribe(
      response =>{
        console.log(response);
        this.listUsuariosQuery();
        this.showError();
      },
      error=>{
        console.log(error);
      }
    )
  }

  validatorUsuario(){
    this.inicializator();
  }
}
