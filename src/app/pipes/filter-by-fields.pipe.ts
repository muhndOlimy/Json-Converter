import { Pipe, PipeTransform } from '@angular/core';
import { Filter, JsonData } from '../interfaces/common';

@Pipe({
  name: 'filterByFields',
  standalone: true
})
export class FilterByFieldsPipe implements PipeTransform {
  transform(items: JsonData[], filter: Filter): JsonData[] {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => {
      return Object.keys(filter).every(key => {
        // If the filter field is empty (null, undefined, empty string), ignore it
        if (filter[key] === null || filter[key] === undefined || filter[key] === '') {
          return true;
        }
        // Otherwise, check if the item's value matches the filter's value
        return item[key].toString().includes(filter[key].toString()) ;
      });
    });
  }
}
