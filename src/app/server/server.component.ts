import { Component } from '@angular/core';

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls:["./server.component.scss"]
})
export class ServerComponent {

     serverId: number = Math.floor(Math.random() * 100);
     serverStatus: boolean;

     getServerStatus() {
         return this.serverStatus = this.serverId % 2 === 0
     }
}