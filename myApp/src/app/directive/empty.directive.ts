import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[emptyData]'
})

export class EmptyDirective {
  constructor(private el: ElementRef,private renderer: Renderer){}
  @Input() emptyData: string;
  ngOnInit() {
    if(!this.emptyData){
      this.el.nativeElement.innerHTML = "Empty";
      this.el.nativeElement.className = "empty";
    }
    else{
    this.el.nativeElement.innerHTML = this.emptyData;
    }
  }
}