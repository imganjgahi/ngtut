import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus:boolean = false;
  creationBtnText = "add new server";
  serverName = ""
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000);
  }

  ngOnInit() {
  }

  onChangeServerInput () {
    this.serverCreationStatus = false;
  }
  onChangeBtnText (txt: string) {
    this.creationBtnText= txt;
  }
  onCreateServer () {
    this.serverCreationStatus = true
  }
}
