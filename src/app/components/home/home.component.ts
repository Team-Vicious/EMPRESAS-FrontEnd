import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa';
import { Noticia } from 'src/app/models/noticia';
import { EmpresaService } from 'src/app/services/empresa.service';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista: Empresa[] = [];
  empresa: Empresa;
  listaNoticia: Noticia[];
  cadanoticia: Noticia;

  constructor(
    private services: EmpresaService,
    private serviceNoticia: NoticiaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarEmpresas();
    

  }

  

  private listarEmpresas(){
    this.services.listar().subscribe(empresas => {
      this.lista = empresas;
    });

    
    let id= +this.route.snapshot.paramMap.get('id');

    this.services.ver(id).subscribe(empresa => this.empresa = empresa);

    this.serviceNoticia.verNoticiasPorId(id).subscribe(noticias => this.listaNoticia = noticias);

  }

 
  

}
