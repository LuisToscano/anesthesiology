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
    style ?: {}
}

export interface Element{
    type: ComponentType,
    component: any,
    data : any,
    actions ?: Array<ElementAction>
}

interface Row{
    cols: Array<Col>,
    flex ?: number
}

interface Col {
    type : ComponentType,
    component: any,
    data: {},
    actions ?: Array<ElementAction>,
    flex ?: number
}