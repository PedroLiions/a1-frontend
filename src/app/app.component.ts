import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          Converter binário para decimal
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="binary" class="form-label">Binário</label>
            <input [(ngModel)]="binario" type="text" class="form-control" id="binary" placeholder="10110101">
          </div>
          <div class="mb-3">
            <label for="decimal" class="form-label">Decimal</label>
            <input disabled [(ngModel)]="decimal" type="text" class="form-control" id="decimal" placeholder="0010112">
          </div>
          <button class="btn btn-primary" (click)="converter()">Converter</button>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  binario!: string;
  decimal!: number;

  converter() {
    let dec = 0;

    for (let c = this.binario.length - 1, i = 0; c >= 0; c--, i++) {
      dec += Number.parseInt(this.binario[c]) * Math.pow(2, i);
    }

    this.decimal = dec;
  }
}
