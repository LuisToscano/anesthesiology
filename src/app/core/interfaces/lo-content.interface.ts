import { ComponentType } from '../enums/component-type.enum';

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

interface Row{
    cols: Array<Col>,
    flex ?: number
}

interface Col {
    component: any,
    data: {},
    flex ?: number,
    type ?: ComponentType
}