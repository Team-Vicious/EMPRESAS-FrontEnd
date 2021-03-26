import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { Noticia } from 'src/app/models/noticia';
import { EmpresaService } from 'src/app/services/empresa.service';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  empresa: Empresa;
  listaNoticia: Noticia[];
  termino: string;

  constructor(
    private services: EmpresaService,
    private serviceNoticia: NoticiaService,
    private route: ActivatedRoute,
    private route2: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.listarEmpresas();
  }

  private listarEmpresas(){
    
    let id= +this.route.snapshot.paramMap.get('id');

    this.services.ver(id).subscribe(empresa => this.empresa = empresa);

    this.termino = this.route2.snapshot.paramMap.get('termino');

    //cambiar a bucar noticias por termino!!!!!!!!!!!!!!!!!!
    this.serviceNoticia.verNoticiasPorId(id).subscribe(noticias => this.listaNoticia = noticias);

  }

  //mientras escribis va tomando lo ingresado en el imput del buscador gracias al $event
  filtrar(termino: string):void {
    termino = termino !== undefined? termino.trim(): '';
    if(termino !== ''){
      this.termino = termino;
    }
  }
}
