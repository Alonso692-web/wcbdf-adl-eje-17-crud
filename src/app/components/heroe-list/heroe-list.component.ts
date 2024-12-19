import { Component, inject } from '@angular/core';
import { HeroeService } from '../../services/heroe-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroe-list',
  imports: [FormsModule],
  templateUrl: './heroe-list.component.html',
  styleUrl: './heroe-list.component.css'
})
export class HeroeListComponent {
  listadoHeroes: any[] = [];
  heroeService = inject(HeroeService);
  nombreHeroe: string = ''
  poderHeroe: string = ''
  universoHeroe: string = ''
  debilidadHeroe: string = ''

  constructor() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.listadoHeroes = data.heroes
      console.info(data.heroes,
        // data.data,
        // data.links,
        // data.msg
      )

    })
  }

  CargarHeroes() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.listadoHeroes = data.heroes
    },
      (error) => {
        this.listadoHeroes = []
      }
    )
  }

  EliminarHeroe(id: number) {
    this.heroeService.deleteHeroe(id).subscribe((data) => {
      if (data.estado == 1) {
        this.CargarHeroes()
      } else {
        alert(data.msg)
      }
    },
      (error) => {
        console.info("Error al cargar heroes" + error)
      })
  }

  CrearHeroe() {
    let heroe = {
      id: 0,
      nombre: this.nombreHeroe,
      poder: this.poderHeroe,
      universo: this.universoHeroe,
      debilidad: this.debilidadHeroe,
      urlImagen: 'https://www.google.images.com/imagenesHeroes'
    }
    if (heroe.nombre == "" || heroe.poder == "" || heroe.universo == "" || heroe.debilidad == "") {
      alert("Ingrese todos los campos por favor")
      return
    }
    this.heroeService.postHeroe(heroe).subscribe((data) => {
      console.info(data)
      alert("Heroe creado exitosamente")
      this.CargarHeroes()
    })
  }

}
