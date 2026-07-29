import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
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

  inputValue: string = '';

  twoWayInputValue: string = '';

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

  keyPressed(input: HTMLInputElement) {
    this.inputValue = input.value;
    console.log('Key pressed:', input.value);
  }

}
