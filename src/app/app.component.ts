import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>
    <p>Робота: {{ jobTitle }}</p>
    <p>Місто: {{ city }}</p>
  `
})
export class AppComponent {
    name = "Tom";
    age = 25;
    jobTitle = "Інженер";
    city = "Київ";
}
