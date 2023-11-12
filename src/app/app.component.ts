import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div [style.background-color]="boxColor" 
         [style.width.px]="boxSize" 
         [style.height.px]="boxSize">
      Dynamic Style Box
    </div>
    <div [ngStyle]="boxStyles">
      Dynamic ngStyle Box
    </div>
    <button (click)="changeColor()">Change Color</button>
    <button (click)="changeSize()">Change Size</button>
  `,
    styles: [`
        div {
            display: inline-block;
            text-align: center;
            line-height: 50px;
            margin: 5px;
            border: 1px solid #ccc;
        }
    `]
})
export class AppComponent {
    boxColor = 'red';
    boxSize = 150; // size in pixels
    boxStyles = {
        'background-color': 'green',
        'width.px': 200,
        'height.px': 200,
        'line-height.px': 100
    };

    changeColor(): void {
        this.boxColor = this.boxColor === 'red' ? 'blue' : 'red';
        this.boxStyles['background-color'] = this.boxStyles['background-color'] === 'green' ? 'purple' : 'green';
    }

    changeSize(): void {
        this.boxSize = this.boxSize === 150 ? 300 : 150;
        const newSize = this.boxStyles['width.px'] === 200 ? 300 : 200;
        this.boxStyles['width.px'] = newSize;
        this.boxStyles['height.px'] = newSize;
        this.boxStyles['line-height.px'] = newSize;
    }
}
