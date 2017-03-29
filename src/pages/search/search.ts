import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {
        'title': 'Margarita',
        'icon': 'flower',
        'description': 'Planta vivaz de tallos herbáceos de la familia de las compuestas. Hojas basales en roseta y capítulos florales de color amarillo con la lígulas blancas situados al final de un largo tallo floríferas. Florece principios de primavera - principios de invierno. Principalmente, florece en mayo, aunque su período de floración puede ser muy amplio. Incluso algunas flores pueden nacer en medio de inviernos suaves.. ',
        'color': '#E63135',
        'image': 'assets/img/margarita.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#0CA9EA',
        'colorHume3': '#0CA9EA',
        'colorHume4': '#000000',
        'colorHume5': '#000000',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#FFD439',
        'colorLumi3': '#000000',
        'colorLumi4': '#000000',
        'colorLumi5': '#000000'

      },
      {
        'title': 'Tulipan',
        'icon': 'flower',
        'description': 'Es un género de plantas perennes y bulbosas perteneciente a la familia Liliaceae, en el que se incluyen los populares tulipanes, nombre común con el que se designa a todas las especies, híbridos y cultivares de este género. Tulipa contiene aproximadamente 150 especies e innumerables cantidades de híbridos y cultivares conseguidos a través de mejoramiento genético que los floricultores fueron realizando desde el siglo XVI.',
        'color': '#0CA9EA',
        'image': 'assets/img/tulipan.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#000000',
        'colorHume3': '#000000',
        'colorHume4': '#000000',
        'colorHume5': '#000000',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#FFD439',
        'colorLumi3': '#FFD439',
        'colorLumi4': '#FFD439',
        'colorLumi5': '#000000'
      },
      {
        'title': 'Rosa',
        'icon': 'flower',
        'description': 'está compuesto por un conocido grupo de arbustos espinosos y floridos representantes principales de la familia de las rosáceas. Se denomina rosa a la flor de los miembros de este género y rosal a la planta.El número de especies ronda las 100, la mayoría originarias de Asia y un reducido número nativas de Europa, Norteamérica y África noroccidental. Tanto especies como cultivares e híbridos se cultivan como ornamentales por la belleza y fragancia de su flor; pero también para la extracción de aceite esencial, utilizado en perfumería y cosmética, usos medicinales (fitoterapia) y gastronómicos.',
        'color': '#F46529',
        'image': 'assets/img/rosa.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#0CA9EA',
        'colorHume3': '#0CA9EA',
        'colorHume4': '#0CA9EA',
        'colorHume5': '#000000',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#FFD439',
        'colorLumi3': '#000000',
        'colorLumi4': '#000000',
        'colorLumi5': '#000000'
      },
      {
        'title': 'Cannabis',
        'icon': 'flower',
        'description': 'Es una especie herbácea de la familia Cannabaceae, con propiedades psicoactivas. Es una planta anual originaria de las cordilleras delHimalaya, Asia. Los seres humanos han cultivado esta planta en el transcurso de la historia como fuente de fibra textil, aceite de semillas y alimento (generalmente, con variedades de bajo contenido en THC, llamadas cáñamo).',
        'color': '#FFD439',
        'image': 'assets/img/cannabis.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#000000',
        'colorHume3': '#000000',
        'colorHume4': '#000000',
        'colorHume5': '#000000',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#FFD439',
        'colorLumi3': '#FFD439',
        'colorLumi4': '#FFD439',
        'colorLumi5': '#000000'
      },
      {
        'title': 'Azucenas ',
        'icon': 'flower',
        'description': 'Las azucenas son generalmente hierbas de tallos frondosos que forman bulbos subterráneos, escamosos o desnudos, los cuales utilizan para sobrevivir al invierno. En algunas especies norteamericanas la base del bulbo se ha desarrollado en rizomas sobre los que se encuentran numerosos bulbillos pequeños. Otras desarrollan estolones. La mayoría de los bulbos están profundamente enterrados, sin embargo unos cuantos se forman cerca de la superficie del suelo. Muchas especies desarrollan raíces en el tallo, con ellas, el bulbo crece de forma natural a cierta profundidad y cada año el nuevo tallo, a medida que emerge del suelo, emite raíces adventicias por encima del bulbo. Éstas son adicionales a las raíces basales.',
        'color': '#CE6296',
        'image': 'assets/img/lirios.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#0CA9EA',
        'colorHume3': '#0CA9EA',
        'colorHume4': '#0CA9EA',
        'colorHume5': '#000000',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#FFD439',
        'colorLumi3': '#FFD439',
        'colorLumi4': '#000000',
        'colorLumi5': '#000000'
      },
      {
        'title': 'Claveles',
        'icon': 'flower',
        'description': 'El clavel es una planta herbácea perteneciente a la familia de las Caryophyllaceae, difundida en las regiones mediterráneas.1 Es espontánea en la flora de la península ibérica. En su forma típica es una planta cespitosa,1 con numerosos vástagos de hasta 1 m de altura. Sus hojas son lineales, angostas, opuestas y envainadoras, más anchas las basales que las caulinares. Cada tallo forma una flor terminal.1 Sus flores son vistosas, pedunculadas en panícula o cima laxa, a veces solitarias, de bordes más o menos dentados.',
        'color': '#78BD43',
        'image': 'assets/img/claveles.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#0CA9EA',
        'colorHume3': '#000000',
        'colorHume4': '#000000',
        'colorHume5': '#000000',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#FFD439',
        'colorLumi3': '#FFD439',
        'colorLumi4': '#FFD439',
        'colorLumi5': '#000000'
      },
      {
        'title': 'Gerberas',
        'icon': 'flower',
        'description': 'Son plantas perennes y rizomatosas con hojas en roseta basal, de limbo muy variable: oblanceolado, oblongo, obovado, ovado o subcircular, papiráceo o correoso, glabro o peludo, con márgenes aserrados, dentados, pinnatilobados, pinnatifidos o pinnatisectos. Generalmente son de tallo único, más raramente ramificado, con o sin brácteas. Las inflorescencias son capítulos terminales heterogamos, con involucro de obcónico a campanulado con brácteas multiseriadas imbricadas; el receptáculo es plano, alveolado y glabro. ',
        'color': '#3575AC',
        'image': 'assets/img/gerberas.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#000000',
        'colorHume3': '#000000',
        'colorHume4': '#000000',
        'colorHume5': '#000000',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#FFD439',
        'colorLumi3': '#000000',
        'colorLumi4': '#000000',
        'colorLumi5': '#000000'
      },
      {
        'title': 'Iris',
        'icon': 'flower',
        'description': 'Es un género de plantas bulbosas de la familia Iridaceae con vistosas flores, cuyo nombre deriva del latín arco iris, refiriéndose a la extensa variedad de colores florales que poseen sus muchas especies y cultivares de jardín. Además de nombre botánico del género, iris es comúnmente usado para referirse a todas las especies, así como a otros varios géneros estrechamente emparentados y a una subdivisión dentro del género.',
        'color': '#412159',
        'image': 'assets/img/iris.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#0CA9EA',
        'colorHume3': '#0CA9EA',
        'colorHume4': '#0CA9EA',
        'colorHume5': '#000000',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#000000',
        'colorLumi3': '#000000',
        'colorLumi4': '#000000',
        'colorLumi5': '#000000'

      },
      {
        'title': 'Anémonas',
        'icon': 'flower',
        'description': 'Estas plantas son hierbas perennes con un tallo tuberoso subterráneo muy extenso. Presentan hojas más o menos profundamente hendidas. Las flores se sitúan en los extremos más pequeños de tallos alargados, con una, o varias de color blanco, rojo, azúl, o raramente amarillo. Las flores presentan un involucro con tres hojitas más pequeñas debajo y de arriba de cada flor.Los frutos presentan frecuentemente unos estilos largos y peludos (vilanos), que les permite su distribución por el viento.Y por areas rodeadas de la misma flor.',
        'color': '#000',
        'image': 'assets/img/anemona.jpg',
        'iconCuidado': 'water',
        'colorHume1': '#0CA9EA',
        'colorHume2': '#0CA9EA',
        'colorHume3': '#0CA9EA',
        'colorHume4': '#0CA9EA',
        'colorHume5': '#0CA9EA',
        'iconCuidado2': 'sunny',
        'colorLumi1': '#FFD439',
        'colorLumi2': '#FFD439',
        'colorLumi3': '#FFD439',
        'colorLumi4': '#000000',
        'colorLumi5': '#000000'
      },
    ]

  }

  openNavDetailsPage(item) {
    this.navCtrl.push(PlantDetailPage, { item: item });
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    //

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}

@Component({
  templateUrl: 'plant_detail.html',
})
export class PlantDetailPage {
  item:any;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}
