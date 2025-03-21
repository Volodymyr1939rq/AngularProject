import {Component, OnInit} from '@angular/core';
import{CommonModule} from '@angular/common';
import {FileService} from '../services/data.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  Education: any[] = [];
  isContentVisible: boolean = false;

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
    this.fileService.getExperience().subscribe(
      (data) => {
        this.Education = data.education || [];
      },
      (error) => {
        console.error('Помилка', error);
      }
    );
  }

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
}
}
