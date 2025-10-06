import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '¡Hola Mundo con Angular 20!';
  mensaje = 'Mi primera aplicación Angular';
  contador = 0;

  cambiarMensaje() {
    this.mensaje = this.mensaje === 'Mi primera aplicación Angular'
    ? '¡Angular 20 es genial!'
    : 'Mi primera aplicación Angular'
    this.contador++;
  }
}
