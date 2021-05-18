import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  /**
   * Modal id
   */
  @Input() modalID: string;

  /**
   * Object to delete
   */
  @Input() object: string;

  /**
   * Delete output
   */
  @Output() delete: EventEmitter<any> = new EventEmitter();

  /**
   * Delete modal constructor
   * @param modalService Modal service
   */
  constructor(public modalService: ModalService) {}
}
