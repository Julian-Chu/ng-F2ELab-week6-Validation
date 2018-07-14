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
  @Output() toNextPage = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onDrop(event: DragEvent) {
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
    reader.readAsDataURL(file);
    // return Observable.create(observer => {
    //   reader.onloadend = () => {
    //     observer.next(reader.result);
    //     observer.complete();
    //   };
    // });

    reader.onloadend = () => {
      const src = reader.result;
      this.images.push(src);
    };
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
    this.toNextPage.emit({});
  }
}
