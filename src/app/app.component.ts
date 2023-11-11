import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <input type="text" [value]="name" />
    <input type="text" [value]="age" />
    <input type="text" [value]="jobTitle" />
    <input type="text" [value]="city" />
  `
})
export class AppComponent {
    name = "Tom";
    age = 25;
    jobTitle = "Инженер";
    city = "Киев";
}

