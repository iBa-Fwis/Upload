import {Component} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
  }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  persentData = 0;

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile.size > 2000000) {
      alert('Each File should be less than 2 MB of size.');
    }
  }

  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
          // if (event.status === 200) {
          //   this.message = 'Image uploaded successfully';
          // } else {
          //   this.message = 'Image not uploaded successfully';
          // }
          if (event.type === HttpEventType.UploadProgress) {
            this.persentData = Math.round(event.loaded / event.total * 100);
            console.log(this.persentData);
          }
        }
      );
  }

  getImage() {
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
