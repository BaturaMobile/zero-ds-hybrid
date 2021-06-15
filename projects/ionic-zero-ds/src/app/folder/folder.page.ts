import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZeroAvatarItem } from '@zero-ds/hybrid/zero-ds-hybrid';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public avatarMax: number = 4;
  public avatarList: ZeroAvatarItem[] = [
    { id: 0, label: 'Batura Mobile', img: 'https://media-exp1.licdn.com/dms/image/C510BAQFIULMTdVtaWA/company-logo_200_200/0?e=2159024400&v=beta&t=I1lUVsB0cjlsjt2HC4AOP74Pr0avQTFEGMoUoD4ZYVo' },
    { id: 5, label: 'Jon Villamil', img: 'https://baturamobile.com/wp-content/uploads/2018/04/jon-villamil-1.jpg' },
    { id: 6, label: 'Gotzon Arcelus', img: 'https://baturamobile.com/wp-content/uploads/2018/04/gotzon-arzelus.jpg' },
    { id: 1, label: 'Nahiara Sánchez', img: 'https://baturamobile.com/wp-content/uploads/2018/04/nahiara-sanchez.jpg' },
    { id: 7, label: 'Endika García', img: 'https://baturamobile.com/wp-content/uploads/2018/04/endika-garcia.jpg' },
    { id: 8, label: 'Pablo Santiago', img: 'https://baturamobile.com/wp-content/uploads/2018/04/pablo-santiago.jpg' },
    { id: 9, label: 'Gabi Seco', img: 'https://baturamobile.com/wp-content/uploads/2018/04/gabriela-seco.jpg' },
    { id: 2, label: 'Unai Correa', img: 'https://baturamobile.com/wp-content/uploads/2018/04/unai-correa.jpg' },
    { id: 3, label: 'Rubén Alonso', img: 'https://baturamobile.com/wp-content/uploads/2018/04/ruben-alonso.jpg' },
    { id: 10, label: 'Iratxe Lafuente', img: 'https://baturamobile.com/wp-content/uploads/2018/04/iratxe-lafuente.jpg' },
    { id: 11, label: 'Koldo Calvo', img: 'https://baturamobile.com/wp-content/uploads/2018/04/koldo-calvo.jpg' },
    { id: 12, label: 'Urtzi Aresti', img: 'https://baturamobile.com/wp-content/uploads/2018/04/urtzi-aresti.jpg' },
    { id: 13, label: 'Aitor Bizkarguenaga', img: 'https://baturamobile.com/wp-content/uploads/2018/04/aitor-bizkarguenaga.jpg' },
    { id: 14, label: 'Igor Ibañez', img: 'https://baturamobile.com/wp-content/uploads/2018/04/igor-ibanez.jpg' },
    { id: 15, label: 'Mikel Lombera', img: 'https://baturamobile.com/wp-content/uploads/2018/04/mikel-lombrera.jpg' },
    { id: 4, label: 'Aingeru Sánchez', img: 'https://baturamobile.com/wp-content/uploads/2018/04/aingeru-palazuelo.jpg' },
    { id: 16, label: 'Guillermo Villar', img: 'https://baturamobile.com/wp-content/uploads/2018/04/guillermo-villar.jpg' },
    { id: 17, label: 'Jon Galletero', img: 'https://baturamobile.com/wp-content/uploads/2018/04/jon-galletero.jpg' },
    { id: 18, label: 'Edu Alonso', img: 'https://baturamobile.com/wp-content/uploads/2018/04/eduardo-alonso.jpg' },
    { id: 19, label: 'Javier Arana', img: 'https://baturamobile.com/wp-content/uploads/2018/04/javier-arana.jpg' },
    { id: 20, label: 'Oliver Vicente', img: 'https://baturamobile.com/wp-content/uploads/2018/04/oliver-vicente.jpg' },
    { id: 21, label: 'Pablo Pozo', img: 'https://baturamobile.com/wp-content/uploads/2020/06/pablopozos.jpg' },
    { id: 22, label: 'Ane Notario', img: 'https://baturamobile.com/wp-content/uploads/2021/05/ane-notario-1x1-1.jpg' },
  ];
  public diametroAvatar: number = 60;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  public avatarClickFn(avatarItem: ZeroAvatarItem) {
    console.log(`Avatar de ${avatarItem.label} con ID=${avatarItem.id} pulsado`);
  }

  public mostrarMas() {
    this.avatarMax++;
  }
  public mostrarMenos() {
    this.avatarMax--;
  }

}
