import { ParagraphComponent } from './app/components/basic/paragraph/paragraph.component';
import * as _ from "lodash";

export const courseContent : Array<Sections> = [{
    id: 'init',
    name: 'Inicio',
    slides: [{
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es un pequeño texto de prueba',
                    args: {}
                }]
            }]
        }]
    }]
}];

interface Sections{
    id: string,
    name: string,
    slides: Array<Slide>
}

interface Slide{
    rows: Array<Row>
}

interface Row{
    cols: Array<Col>
}

interface Col {
    component: any,
    data: {}
}