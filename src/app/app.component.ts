import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Solutions+ AI Newsletter';

  ngOnInit() {
    // Hide preloader after app initializes
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 300);
      }
    }, 500);
  }
}

