import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { fadeInUp } from '../../animations';
import globalNewsData from '../../data/global-news.json';

interface Article {
  id: string;
  category: string;
  title: string;
  image: string;
  summary: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-section-global-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section-global-news.component.html',
  styleUrls: ['./section-global-news.component.scss'],
  animations: [fadeInUp]
})
export class SectionGlobalNewsComponent implements OnInit {
  article: Article | null = null;

  ngOnInit() {
    this.article = globalNewsData[0] as Article;
  }
}





