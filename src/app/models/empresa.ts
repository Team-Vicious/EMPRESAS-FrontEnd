import { Noticia } from "./noticia";

export class Empresa {
    id!: number;
    denominacion!: string;
    telefono !: string;
    horarioAtencion!: string;
    quienSomos !: string;
    latitud !: string;
    longitud !: string;
    domicilio !: string;
    email !: string;
    noticias!: Noticia[];
}
