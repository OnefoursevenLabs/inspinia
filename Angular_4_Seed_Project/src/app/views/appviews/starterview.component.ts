import {
  Component,
  OnDestroy,
  OnInit,
  Input
} from '@angular/core';
import {
  DrawInteractionComponent
} from 'ngx-openlayers';

export class CollectorRange {
  name: string;
  range: Number;
}

@Component({
  selector: 'starter',
  templateUrl: 'starter.template.html',
})
export class StarterViewComponent implements OnDestroy, OnInit {
  public zoom = 15;
  public opacity = 1.0;
  public width = 5;

  @Input() cRanges: CollectorRange[] = [];

  public nav: any;

  public constructor() {
    this.nav = document.querySelector('nav.navbar');
    let row = <CollectorRange> { name: 'carlos_00', range: 10 };

    this.cRanges.push(row);
    this.cRanges.push( <CollectorRange> { name: 'carlos_01', range: 10 });
  }

  public ngOnInit(): any {
    this.nav.className += ' white-bg';
  }


  public ngOnDestroy(): any {
    this.nav.classList.remove('white-bg');
  }

  addCollector($event) {
    let row = <CollectorRange> { name: '', range: 100 };
    this.cRanges.push(row);
  }


  increaseZoom() {
    this.zoom = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  increaseOpacity() {
    this.opacity = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }
}
