import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common'; // ✅ Required for *ngFor

@Component({
  selector: 'app-question',
  standalone: true,
  imports:[NgFor],
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let q of questions" (click)="select.emit(q)">
        ❓ {{ q }}
      </li>
    </ul>
  `
})
export class QuestionComponent {
  @Output() select = new EventEmitter<string>();
  questions = ['What is Angular?', 'What is SSR?', 'What is Change Detection?'];
}
