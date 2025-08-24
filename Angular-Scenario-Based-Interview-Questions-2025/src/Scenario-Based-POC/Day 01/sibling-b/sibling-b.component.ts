// sibling-a.component.ts
import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-sibling-a',
  template: `<button (click)="sendData()">Send Data</button>`
})
export class SiblingBComponent {
  constructor(private sharedService: SharedDataService) {}

  sendData() {
    this.sharedService.setData({ message: 'Hello from A!' });
  }
}
