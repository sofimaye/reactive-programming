import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div [class.is-red]="isRed" [class.is-blue]="isBlue"></div>
    <div [style.background-color]="isRed ? 'red' : 'green'"></div>
    <input type="checkbox" [(ngModel)]="isRed" /> Red
    <input type="checkbox" [(ngModel)]="isBlue" /> Blue
  `,
    styles: [`
    div { width: 50px; height: 50px; border: 1px solid #ccc; margin-bottom: 10px; }
    .is-red { background-color: red; }
    .is-blue { background-color: blue; }
  `]
})
export class AppComponent {
    isRed = false;
    isBlue = false;
}
