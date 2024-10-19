import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { JsonStateService } from '../../services/JsonState.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { FilterKey, JsonData } from '../../interfaces/common';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MenuModule, ButtonModule, ReactiveFormsModule,KeyValuePipe , TitleCasePipe],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  private _jsonState = inject(JsonStateService);
  private _fb = inject(FormBuilder);

  items: MenuItem[] | undefined;
  cols!: FilterKey[];
  form: FormGroup; // Our reactive form

  constructor() {
    // Create an effect that automatically updates when the signal changes
    effect(() => {
      let parsedData = JSON.parse(this._jsonState.getValue());
      this.cols = this._extractKeysForFilter(parsedData);
      // Set inital columns
      this.items = [
        {
          label: 'Fields',
          items: this.cols,
        },
      ];
    });

    // Initialize the form with no controls
    this.form = this._fb.group({});
  }

  addFilterField(key: string) {
    this.cols = this.cols.filter((item: FilterKey) => {
      return item.label !== key;
    });
    this.items = [
      {
        label: 'Fields',
        items: this.cols,
      },
    ];
    // Add a new form control to the form with validation
    if (!this.form.contains(key)) {
      this.form.addControl(key, this._fb.control('',[Validators.pattern('^[a-zA-Z0-9]*$')]));
    }
  }

  // Function to handle form submission
  onSubmit() {
    if (this.form.valid) {
      this._jsonState.updateFilter(this.form.value);
    } 
  }

  clearFilter(){
    this.form.reset();
    this._jsonState.updateFilter({});
  }

  private _extractKeysForFilter(arr: JsonData[]): FilterKey[] {
    if (arr.length === 0 || typeof arr[0] !== 'object') {
      return [];
    }

    // Get the keys from the first object in the array
    const keys = Object.keys(arr[0]);

    // Map keys to the desired format
    return keys.map((key) => ({
      label: key,
      command: () => {
        this.addFilterField(key);
      },
    }));
  }
}
