import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

/** Interfaz para tipar los objetos de `avatarList[]` */
export interface ZeroAvatarItem {
  /** Imagen que se muestra */
  img: string;
  /** ID que se emitirá al pulsar sobre su respectivo avatar */
  id: number | string;
  /** Label que se muestra en el tooltip y como texto alternativo */
  label?: string;
}

@Component({
  selector: 'zero-avatar-group',
  templateUrl: './zero-avatar-group.component.html',
  styleUrls: ['./zero-avatar-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZeroAvatarGroupComponent {

  /** List of avatar sources. */
  @Input() avatarList: ZeroAvatarItem[] = [];
  /** Number of avatars to show. If surpass this number, show how much items are. */
  @Input() set max(value: number) {
    this._max = (value > 0) ? value : this.avatarList?.length;
  }
  get max() { return this._max };
  /** If TRUE show skeleton */
  @Input() loading: boolean = false;
  /** Diametro de los Avatares: { ancho x alto }. Default = 40px */
  @Input() public diametro?: number = 40;
  @Output() public avatarClick: EventEmitter<ZeroAvatarItem> = new EventEmitter<ZeroAvatarItem>();

  public width: number = 40;
  public height: number = 40;

  private _max: number = 3;

  constructor() {
    // Si el núm. max es menor a 0, mostrar todos los Avatares
    if (this.max <= 0) {
      this.max = this.avatarList?.length;
    }
  }

  public trackByFn(index: number, item: any): number { return item.id; }

  /** Evento que emite el avatar pulsado */
  public avatarClickEmit(avatarItem: ZeroAvatarItem) {
    this.avatarClick.emit(avatarItem/* .id */);
  }

}
