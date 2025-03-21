import {AfterViewInit, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import Chart, {ChartItem} from 'chart.js/auto';

@Component({
  selector: 'app-languages',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements AfterViewInit {
languages=[
  {name:'English',percentage:95},
  {name:'German',percentage:60},
  {name:'Spanish',percentage:45}
];

  ngAfterViewInit(): void {
    this.languages.forEach(language => {
      const canvas = document.getElementById(language.name + 'Chart') as ChartItem;
      if (canvas) {
        this.createDoughnutChart(canvas, language.percentage);
      }
    });
  }

  createDoughnutChart(ctx: ChartItem, value: number): void {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          data: [value, value - 100],
          backgroundColor: ['#00a99b', '#e0e0e0'],
          borderWidth: 5,
          borderAlign: 'center',
          hoverBorderColor: ['#4CAF50', '#e0e0e0']
        }]
      },
      options: {
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {display: false},
          tooltip: {enabled: false}
        }
      }
    });
  }
}
