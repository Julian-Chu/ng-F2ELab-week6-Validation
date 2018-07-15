import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Observable } from "../../../node_modules/rxjs";

@Component({
  selector: "app-page-update-profile-picture",
  templateUrl: "./page-update-profile-picture.component.html",
  styleUrls: ["./page-update-profile-picture.component.css"]
})
export class PageUpdateProfilePictureComponent implements OnInit {
  dragging = false;
  images: Array<any> = [];
  oversizedFileExist = false;
  @Output() toNextPage = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onDrop(event: DragEvent) {
    this.oversizedFileExist = false;
    event.preventDefault();
    const data = event.dataTransfer;
    const files = data.files;
    this.dragging = false;
    const fileArray = Array.from(files);
    fileArray.forEach(file => {
      // this.previewImage(file).subscribe(img => {
      //   console.log(img.src);
      //   this.images.push(img.src);
      //   console.log(this.images);
      // });
      this.previewImage(file);
    });
  }

  previewImage(file: File) {
    const pattern = new RegExp(/image-*/);
    if (!file.type.match(pattern)) {
      alert(`${File.name} not image`);
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      // image size
      const img = new Image();
      img.onload = () => {
        if (img.width <= 150 && img.height <= 150) {
          this.images.push(img.src);
        } else {
          this.oversizedFileExist = true;
        }
      };
      const src = reader.result;
      img.src = src;
    };
    reader.readAsDataURL(file);
    // return Observable.create(observer => {
    //   reader.onloadend = () => {
    //     observer.next(reader.result);
    //     observer.complete();
    //   };
    // });
  }

  onDragenter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging = true;
  }

  onDragleave(event: DragEvent) {
    event.preventDefault();
    this.dragging = false;
  }

  onDragover(event: DragEvent) {
    event.preventDefault();
    this.dragging = true;
  }

  deleteImage(index) {
    this.images.splice(index, 1);
  }
  goToNextPage() {
    const imgs = {};

    // this.images.map((image, index) => {
    //   imgs[`image_${index}`] = image;
    // });

    imgs["images"] = this.images;
    this.toNextPage.emit(imgs);
  }
}
