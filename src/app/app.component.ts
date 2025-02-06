import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { RouterOutlet } from '@angular/router';
  
  @Component({
    selector: 'app-root',
    imports: [RouterOutlet, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    title = 'Lista de Música';
  
    //Propiedades
    cancion = {
      id: 0, 
      nombre: '',
      artista: '',
      album: '',
      calificacion: 0
    }
  
    listaMusica = [
      {id: 1, nombre: 'Bohemian Rhapsody', artista: 'Queen', album: 'A Night at the Opera', calificacion: 3},
      {id: 2, nombre: 'High Hopes - Live', artista: 'Pink Floyd', album: 'Pulse (Live)', calificacion: 5},
      {id: 3, nombre: 'Hotel California', artista: 'Eagles', album: 'Hotel California', calificacion: 4},
      {id: 4, nombre: 'Seven Nation Army', artista: 'The White Stripes', album: 'Elephant', calificacion: 1},
      {id: 5, nombre: 'Lovesong', artista: 'The Cure', album: 'Disintegration', calificacion: 4},
    ];
  
    //Función para agregar una canción al arreglo
    agregarCancion(){
      if(this.cancion.id == 0){
        alert('El ID de la canción no puede ser CERO')
        return;
      }
      //Verificar que el ID no exista
      for(let i = 0; i < this.listaMusica.length; i++){
        if(this.cancion.id == this.listaMusica[i].id){
          alert('El ID ya existe');
          return;
        }
      }
  
      //Validar que la calificación esté entre 1 y 5
      if(this.cancion.calificacion < 1 || this.cancion.calificacion > 5){
        alert('La calificación debe estar entre 1 y 5');
        return;
      }
  
      //Damos de alta la canción
      this.listaMusica.push({
        id: this.cancion.id,
        nombre: this.cancion.nombre,
        artista: this.cancion.artista,
        album: this.cancion.album,
        calificacion: this.cancion.calificacion
      });
  
      //Resetear el objeto canción
      this.cancion.id = 0;
      this.cancion.nombre = '';
      this.cancion.artista = '';
      this.cancion.album = '';
      this.cancion.calificacion = 0;
    }
  
    //Función para seleccionar una canción de la tabla
    seleccionarCancion(cancionSeleccionada: {id:number, nombre:string, artista:string, album:string, calificacion:number}){
      this.cancion.id = cancionSeleccionada.id;
      this.cancion.nombre = cancionSeleccionada.nombre;
      this.cancion.artista = cancionSeleccionada.artista;
      this.cancion.album = cancionSeleccionada.album;
      this.cancion.calificacion = cancionSeleccionada.calificacion;
    }
  
    //Función para modificar una canción existente
    modificarCancion(){
      for(let i = 0; i < this.listaMusica.length; i++){
        if(this.cancion.id == this.listaMusica[i].id){
          this.listaMusica[i].nombre = this.cancion.nombre;
          this.listaMusica[i].artista = this.cancion.artista;
          this.listaMusica[i].album = this.cancion.album;
          this.listaMusica[i].calificacion = this.cancion.calificacion;
  
          this.cancion.id = 0;
          this.cancion.nombre = '';
          this.cancion.artista = '';
          this.cancion.album = '';
          this.cancion.calificacion = 0;
  
          return;
        }
      }
      alert('No existe ese ID');
    }
  
    //Función para eliminar una canción de la tabla
    eliminarCancion(id:number){
      for(let i = 0; i < this.listaMusica.length; i++){
        if(id == this.listaMusica[i].id){
          this.listaMusica.splice(i, 1);
          return;
        }
      }
    }
  }