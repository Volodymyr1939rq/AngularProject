import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileService} from '../services/data.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  AboutMe: any = {};

  constructor(private fileService: FileService) {
  }

  isVisibleContent: boolean = false;

  toggleContent(): void {
    this.isVisibleContent = !this.isVisibleContent;
  }

  ngOnInit(): void {
    this.fileService.getExperience().subscribe(
      (data) => {
        this.AboutMe = data.about || {};
      },
      (error) => {
        console.error('Помилка', error);
      }
    )
  }
}
