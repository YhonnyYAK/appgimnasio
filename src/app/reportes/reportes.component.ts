import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Todavía no lo usamos

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  clientes: any[] = new Array<any>();
  constructor(private db: AngularFirestore) {   }

  ngOnInit(): void {

    this.clientes.length = 0;
    this.db.collection('clientes').get().subscribe((resultado) => {
      console.log(resultado.docs);

      resultado.docs.forEach((item) => {

        let cliente = item.data();
        cliente.id = item.id;
        cliente.ref = item.ref;
        this.clientes.push(cliente);
      });
    });
  }

  public downloadPDF(): void {

    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');    
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_Clientes.pdf`);
    });
  }

}
