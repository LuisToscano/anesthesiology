import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  private readonly argRegex = /%\([A-z]*\)/;
  private readonly htmlTags = {
    paragraph: {
      start: '<p>',
      end: '</p>'
    }
  };

  @Input() attributeData : Array<ParagraphData>;
  data : Array<ParagraphData>;
  paragraphs : Array<ParagraphData>;

  constructor() {}

  private processParagraphs(paragraph : ParagraphData) {
    let modifiedText = paragraph.text;
    let matches = paragraph.text.match(this.argRegex);
    _.forEach(matches, match => {
      let key = match.substring(2, match.length - 1);
      modifiedText = modifiedText.replace(match, paragraph.args.hasOwnProperty(key) ?
      this.createHtmlSnippet(paragraph.args[key]) : '');
    });
    paragraph.innerHtml = modifiedText;
  }

  private createHtmlSnippet(injectArgs) {
    let options = {
      link: (match : ParagraphLinkInjection) => {
        return '<a href=' + match.href + '>' + match.innerText + '</a>';
      }
    };
    return options.hasOwnProperty(injectArgs.type) ?
           options[injectArgs.type](injectArgs.data) : '';
  }

  ngOnInit() {
    this.paragraphs = this.attributeData ? this.attributeData : this.data;
    _.forEach(this.paragraphs, this.processParagraphs.bind(this));
  }
}

interface Paragraph {
  type: string,
  data: any
}

interface ParagraphLinkInjection {
  href: string,
  innerText: string
}

interface ParagraphObj {
    [key: string]: Paragraph
}

export interface ParagraphData {
  text : string,
  args ?: ParagraphObj,
  innerHtml ?: string
}