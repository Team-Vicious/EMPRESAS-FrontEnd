import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  lista: Empresa[] = [];

  constructor(private services: EmpresaService) { 
    
  }

  ngOnInit(): void {
    this.listarEmpresas();
  }

  private listarEmpresas(){
    this.services.listar().subscribe(empresas => this.lista = empresas);
  }
  


}
