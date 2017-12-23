import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { Photo } from './Photo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    host: { '(window:resize)': 'onResize($event)' }
})

export class AppComponent {
    userID:string = '24662369@N07';
    apiKey:string = 'a5e95177da353f58113fd60296e1d250';
    formatStr:string = '&format=json&nojsoncallback=1';
    photoList:Array<any> = [];
    sortDirection:number = 1;
    isSidebarVisible:boolean = true;
    searchText:string  = '';
    backgroundUrl:string  = '';
    userName:string = '';

    constructor(public http:HttpClient){  
    }

    ngOnInit(){
        this.loadPhoto();
        this.checkWidth(window.innerWidth);
    }

    loadPhoto(){
        let requestPhoto = this.http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=' + this.apiKey + '&user_id=' + this.userID + this.formatStr);
        let requestUser = this.http.get('https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=' + this.apiKey + '&user_id=' + this.userID + this.formatStr);

        forkJoin([requestPhoto, requestUser]).subscribe(
            results => {
                (results[0] as any).photos.photo.forEach(photo => {
                    this.photoList.push(
                        new Photo(photo.id,photo.server,photo.farm,photo.secret,photo.title)
                    );
                });
                this.backgroundUrl = 'https://farm' + (results[1] as any).person.iconfarm + '.staticflickr.com/' + (results[1] as any).person.iconserver + '/buddyicons/' + this.userID + '.jpg';
                this.userName = (results[1] as any).person.realname._content;
            },
            error => {
                console.log(error);
            }
        );
    }

    onResize(event){
        this.checkWidth(event.target.innerWidth);
    }

    checkWidth(width) {
        if (width > 600){
            this.isSidebarVisible = true;
        }else{
            this.isSidebarVisible = false;
        }
    };

    ascSort(){
        this.sortDirection = 1;
    } 

    descSort(){
        this.sortDirection = -1;
    }
}

