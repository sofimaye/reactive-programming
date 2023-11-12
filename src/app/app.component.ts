import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <child-comp [userName]="name" [userAge]="age"></child-comp>
        <input type="number" [(ngModel)]="age"/>`,
    styleUrls: [`app.component.css`]
})
export class AppComponent {
    name: string = "Tom";
    age: number = 24;
}