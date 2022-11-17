import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data!: any;
  @Input() displayedColumns!: string[]
  @Input() columnDef!: any[]
  @Input() category!:string;
  @Output() eventEmitt = new EventEmitter<string>();

  onShowDetails(element: string) {
    this.eventEmitt.emit(element);
  }
  chcekClass(check: boolean) {
    return check ? 'checked' : 'unchecked';
  }
}
