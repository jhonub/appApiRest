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
  this.ListUsuariosQuery();
  }

  showError() {
    this.toastr.success('Usuario Eliminado!!');
  }

  ListUsuariosQuery(){
    this.webservice.getListUsuarios().subscribe(
     data=>{
        console.log(data);
        
        //this.listUsuario=response;
        
      }
    )
  }

  deleteUsuario(id){
    this.webservice.deleteUsuario(id).subscribe(
      response =>{
        this.ListUsuariosQuery();
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
