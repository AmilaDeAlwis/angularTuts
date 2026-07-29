import { Component } from '@angular/core';
import { LoginComponent } from './login-component/login-component';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Title: string = 'Angular Tuts';
}
