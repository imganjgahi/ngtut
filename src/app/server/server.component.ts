import { Component, Input } from '@angular/core';

interface IServer {id: number; name: string; content: string}

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls:["./server.component.scss"]
})
export class ServerComponent {

    @Input() currentServer:IServer 

     
    
}