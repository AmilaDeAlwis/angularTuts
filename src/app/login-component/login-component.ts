import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  componentName: string = 'LoginComponent';

  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled: boolean = false;

  ariaLabel: string = 'Login Button';
}
