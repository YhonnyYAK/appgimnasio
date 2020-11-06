import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    
  }

  /* ini - grafico 1 */
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Cantidad de Clientes por Planes de Suscripción',
    },
    subtitle: {
      text: 'Sistema Web: MasterGYM',
    },
    yAxis: {
      title: {
        text: 'Numeros de Clientes',
      },
    },
    xAxis: {
      accessibility: {
        rangeDescription: '',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2018,
      },
    },
    series: [
      {
        name: 'Anual',
        type: 'line',
        data: [150, 120, 60],
      },
      {
        name: 'Mensual',
        type: 'line',
        data: [180, 130, 75],
      },
      {
        name: 'Quincenal',
        type: 'line',
        data: [130, 200, 40],
      },
      {
        name: 'Semanal',
        type: 'line',
        data: [null, null, 55],
      },
      {
        name: 'Otros',
        type: 'line',
        data: [100, 145, 20],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  /* fin - grafico 1 */

  /* ini- grafico 2*/

 /* Highcharts2: typeof Highcharts = Highcharts;
  chartOption2 = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Chart rotation demo'
    },
    subtitle: {
        text: 'Test options by dragging the sliders below'
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        name: 'Installation',
        type: 'line',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]

});
*/

  
 
}
