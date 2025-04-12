import {Component, inject, OnInit} from '@angular/core';
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

  private fileService = inject(FileService);

  /*constructor(private fileService: FileService) {
  }*/

  isContentVisible: boolean = false;

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }

  ngOnInit(): void {
    this.fileService.getExperience()
      .subscribe({
        next: (data) => {
          this.References = data.references || [];
        },
        error: (err) => {
          console.error('Помилка:', err);
        }
      });
  }
}
