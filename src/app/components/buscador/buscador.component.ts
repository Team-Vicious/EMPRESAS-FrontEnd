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
  listaNoticia: Noticia[] = [];
  noticia: Noticia[] = [];
  termino: string;
  posicion: number;
  noticiaEncontrada: string;

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
    //this.buscarTerminoEnNoticias(this.empresa.id, this.termino)
  }

  private listarEmpresas() {

    let id = +this.route.snapshot.paramMap.get('id');

    this.services.ver(id).subscribe(empresa => this.empresa = empresa);

    this.termino = this.route2.snapshot.paramMap.get('termino');

   
    this.serviceNoticia.verArregloNoticiasPorTerminoAndId(id, this.termino).
      subscribe(noticia => this.listaNoticia = noticia)
      console.log(this.listaNoticia)
  }
  


  //mientras escribis va tomando lo ingresado en el imput del buscador gracias al $event
  filtrar(termino: string): void {
    termino = termino !== undefined ? termino.trim() : '';
    if (termino !== '') {
      this.termino = termino;
    }
  }

  

}