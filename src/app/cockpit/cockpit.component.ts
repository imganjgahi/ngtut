import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IServerData } from '../../models/serversModel';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @ViewChild('serverNameInput', {static: true}) serverName: ElementRef;
  @ViewChild('serverContentInput', {static: true}) serverContent: ElementRef;
  @Output() onCreateServer = new EventEmitter<IServerData>();
  @Output() onResetServers = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCreatedServer () {
    const data = {
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value
    }
    this.onCreateServer.emit(data);
  }
}
