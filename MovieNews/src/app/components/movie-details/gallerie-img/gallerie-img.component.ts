import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallerie-img',
  templateUrl: './gallerie-img.component.html',
  styleUrls: ['./gallerie-img.component.css']
})
export class GallerieImgComponent {
  @Input() images: any;
  displayImgGallerie: boolean = false;
  responsiveOptions: any
}
