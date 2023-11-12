import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <child-comp [name]="name"></child-comp>
        <input type="text" [(ngModel)]="name"/>`,
    styleUrls: [`app.component.css`]
})
export class AppComponent {
    name: string = "Tom";
}