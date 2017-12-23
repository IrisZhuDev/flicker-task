import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
	name: 'titleFilter',
	pure: false
})

export class PhotoPipe implements PipeTransform {
    transform(photos: any, searchText: any): any {
    	if(searchText == null) return photos;
    	return photos.filter(function(photo){
      		return photo.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    	})
  	}
}