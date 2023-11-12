import {Input, Component} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
        <ng-content></ng-content>
        <p>Привіт {{name}}</p>
        <p>Ім’я користувача: {{userName}}</p>
        <p>Вік користувача: {{userAge}}</p>`,

    styles: [`
        p{color: red}
        p{font-size:15px}
    `]
})

export class ChildComponent {
    name: string = "Тарас";
    @Input() userName: string = "";
    @Input() userAge: number = 0;
}