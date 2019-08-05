import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "lo-character-dialog",
  templateUrl: "./character-dialog.component.html",
  styleUrls: ["./character-dialog.component.scss"]
})
export class CharacterDialogComponent implements OnInit{
  data: any;
  @Input() characterDialogData: CharacterDialogData = {
    character: "",
    paragraphs: []
  };
  innerCharacterDialogData: CharacterDialogData = {
    character: "",
    paragraphs: []
  };

  constructor() {}

  ngOnInit() {
    this.innerCharacterDialogData.character =
      this.data && this.data.character
        ? this.data.character
        : this.characterDialogData.character;

    this.innerCharacterDialogData.paragraphs =
      this.data && this.data.paragraphs
        ? this.data.paragraphs
        : this.characterDialogData.paragraphs;
  }
}

interface CharacterDialogData {
  character: string;
  paragraphs: Array<any>;
}
