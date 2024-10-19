import { Injectable, signal } from '@angular/core';
import { Filter } from '../interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class JsonStateService {

  // Create a signal to hold the shared message
  valueSignal = signal<string>('');  // Signal initialized with empty string
  filterSignal = signal<any>({}); // Signal initialized with empty string

  // Method to update the signal
  updateValue(newValue: string) {
    this.valueSignal.set(newValue);
  }

  // Method to read the current value of the signal
  getValue(): string {
    return this.valueSignal(); 
  }

  // Method to update the signal
  updateFilter(newValue: Filter) {
    this.filterSignal.set(newValue);
  }

  // Method to read the current value of the signal
  getFilter(): Filter {
    return this.filterSignal(); 
  }

}
