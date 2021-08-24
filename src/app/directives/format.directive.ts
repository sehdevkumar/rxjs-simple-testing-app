import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormat]'
})
export class FormatDirective {

  @HostListener('blur') onBlur(){
        this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toUpperCase();
  }

  constructor(private eleRef:ElementRef) { 
  
  }

}
