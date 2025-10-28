import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { SectionGlobalNewsComponent } from '../section-global-news/section-global-news.component';
import { SectionUpdatesComponent } from '../section-updates/section-updates.component';
import { SectionDealsComponent } from '../section-deals/section-deals.component';
import { FooterComponent } from '../footer/footer.component';

import globalNewsData from '../../data/global-news.json';
import updatesData from '../../data/updates.json';
import dealsData from '../../data/deals.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    SectionGlobalNewsComponent,
    SectionUpdatesComponent,
    SectionDealsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sections = [
    {
      id: 'global-news',
      icon: '🌍',
      title: 'Global AI News',
      count: 0,
      articles: globalNewsData
    },
    {
      id: 'updates',
      icon: '🚀',
      title: 'Solutions+ Updates',
      count: 0,
      articles: updatesData
    },
    {
      id: 'deals',
      icon: '🤝',
      title: 'Deals & Partnerships',
      count: 0,
      articles: dealsData
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Set article counts
    this.sections.forEach(section => {
      section.count = section.articles.length;
    });
  }

  navigateToSection(section: any) {
    // If there are articles in this section, navigate to the first one
    if (section.articles && section.articles.length > 0) {
      const firstArticle = section.articles[0];
      this.router.navigate(['/article', firstArticle.id]);
    }
  }
}





