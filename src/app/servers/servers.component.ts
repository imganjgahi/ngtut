import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'no server created';
  creationBtnText = "add new server";
  serverName = ""
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000);
  }

  ngOnInit() {
  }

  onChangeServerInput (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(this.serverName)
  }
  onChangeBtnText (txt: string) {
    this.creationBtnText= txt
  }
  onCreateServer () {
    this.serverCreationStatus = "server was created"
  }
}
