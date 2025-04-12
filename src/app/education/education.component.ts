import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileService} from '../services/data.service';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  Education: any[] = [];
  isContentVisible: boolean = false;

  private fileService = inject(FileService)

  ngOnInit(): void {
    this.fileService.getExperience()

      .subscribe({
        next: (data) => {
          this.Education = data.education || [];
        },
        error: (err) => {
          console.error('Помилка', err);
        }
      });
  }

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
}
}
