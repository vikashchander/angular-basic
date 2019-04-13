//create own component which name is server

import { Component } from "@angular/core";    // predefined which contains angular/core functionality 

@Component({
    //selector always a string and has a unique value
    //selector can be written as :
    // selector : ["app-server"];  used as a attribute inside html tag <div app-server></div>
    //  selector : '.app-server';  used as class selector inside html tag <div class="app-server"></div>
    selector:"app-server",  //app-server become a custom html tag which is used inside the app.component.html 
    templateUrl:"./server.component.html"     //taking or pointing server.component.html file
})

export class ServerComponent{
    
};