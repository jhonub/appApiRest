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

  public listUsuario:Array<any>;
  public data:any;

  constructor(
    private webservice:WebService,
    private modalService: NgbModal,
    private toastrService: ToastrService
  ) { }
  filterusuario = '';
  ngOnInit() {
    this.inicializator();
  }  

  inicializator(){
    this.listUsuario=[];
  this.listUsuariosQuery();
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
        this.listUsuariosQuery();
        this.messageToast('USUARIO', 'Usuario eliminado', 'success');
      },
      error=>{
        console.log(error);
      }
    )
  }

  validatorUsuario(){
    this.inicializator();
  }

  messageToast(title, sms, type) {
    let config = {};

    if(type == 'success') {
      this.toastrService.success(sms, title, config);
    }

    if(type == 'info') {
      this.toastrService.info(sms, title, config);
    }

    if(type == 'warning') {
      this.toastrService.warning(sms, title, config);
    }

    if(type == 'danger') {
      this.toastrService.error(sms, title, config);
    }
  }
}
