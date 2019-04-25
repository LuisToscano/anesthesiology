import { ComponentType } from '../enums/component-type.enum';
import { ElementAction } from '../enums/element-action.enum';

export interface Sections{
    id: string,
    name: string,
    icon ?: string,
    slides: Array<Slide>
}

export interface Slide{
    rows: Array<Row>,
    name ?: string,
    style ?: {},
    classes ?: Array<string>
}

export interface Element{
    type: ComponentType,
    component: any,
    data : any,
    events ?: any,
    actions ?: Array<ElementAction>
}

interface Row{
    cols: Array<Col>,
    flex ?: number,
    style ?: {},
    classes ?: Array<string>
}

interface Col {
    type : ComponentType,
    component: any,
    data: {},
    actions ?: Array<ElementAction>,
    flex ?: number,
    style ?: {},
    classes ?: Array<string>
}