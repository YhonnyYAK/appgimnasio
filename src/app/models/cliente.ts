import { DocumentReference } from '@angular/fire/firestore';
export class Cliente{
    id: string;
    nombre: string;
    apellido: string;
    correo: string;
    fechaNacimiento: Date;
    imgUrl: string;
    telefono: number;
    dni: string;
    ref: DocumentReference;
    visible: boolean;
    constructor(){

    }
}