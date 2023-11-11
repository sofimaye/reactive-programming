import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>
    <input type="text" [(ngModel)]="name" /><br/>
    <input type="number" [(ngModel)]="age" />
    <p>Текст: {{ name }}</p>
    <table border="1">
      <tr><td [attr.colspan]="colspan">One-Two</td></tr>
      <tr><td>Three</td><td>Four</td></tr>
      <tr><td>Five</td><td>Six</td></tr>
    </table>
    <p>Кількість кліків: {{ count }}</p>
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
}
