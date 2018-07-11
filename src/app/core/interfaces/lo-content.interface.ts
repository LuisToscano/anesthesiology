export interface Sections{
    id: string,
    name: string,
    icon ?: string,
    slides: Array<Slide>
}

export interface Slide{
    rows: Array<Row>,
    style ?: {},
}

interface Row{
    cols: Array<Col>,
    flex ?: number
}

interface Col {
    component: any,
    data: {},
    flex ?: number
}