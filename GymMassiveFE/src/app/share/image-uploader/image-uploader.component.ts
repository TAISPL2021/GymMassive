import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-image-uploader',
	templateUrl: './image-uploader.component.html',
	styleUrls: [ './image-uploader.component.scss' ]
})
export class ImageUploaderComponent {
	@Input() invalid = false;
	@Output() image = new EventEmitter();
	@ViewChild('fileInput') fileInput: ElementRef;
	fileAttr = 'Imagen';

	uploadFileEvt(imgFile: any) {
		if (imgFile.target.files && imgFile.target.files[0]) {
			this.fileAttr = '';
			Array.from(imgFile.target.files).forEach((file: File) => {
				this.fileAttr += file.name;
			});

			// HTML5 FileReader API
			let reader = new FileReader();
			reader.onload = (e: any) => {
				let image = new Image();
				image.src = e.target.result;
				image.onload = (rs) => {
					this.image.emit(e.target.result);
				};
			};
			reader.readAsDataURL(imgFile.target.files[0]);
			this.fileInput.nativeElement.value = '';
		} else {
			this.fileAttr = 'Imagen';
		}
	}
}
