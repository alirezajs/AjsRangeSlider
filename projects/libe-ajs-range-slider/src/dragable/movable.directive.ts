import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

interface Position {
  x: number;
  y: number;
}

@Directive({
  selector: '[appMovable]'
})
export class MovableDirective extends DraggableDirective {

  @HostBinding('style.transform') get transform(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `translateX(${this.position.x}px)`
    );
  }

  @HostBinding('class.movable') movable = true;

  position: Position = { x: 0, y: 0 };

  private startPosition: Position;

  @Input('appMovableReset') reset = false;

  private previousElement: any;

  constructor(private sanitizer: DomSanitizer, public element: ElementRef, private renderer: Renderer) {
    super(element);
  }

  @HostListener('dragStart', ['$event'])
  onDragStart(event: PointerEvent) {
    let test: any = event;
    this.previousElement = test.target.previousElementSibling;

    this.startPosition = {
      x: event.clientX - this.position.x,
      y: event.clientY - this.position.y
    }

  }

  @HostListener('dragMove', ['$event'])
  onDragMove(event: PointerEvent) {
    this.position.x = event.clientX - this.startPosition.x;
    this.position.y = event.clientY - this.startPosition.y;
    console.log(this.previousElement);
    this.renderer.setElementStyle(this.previousElement, 'transform', `translateX(${this.position.x}px)`);

  }

  @HostListener('dragEnd', ['$event'])
  onDragEnd(event: PointerEvent) {
    if (this.reset) {
      this.position = { x: 0, y: 0 };
    }
  }
}
