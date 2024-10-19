import { AbstractControl, ValidationErrors } from '@angular/forms';

export function jsonArrayValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  
  // Check if it's valid JSON
  try {
    const parsed = JSON.parse(value);

    // Check if it's an array
    if (!Array.isArray(parsed)) {
      return { jsonInvalid: 'Input is not a valid JSON array' };
    }

    // Ensure all objects have the same keys
    if (parsed.length > 0) {
      const keys = Object.keys(parsed[0]);
      for (let i = 1; i < parsed.length; i++) {
        if (Object.keys(parsed[i]).length !== keys.length || 
            !Object.keys(parsed[i]).every(key => keys.includes(key))) {
          return { jsonInvalid: 'Objects in the array must have the same keys' };
        }
      }
    }

    return null;  // Valid JSON array with uniform objects
  } catch (e) {
    return { jsonInvalid: 'Input is not valid JSON' };
  }
}