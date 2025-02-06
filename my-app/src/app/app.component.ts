import {  CurrencyPipe, DatePipe, LowerCasePipe, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, UpperCasePipe } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alrevezPipe',
  standalone: true,
})
class MiPipe implements PipeTransform {
  transform(value: string) {
    return value.split('').reverse().join('');
  }
}

@Pipe({
  name: 'ofucar',
  standalone: true,
})
class OfuscarPipe implements PipeTransform {
  transform(value: string) {
    return `${value.substring(0,3)}***`
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,
    MiPipe,OfuscarPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instagram';
  nombre: string = "dIeGo";
  imagen = `https://robohash.org/${this.nombre}`;
  colorez: string[] = ['rojo', 'verde', 'azul', 'amarillo'];
  hayNotificacion: boolean = true;
  colorBackground: string = 'purple';
  userRole: string = 'admin';
  today: Date = new Date();
  sueldo: number = 1234234289.35563;
}
