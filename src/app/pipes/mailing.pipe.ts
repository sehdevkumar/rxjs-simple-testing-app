import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailing'
})
export class MailingPipe implements PipeTransform {

  transform(value: string,position:string,append:string): string{
 
    return position=='flag'?append+value:append+value
  }

}
