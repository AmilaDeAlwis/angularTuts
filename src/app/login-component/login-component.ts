import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { throwError } from 'rxjs';

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

  // DATA TYPES IN TYPESCRIPT
  name: string = 'John Doe'; // 1. String
  age: number = 30; // 2. Number
  isLoggedIn: boolean = false; // 3. Boolean
  hobbies: string[] = ['Reading', 'Traveling', 'Cooking']; // 4. Array
  user: [string, number] = ['John Doe', 30]; // 5. Tuple
  randomValue: any = 'Hello'; // 6. Any

  logMessage(): void {
    console.log('This is a log message.'); // 7. Void
  }

  nullableValue: string | null = null; // 8. Null
  undefinedValue: string | undefined = undefined; // 9. Undefined

  throwError(): never {
    throw new Error('This is an error!'); // 10. Never
  }

  ///////////////////////////////////////////////////

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

  displayWelcomeMessage() {
    console.log(`Welcome ${this.name}!`);
  }

}
