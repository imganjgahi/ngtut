import { Component, Input } from '@angular/core';
import { IServer } from '../../models/serversModel';

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls:["./server.component.scss"]
})
export class ServerComponent {

    @Input() currentServer:IServer 

     
    
}