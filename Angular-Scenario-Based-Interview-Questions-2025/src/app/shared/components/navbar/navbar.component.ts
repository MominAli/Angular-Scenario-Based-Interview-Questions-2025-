import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common'; // ✅ Required for *ngFor

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  days = Array.from({ length: 20 }, (_, i) => i + 1);
}
