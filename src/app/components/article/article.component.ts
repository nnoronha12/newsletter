import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fadeInUp } from '../../animations';
import globalNewsData from '../../data/global-news.json';
import updatesData from '../../data/updates.json';
import dealsData from '../../data/deals.json';

interface Article {
  id: string;
  category: string;
  title: string;
  image?: string;
  icon?: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [fadeInUp]
})
export class ArticleComponent implements OnInit {
  article: Article | null = null;
  allArticles: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.allArticles = [
      ...globalNewsData as Article[],
      ...updatesData as Article[],
      ...dealsData as Article[]
    ];

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.article = this.allArticles.find(a => a.id === id) || null;
      
      if (!this.article) {
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}





