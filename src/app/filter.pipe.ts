import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "./arrdemo/task";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: Task[], args: string): any {
    return value.filter(x => x.title.startsWith(args));
  }
}
