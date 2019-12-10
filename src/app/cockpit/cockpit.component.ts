import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IServerData } from '../../models/serversModel';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  serverName = "";
  serverContent = "";
  @Output() onCreateServer = new EventEmitter<IServerData>();
  @Output() onResetServers = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCreatedServer () {
    const data = {
      name: this.serverName,
      content: this.serverContent
    }
    this.onCreateServer.emit(data);
    this.serverName = "";
    this.serverContent = "";
  }
}
