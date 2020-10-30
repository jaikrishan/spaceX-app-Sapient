import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable, of , throwError} from 'rxjs';
import {SpaceX} from '../app/Models/spacex-data';
import {catchError , tap, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private spaceXUrl = 'https://api.spacexdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient) { }

  getSpaceResultStart(): Observable<SpaceX> {
    return this.http.get<SpaceX>(this.spaceXUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
    );
  }
  getSpaceResultYear(year?: number): Observable<SpaceX> {
    return this.http.get<SpaceX>(this.spaceXUrl + '&launch_year=' + year ).pipe(
      tap(data => console.log(JSON.stringify(data))),
    );
  }
  getSpaceResultLaunchLanding(launch?: boolean, land?: boolean): Observable<SpaceX> {
    return this.http.get<SpaceX>(this.spaceXUrl + '&launch_success=' + launch + '&land_success=' + land ).pipe(
      tap(data => console.log(JSON.stringify(data))),
    );
  }
  getSpaceResult(year?: number, launch?: boolean, land?: boolean): Observable<SpaceX> {
    return this.http.get<SpaceX>(this.spaceXUrl + '&launch_success=' + launch + '&land_success=' + land + '&launch_year=' + year).pipe(
      tap(data => console.log(JSON.stringify(data))),
    );
  }
}
