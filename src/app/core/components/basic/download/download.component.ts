import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lo-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.scss"]
})
export class DownloadComponent implements OnInit {
  @Input() downloadData: DownloadData = {};
  innerLinkData: DownloadData = {};
  data: DownloadData = {};

  constructor() {}

  ngOnInit() {
      /*
    this.innerLinkData.text = this.data.text
      ? this.data.text
      : this.linkData.text;*/
  }
}

interface DownloadData {

}
