import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>
    <input type="text" [value]="name" /><br/>
    <input type="text" [value]="age" />
    <p>Робота: {{ jobTitle }}</p>
    <p>Місто: {{ city }}</p>
    <table border="1">
      <tr><td [attr.colspan]="colspan">One-Two</td></tr>
      <tr><td>Three</td><td>Four</td></tr>
      <tr><td>Five</td><td>Six</td></tr>
    </table>
  `
})
export class AppComponent {
    name = 'Tom';
    age = 25;
    jobTitle = 'Інженер';
    city = 'Київ';
    colspan = 2;
}
