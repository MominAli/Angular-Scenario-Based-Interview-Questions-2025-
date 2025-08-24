import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedDataService {
  private sharedValue$ = new BehaviorSubject<string>('Initial value');
  readonly data$ = this.sharedValue$.asObservable();

  updateData(newValue: string) {
    this.sharedValue$.next(newValue);
  }
}
