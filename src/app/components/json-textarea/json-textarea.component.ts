import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { jsonArrayValidator } from '../../validators/jsonArrayValidator';
import { debounceTime } from 'rxjs';
import { JsonStateService } from '../../services/JsonState.service';

@Component({
  selector: 'app-json-textarea',
  standalone: true,
  imports: [InputTextareaModule , ReactiveFormsModule],
  templateUrl: './json-textarea.component.html',
  styleUrl: './json-textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonTextareaComponent {

  private _fb = inject(FormBuilder);
  private _jsonState = inject(JsonStateService);
  jsonForm!:FormGroup;

  ngOnInit(){
    this.jsonForm = this._fb.group({
      jsonInput: ["", [Validators.required, jsonArrayValidator]]  // Add custom validator
    });
    this.jsonForm.get('jsonInput')?.valueChanges
      .pipe(
        debounceTime(300),  // Debounce value changes by 300ms
      )
      .subscribe(value => {
        if (this.jsonForm.valid) {
          this._jsonState.updateValue(value);
        }
      });
  }

}
