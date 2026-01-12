import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';

import { MixerService } from '../../../services/mixer.service';
import { MixerStatus } from '../../../models/mixer.model';
import { NgFor } from "@angular/common";
import { NgIf } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@coreui/angular';

@Component({
    selector: 'mixer-tables',
    templateUrl: './mixer.component.html',
    styleUrls: ['./mixer.component.scss'],
    imports: [ButtonDirective, CommonModule, FormsModule, NgIf, NgFor, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective]
})
export class MixerComponent {
  mixerData!: MixerStatus;
  cuePoint: string = '';


  constructor(private http: HttpClient, private mixerService: MixerService) {}

  ngOnInit(): void {
    this.mixerService.getMixerData().subscribe({
      next: (data) => {
        //this.loggerData = data;
        this.mixerData = (data);
        this.cuePoint = '';
        console.log("beire");
        console.log(this.mixerData);
        console.log("pap");
      },
      error: (err) => console.error('Error fetching logger data', err)
    });
  }

  formatTime(seconds: number | null): string {
    if (seconds === null) return '';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return h > 0 ? `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}` : `${m}:${s.toString().padStart(2, '0')}`;
  }

  loadMixerData(): void {
    this.mixerService.getMixerData().subscribe({
      next: (data) => {
        this.mixerData = data;
        console.log("Mixer data loaded:", this.mixerData);
      },
      error: (err) => console.error('Error fetching mixer data', err)
    });
  }


// Function to play next track
  playNext(): void {
    this.mixerService.playNext().subscribe({
      next: (response) => {
        console.log('Next track queued successfully', response);
        // Refresh mixer data after successful operation
        this.loadMixerData();
      },
      error: (error) => {
        console.error('Error calling next:', error);
        // Handle error (show toast, alert, etc.)
        // You might want to add user-friendly error handling here
      }
    });
  }
  
  // Function to cue to specific point
  cueToPoint(): void {
    if (!this.cuePoint.trim()) {
      // Optional: Show validation message to user
      console.warn('Please enter a cue point');
      // You could add user notification here
      return;
    }
    
    this.mixerService.cueToPoint(this.cuePoint.trim()).subscribe({
      next: (response) => {
        console.log('Cue successful', response);
        this.cuePoint = ''; // Clear the input after successful cue
        // Refresh mixer data after successful operation
        this.loadMixerData();
      },
      error: (error) => {
        console.error('Error calling cue:', error);
        // Handle error (show toast, alert, etc.)
      }
    });
  }
  
  // Your existing formatTime method
  formatTime2(time: number): string {
    // Your existing implementation
    return ''; // Replace with your implementation
  }

}
