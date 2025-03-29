import {Component, OnInit} from '@angular/core';
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

  constructor(private fileService: FileService) {
  }

  isContentVisible = false;

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }

  ngOnInit(): void {
    this.fileService.getExperience().subscribe(
      (data) => {
        this.Experience = data.experiences || [];
      },
      (error) => {
        console.error('Помилка', error);
      }
    );
  }
}
