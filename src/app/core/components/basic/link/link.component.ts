import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lo-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"]
})
export class LinkComponent implements OnInit {
  @Input() linkData: LinkData = {
    text: "",
    url: "",
    img: null
  };
  innerLinkData: LinkData = {
    text: "",
    url: "",
    img: null
  };
  data: LinkData = {
    text: "",
    url: "",
    img: null
  };

  constructor() {}

  ngOnInit() {
    this.innerLinkData.text = this.data.text
      ? this.data.text
      : this.linkData.text;

    this.innerLinkData.img = this.data.img
      ? this.data.img
      : this.linkData.img;

    this.innerLinkData.url = this.data.url
      ? this.data.url
      : this.linkData.url;
  }
}

interface LinkData {
  text: string;
  url: string;
  img: string;
}
