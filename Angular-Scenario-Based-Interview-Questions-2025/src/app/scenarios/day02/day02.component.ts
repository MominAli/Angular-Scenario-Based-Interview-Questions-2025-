import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

@Component({
  selector: 'app-day02',
  standalone: true,
imports: [QuestionComponent, AnswerComponent],
  templateUrl: './day02.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
   styles:`.example-section {
  animation: fadeIn 0.6s ease-in;
}

.section-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #343a40;
}

.interaction-card {
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.interaction-card:hover {
  transform: translateY(-2px);
}

.card-header {
  font-weight: 500;
  font-size: 1rem;
}

.card-body {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  color: #212529;
}
`
})
export class Day02Component {
   readonly title = 'Day 02: Share Data Between two Components?';

   selectedQuestion: string | null = null;

  onQuestionSelected(question: string) {
    this.selectedQuestion = question;
  }
}
