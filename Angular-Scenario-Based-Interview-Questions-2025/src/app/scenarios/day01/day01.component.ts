import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // ✅ Required for *ngFor

@Component({
  selector: 'app-day01',
  standalone: true,
  imports: [NgFor],
  templateUrl: './day01.component.html',
  styles:`.day-content {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.blockquote {
  font-style: italic;
  border-left: 4px solid #ccc;
  padding-left: 1rem;
}
`
})
export class Day01Component {
   readonly title = 'Day 01: A component is updating slowly when data changes — how would you diagnose and fix it?';
}
