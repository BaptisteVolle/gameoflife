import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  isGameRunning: boolean = false;
  @Output() toggleGameStatusClicked = new EventEmitter<void>();
  @Output() randomGridClicked = new EventEmitter<void>();

  toggleGameStatusClick() {
    this.isGameRunning = !this.isGameRunning;
    this.toggleGameStatusClicked.emit();
  }

  randomGridClick() {
    this.randomGridClicked.emit();
  }

  getButtonLabel() {
    return this.isGameRunning ? 'Pause Game' : 'Start Game';
  }
}
