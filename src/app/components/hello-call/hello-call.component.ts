import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexService } from '../../services/index.service';


@Component({
    selector : "app-hello-call",
    templateUrl:"./hello-call.component.html",
    styleUrls:["./hello-call.component.css"]
})
export class HelloCallComponent implements OnInit{
    message: String ='';

    constructor(private indexService:IndexService){}

    ngOnInit(): void {
        console.log("calling api in hello component");
        this.indexService.getHello().subscribe({
           
            next: data=> {
            this.message = data;
            console.log('API message:', this.message);
        },
            error: error=> console.error(error)}
        );
    }
}