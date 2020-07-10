import { Component, OnInit } from '@angular/core';
import { LogService } from "../log.service";

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  public date = new Date();

  constructor(public LogService: LogService) { }

  ngOnInit(): void {

  }

}
