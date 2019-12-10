import { Component, OnInit } from '@angular/core';


interface IServer {id: number; name: string; content: string}
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
  
  onServerCreated(server) {
    server.id = this.servers.length + 1
    this.servers.push(server)
  }
  
}
