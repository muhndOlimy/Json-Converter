import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject } from '@angular/core';
import { JsonStateService } from '../../services/JsonState.service';
import { TableModule } from 'primeng/table';
import { FilterByFieldsPipe } from "../../pipes/filter-by-fields.pipe";
import { Filter, JsonData, TableKey } from '../../interfaces/common';
import { extractKeysForTable } from '../../helpers/extractKeysForTable';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, FilterByFieldsPipe],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {

  private _jsonState = inject(JsonStateService);
  private _cdr = inject(ChangeDetectorRef); // Inject ChangeDetectorRef
  
  data !:JsonData[];
  cols !:TableKey[];
  filterCriteria!:Filter;

  constructor(){
    // Create an effects that automatically updates when the signal changes
    effect(() => {
      let parsedData = JSON.parse(this._jsonState.getValue());
      this.cols = extractKeysForTable(parsedData);
      this.data = parsedData;
      this._cdr.markForCheck();
    });

    effect(()=>{
      this.filterCriteria = this._jsonState.getFilter()
      this._cdr.markForCheck();
    })
  }

}
