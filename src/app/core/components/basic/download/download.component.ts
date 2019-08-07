import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lo-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.scss"]
})
export class DownloadComponent implements OnInit {
  @Input() downloadData: DownloadData = {
    text: "",
    url: "",
    img: null
  };
  innerDownloadData: DownloadData = {
    text: "",
    url: "",
    img: null
  };
  data: DownloadData = {
    text: "",
    url: "",
    img: null
  };

  constructor() {}

  ngOnInit() {
    this.innerDownloadData.text = this.data.text
    ? this.data.text
    : this.downloadData.text;

    this.innerDownloadData.img = this.data.img
        ? this.data.img
        : this.downloadData.img;

    this.innerDownloadData.url = this.data.url
        ? this.data.url
        : this.downloadData.url;
    }
}

interface DownloadData {
    text: string;
    url: string;
    img: string;
}
