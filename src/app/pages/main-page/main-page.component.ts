import { Component } from '@angular/core';
import { JsonTextareaComponent } from "../../components/json-textarea/json-textarea.component";
import { DataTableComponent } from "../../components/data-table/data-table.component";
import { FilterComponent } from "../../components/filter/filter.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [JsonTextareaComponent, DataTableComponent, FilterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
