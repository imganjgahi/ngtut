import { Component, OnInit } from '@angular/core';
import { IServer, IServerData } from '../../models/serversModel';



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  

  servers: IServer[] = [{id: 1, name: 'server', content: "some content"}]
  constructor() { 
  }

  ngOnInit() {
  }
  
  onServerCreated(server:IServerData) {
    const newServer:IServer = {...server,
      id: this.servers.length + 1
    }
    
    this.servers.push(newServer)
  }
  
}
