export class Photo {
	public imageUrl: string;

	constructor(public id:string, public server:string, public farm:string, public secret:string, public title:string){
		this.imageUrl = 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret + '.jpg';
	}
}