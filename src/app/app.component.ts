import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <p>Ім'я: {{name}}</p>
    <p>Вік: {{age}}</p>
    <input type="text" [value]="name" (input)="onNameChange($event)" /><br/>
    <input type="text" [value]="age" (input)="onAgeChange($event)" />
    <p [textContent]="name"></p>
    <table border="1">
      <tr><td [attr.colspan]="colspan">One-Two</td></tr>
      <tr><td>Three</td><td>Four</td></tr>
      <tr><td>Five</td><td>Six</td></tr>
    </table>
    <p>Кількість кліків: {{count}}</p>
    <button (click)="increase()">Click</button>
  `
})
export class AppComponent {
    name = 'Tom';
    age = 25;
    colspan = 2;
    count = 0;

    increase(): void {
        this.count++;
    }

    onNameChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.name = input.value;
    }

    onAgeChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.age = +input.value; // The '+' operator converts the string to a number
    }

}
