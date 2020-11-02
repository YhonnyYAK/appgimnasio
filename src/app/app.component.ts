import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectogym';
  usuario: User;
  cargando: boolean = true;

  constructor(public auth: AngularFireAuth){
    this.auth.user.subscribe((usuario) => {

        this.cargando = false;
        this.usuario = usuario;
    });
  }

  pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

}
