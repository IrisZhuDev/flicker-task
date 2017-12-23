import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
	name: 'orderPhotos',
	pure: false 
})

export class OrderPhotosPipe implements PipeTransform {
    transform(photos: any, sortDirection: any): any {
        return photos.sort(function(a, b){
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1 * sortDirection;
            }else if(a.title.toLowerCase() > b.title.toLowerCase()){
                return sortDirection;
            }else if(a.id < b.id){
            	return -1 * sortDirection;
            }else{
            	return sortDirection;
            }
        });
    };
}