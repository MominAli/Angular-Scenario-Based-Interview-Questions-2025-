import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports:[NgFor,NgIf],
  template: `
    <div *ngIf="question; else noSelection">
      <h5>Answer for: {{ question }}</h5>
      <p>{{ getAnswer(question) }}</p>
    </div>

    <ng-template #noSelection>
      <p class="text-muted">Please select a question to view the answer.</p>
    </ng-template>
  `
})
export class AnswerComponent {
  @Input() question: string | null = null;

  getAnswer(q: string): string {
    const answers: Record<string, string> = {
      'What is Angular?': 'A framework for building modular web apps.',
      'What is SSR?': 'Server-side rendering for faster initial load.',
      'What is Change Detection?': 'Angular’s mechanism to track data changes.'
    };
    return answers[q] || 'Answer not found.';
  }
}
