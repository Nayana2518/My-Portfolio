import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  lightboxImg: string | null = null;
  lightboxAlt: string = '';

  openLightbox(src: string, alt: string) {
    this.lightboxImg = src;
    this.lightboxAlt = alt;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxImg = null;
    document.body.style.overflow = '';
  }
}