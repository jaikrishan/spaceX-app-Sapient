import { Component, OnInit } from '@angular/core';
import {SpacexService} from '../spacex.service';
import {SpaceX} from '../../app/Models/spacex-data';
@Component({
  selector: 'app-spacex-details',
  templateUrl: './spacex-details.component.html',
  styleUrls: ['./spacex-details.component.scss']
})
export class SpacexDetailsComponent implements OnInit {
   spaceResults: any = [];
   spacelaunchYear = [ 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 
   2017, 2018, 2019, 2020];
   spaceLaunchCheck = [true, false];
   spaceLandingCheck = [true, false];
   spaceYear: number;
   spaceLaunch: boolean;
   spaceLanding: boolean;

  constructor(private spacexService: SpacexService) { }

  ngOnInit() {
    this.spacexService.getSpaceResultStart().subscribe({
      next: spacex => {
        this.spaceResults.push(spacex);
      }
    });
  }
  filterSpaceLaunch() {
    debugger;
    if (this.spaceYear === undefined && this.spaceLanding === undefined) {
      this.spacexService.getSpaceResultLaunchLanding(this.spaceLaunch, this.spaceLanding).subscribe({
        next: spacex => {
          this.spaceResults = [];
          this.spaceResults.push(spacex);
        }
      });
    }
    if ( this.spaceLaunch === undefined && this.spaceLanding === undefined) {
      this.spacexService.getSpaceResultYear(this.spaceYear).subscribe({
        next: spacex => {
          this.spaceResults = [];
          this.spaceResults.push(spacex);
        }
      });
    }
    if (this.spaceYear !== undefined && this.spaceLaunch !== undefined && this.spaceLanding !== undefined) {
      this.spacexService.getSpaceResult(this.spaceYear , this.spaceLaunch, this.spaceLanding).subscribe({
        next: spacex => {
          this.spaceResults = [];
          this.spaceResults.push(spacex);
        }
      });
    }
  }
}
