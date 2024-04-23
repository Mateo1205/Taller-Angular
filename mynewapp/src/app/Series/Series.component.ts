import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './Serie.service';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css'],
  
})
export class SeriesComponent implements OnInit {

  Series: Array<Serie> = [];
  averageSeasons: number = 0;
  constructor(private SerieService: SerieService) { }

  getCourseList() {
    this.SerieService.getCourses().subscribe(Series => {
      this.Series = Series;
      
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons() {
    let totalSeasons = this.Series.reduce(
      (accumulator, currentSerie) => accumulator + currentSerie.seasons,
      0
    );
    this.averageSeasons = totalSeasons / this.Series.length;
  }

  ngOnInit() {
     this.getCourseList();
  }

}
