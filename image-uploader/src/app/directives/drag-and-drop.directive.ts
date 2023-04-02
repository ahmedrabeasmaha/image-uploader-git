import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {

  constructor() {
  }

  @Output() fileDropped: EventEmitter<Array<File>> = new EventEmitter<Array<File>>();
  @HostBinding('style.background-color') private background: string = '#F6F8FB';

  @HostListener('dragover', ['$event']) dragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#FFFFFF';
  }

  // Dragleave Event
  @HostListener('dragleave', ['$event'])
  public dragLeave(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#F6F8FB';
  }

  // Drop Event
  @HostListener('drop', ['$event'])
  public drop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#F6F8FB';
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
