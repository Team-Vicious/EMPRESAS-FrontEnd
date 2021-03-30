import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { Noticia } from 'src/app/models/noticia';
import { EmpresaService } from 'src/app/services/empresa.service';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  empresa: Empresa;
  listaNoticia: Noticia[];
  termino: string;
  noticia: Noticia;

  

  constructor(
    private services: EmpresaService,
    private serviceNoticia: NoticiaService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.listarEmpresas();
  }

  private listarEmpresas(){
    
    //ID DE EMPRESA
    let id= +this.route.snapshot.paramMap.get('id');

    this.services.ver(id).subscribe(empresa => this.empresa = empresa);

    //ID DE NOTICIA-
    let idNoticia = +this.route.snapshot.paramMap.get('idn');

    this.serviceNoticia.verNoticiaPorId(idNoticia).subscribe(noticia => this.noticia = noticia);

  }

  //mientras escribis va tomando lo ingresado en el imput del buscador gracias al $event
  filtrar(termino: string):void {
    termino = termino !== undefined? termino.trim(): '';
    if(termino !== ''){
      this.termino = termino;
    }
  }

}
