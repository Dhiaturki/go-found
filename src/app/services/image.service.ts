import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor() { }

  getimageProject(imagePath: string | undefined): string {
    return imagePath ? `http://localhost:8000/media/${imagePath}` : 'assets/default-image.jpg';
  }

  getimageUser(imagePath: string | undefined): string {
    return imagePath ? `http://localhost:8000${imagePath}` : 'assets/default-image-user.jpg';
  }

  getimageComent(imagePath: string | undefined): string {
    return imagePath ? `http://localhost:8000${imagePath}` : 'assets/default-image.jpg';
  }
}
