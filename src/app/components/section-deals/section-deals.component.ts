import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { fadeInUp } from '../../animations';
import dealsData from '../../data/deals.json';

interface Deal {
  id: string;
  category: string;
  title: string;
  image: string;
  summary: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-section-deals',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section-deals.component.html',
  styleUrls: ['./section-deals.component.scss'],
  animations: [fadeInUp]
})
export class SectionDealsComponent implements OnInit {
  deal: Deal | null = null;

  ngOnInit() {
    this.deal = dealsData[0] as Deal;
  }
}





