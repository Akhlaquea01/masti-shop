import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'masTi-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() content: string = '';
  @Input() showModal: boolean = false;  // Controls visibility of the modal

  @Output() close = new EventEmitter<void>();  // Emits when modal is closed
  @Output() confirm = new EventEmitter<void>(); // Emits when modal is confirmed

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }
}
