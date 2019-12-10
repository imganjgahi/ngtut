import { Component } from '@angular/core';

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls:["./server.component.scss"]
})
export class ServerComponent {

     serverId: number = Math.floor(Math.random() * 100);
     serverStatus: boolean = false;

     getServerStatus() {
         console.log("SEVRED: ", this.serverStatus)
         return this.serverStatus = this.serverId % 2 === 0
     }

     getColor() {
         return this.serverStatus ? 'lightseagreen' : 'red'
     }
}