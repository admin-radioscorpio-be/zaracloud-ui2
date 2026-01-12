import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of,  catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MixerStatus } from '../models/mixer.model';


@Injectable({
  providedIn: 'root',
})
export class MixerService {
  private apiUrl = '/api/mixer/status'; // Replace with actual API URL
  private playqueueApiUrl = '/api/playqueue'

  private authRedirectUrl = '/api/login'; // Replace with your authentication URL

  constructor(private http: HttpClient, private router: Router) {}

  getMixerData(): Observable<MixerStatus> {
    
    const mockData: MixerStatus = {
      "playdetected": 1768232704.8144684,
      "playing": 1,
      "statuses": [
        {
          "elapsed_time": 52.97598958015442,
          "fade_duration": 0,
          "file_duration": 3592.941625,
          "filename": "/Volumes/Caribou/Scorpio//02 - Muziek/beste106_2025_heruitzending/best106_2025_part_09.wav",
          "name": "Channel0",
          "playing": 0,
          "remaining_time": null,
          "start_time": null,
          "stop": 1,
          "stop_time": 1768232595.9756398,
          "volume": 1
        },
        {
          "elapsed_time": 108.63721370697021,
          "fade_duration": 0,
          "file_duration": 3604.289875,
          "filename": "/Volumes/Caribou/Scorpio//02 - Muziek/beste106_2025_heruitzending/best106_2025_part_10.wav",
          "name": "Channel1",
          "playing": 1,
          "remaining_time": 3495.6526612930297,
          "start_time": 1768232596.17722,
          "stop": 0,
          "stop_time": 1768232470.0087655,
          "volume": 1
        },
        {
          "elapsed_time": 31.012502908706665,
          "fade_duration": 0,
          "file_duration": 3594.198521,
          "filename": "/Volumes/Caribou/Scorpio//02 - Muziek/beste106_2025_heruitzending/best106_2025_part_08.wav",
          "name": "Channel2",
          "playing": 0,
          "remaining_time": null,
          "start_time": null,
          "stop": 1,
          "stop_time": 1768232500.7144341,
          "volume": 1
        },
        {
          "elapsed_time": 41.865538120269775,
          "fade_duration": 0,
          "file_duration": 3592.941625,
          "filename": "/Volumes/Caribou/Scorpio//02 - Muziek/beste106_2025_heruitzending/best106_2025_part_09.wav",
          "name": "Channel3",
          "playing": 0,
          "remaining_time": null,
          "start_time": null,
          "stop": 1,
          "stop_time": 1768232542.8188746,
          "volume": 1
        }
      ]
    };
    
    //return of(mockData); // Wrap in Observable
      return this.http
      .get<MixerStatus>(this.apiUrl)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  playNext(): Observable<any> {
    return this.http
      .get(`${this.playqueueApiUrl}/next`)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  cueToPoint(cuePoint: string): Observable<any> {
    const payload = {
      cue_point: cuePoint
    };
    
    return this.http
      .post(`${this.playqueueApiUrl}/cue`, payload)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      console.warn('Unauthorized (401) - Redirecting to login...');
      window.location.href = this.authRedirectUrl; // Redirect to authentication page
    }
    return throwError(() => new Error(error.message));
  }
}
