import { Injectable } from "@angular/core";
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})

export class LogService {

  public logsArray: Message[]=[];

  write(message: Message): void {
    this.logsArray.push(message)
  }

  clear(): void {
    this.logsArray = [];
  }

}
