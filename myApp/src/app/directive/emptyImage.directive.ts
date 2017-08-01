import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[emptyImage]'
})

export class EmptyImageDirective {
  constructor(private el: ElementRef,private rend: Renderer){}
  @Input() emptyImage: string;
  ngOnInit() {
    if(!this.emptyImage){
      var child = this.rend.createElement(this.el.nativeElement,"img");
      child.src = "https://previews.123rf.com/images/jakkapan/jakkapan1411/jakkapan141101725/33865485-Vector-silhouette-man-icon-avatar-profile-picture-Stock-Vector.jpg";
      var parent = this.el.nativeElement.parentNode;
      child.style.width = '100px';
      child.style.height = '100px';
      parent.append(child);
      this.el.nativeElement.remove();
    }
    else{
      var child = this.rend.createElement(this.el.nativeElement,"img");
      child.src = this.emptyImage;
      var parent = this.el.nativeElement.parentNode;
      child.style.width = '100px';
      child.style.height = '100px';
      parent.append(child);
      this.el.nativeElement.remove();
    }
  }
}