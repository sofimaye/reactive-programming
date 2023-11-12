import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <child-comp [userName]="name" [userAge]="age" (onChanged)="onChanged($event)"></child-comp>
    `,
    styleUrls: [`app.component.css`]
})

export class AppComponent {
    name: string = "Tom";
    age: number = 24;

    onChanged(increased: any) {
        increased == true ? this.age++ : this.age--;
    }
}