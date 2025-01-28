import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  fecha = new FormControl('');
  imageData: any;
  imageDate: any;

  constructor(private nasaService: NasaService) { }
  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data) => {
      this.imageData = data;
    });
  }
  MostrarFoto() {

    this.nasaService.getImagesByDate(this.fecha.value).subscribe((data) => {
      this.imageDate = data;
    });

  }
}