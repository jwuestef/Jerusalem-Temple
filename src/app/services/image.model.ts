export class Image {
  $key: string;
  file: File;
  description: string;
  url: string;
  progress: number;
  constructor(file: File) {
    this.file = file;
  }
}