import { Component, OnInit } from '@angular/core';
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

  paragraphs : Array<{ text : string, args? : ParagraphObj }> = [{
    text: 'Este recurso educativo digital está bajo una %(a)',
    args: {
      a: {
        type: 'link',
        data: {
          innerText: 'licencia de Creative Commons Reconocimiento-NoComercial-SinObraDerivada 2.5 Colombia',
          href: 'http://creativecommons.org/licenses/by-nc-nd/2.5/co/deed.es_ES'
        }
      }
    }
  }, {
    text: 'Además, tiene algunos derechos reservados a sus autores y colaboradores.'
  }];

  constructor() {
    _.forEach(this.paragraphs, this.processParagraphs.bind(this));
  }

  private processParagraphs(paragraph) {
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

  ngOnInit() {}
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