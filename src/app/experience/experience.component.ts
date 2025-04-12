import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileService} from '../services/data.service';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  Experience: any[] = [];

  private fileService = inject(FileService)


  isContentVisible = false;

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }

  ngOnInit(): void {
    this.fileService.getExperience()
      .subscribe({
        next: (data) => {
          this.Experience = data.experiences || [];
        },
        error: (err) => {
          console.error('Помилка:', err);
        }
      });
  }

}
