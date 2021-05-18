import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent implements OnInit, OnChanges {
  /**
   * Select options
   */
  @Input() items = [];

  /**
   * Multiselect selected items output
   */
  @Output() selectItems: EventEmitter<any[]> = new EventEmitter();

  /**
   * Form
   */
  @Input() form: FormGroup;

  /**
   * Name
   */
  @Input() name: string;

  /**
   * Control
   */
  @Input() control: FormControl;

  /**
   * Options table
   */
  table = [];

  /**
   * Select label
   */
  @Input() label;

  /**
   * Is open flag
   */
  public isOpen = false;

  constructor() {}

  /**
   * On init copy input items to table
   */
  ngOnInit(): void {
    if (this.items) {
      this.table = [...this.items];
    }
  }

  /**
   * On changes copy items to table
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.table = [...this.items];
    }
    this.control.setValue(this.items.filter((element) => element.isChecked));
  }

  /**
   * Delete selected item
   * @param item item to delete
   */
  deleteSelectedItem(item) {
    item.isChecked = false;
    this.selectItems.emit(this.items);
  }

  /**
   * Delete all items
   */
  deleteAllSelected() {
    this.items.forEach((e) => {
      e.isChecked = false;
    });
    this.selectItems.emit(this.items);
  }

  /**
   * Toggle options menu
   */
  toggle() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Get selected items
   */
  getSelected() {
    return this.items.filter((element) => element.isChecked);
  }

  /**
   * Handle change
   * @param item change value
   */
  handlePermissionChange(item) {
    item.isChecked = !item.isChecked;
    this.selectItems.emit(this.items);
  }
}
