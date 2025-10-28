import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { fadeInUp } from '../../animations';
import updatesData from '../../data/updates.json';

interface Update {
  id: string;
  category: string;
  title: string;
  icon: string;
  summary: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-section-updates',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section-updates.component.html',
  styleUrls: ['./section-updates.component.scss'],
  animations: [fadeInUp]
})
export class SectionUpdatesComponent implements OnInit {
  updates: Update[] = [];

  ngOnInit() {
    this.updates = updatesData as Update[];
  }
}





