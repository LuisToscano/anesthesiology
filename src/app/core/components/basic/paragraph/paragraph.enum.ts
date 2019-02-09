export interface ParagraphData {
    text : string,
    args ?: ParagraphObj,
    innerHtml ?: string
}

export enum ParagraphArgumentType {
    Link = 'link',
    Class = 'class'
}

export enum ParagraphClass {
    Italic = 'italic',
    Bold = 'bold'
}

interface Paragraph {
    type: string,
    data: any
}

interface ParagraphObj {
    [key: string]: Paragraph
}