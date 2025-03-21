import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileService} from '../services/data.service';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {
  References: any[] = [];

  constructor(private fileService: FileService) {
  }

  isContentVisible: boolean = false;

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }

  ngOnInit(): void {
    this.fileService.getExperience().subscribe(
      (data) => {
        this.References = data.references || [];
      },
      (error) => {
        console.error('Помилка', error);
  }
    )
}
}
