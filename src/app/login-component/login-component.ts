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
  isDisabled: boolean = true;

  ariaLabel: string = 'Login Button';

  textColor: string = 'blue';
  backgroundColor: string = 'lightgray';

  onButtonClick() {
    console.log('Button clicked!');
  } 

  inputEvent(event: KeyboardEvent) {
    console.log('Input event triggered:', event);
    console.log("Key: ", event.key);
    console.log("Keycode: ", event.keyCode);
  }

  onEnterKey() {
    console.log('Enter key pressed!');
  }

  onKeyPress(input: HTMLInputElement) {
    console.log('Key pressed in input:', input.value);
  }

  inputValue: string = '';
  keyPressed(input: HTMLInputElement) {
    this.inputValue = input.value;
    console.log('Key pressed:', input.value);
  }
}
