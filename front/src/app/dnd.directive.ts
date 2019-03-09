import { Directive } from '@angular/core';
import { HostListener  } from '@angular/core';
import { HostBinding   } from '@angular/core';
import { EventEmitter   } from '@angular/core';
import { Output   } from '@angular/core';
@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @Output() private filesChangeEmiter: EventEmitter<FileList> = new EventEmitter();
  @HostBinding('style.background') private background = '#eee';
  constructor() { }
  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }
  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.filesChangeEmiter.emit(files);
    }
  }
}
