import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'no server created'
  creationBtnText = "add new server"

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000);
  }

  ngOnInit() {
  }

  onChangeBtnText (txt: string) {
    this.creationBtnText= txt
  }
  onCreateServer () {
    this.serverCreationStatus = "server was created"
  }
}
