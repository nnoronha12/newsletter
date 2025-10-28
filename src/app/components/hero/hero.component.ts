import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [fadeInUp]
})
export class HeroComponent {
  scrollToContent() {
    const element = document.getElementById('global-news');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}





