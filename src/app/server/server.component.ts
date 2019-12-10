import { Component, 
    Input, 
    OnInit, 
    OnChanges, 
    SimpleChanges, 
    DoCheck,
    OnDestroy} from '@angular/core';
import { IServer } from '../../models/serversModel';

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls:["./server.component.scss"]
})
export class ServerComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

    @Input() currentServer:IServer 
    @Input() name:string 

    constructor (){
        console.log("constructor")
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("ngOnChanges", changes)

    }
    ngOnInit(){
        console.log("ngOnInit")
    }

    ngDoCheck() {
        console.log("ngDoCheck")

    }
    ngOnDestroy() {
        console.log("ngOnDestroy")

    }
     
    
}