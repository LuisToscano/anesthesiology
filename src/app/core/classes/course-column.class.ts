import { CourseRow } from './course-row.class';

export class CourseColumn{
    private columnContent : ColumnContent;
    private flex : number | string;
    private style;
    private classes;

    constructor(flex : number) {
        this.flex = flex === 0 ? 'none' : flex;
        this.columnContent = {
            component: null,
            data: {}
        };
        this.style = {};
        this.classes = [];
    }

    setContent(component : any, data: any) {
        this.columnContent.component = component;
        this.columnContent.data = data;
    }

    getContent(){
        return this.columnContent;
    }

    getStyle() {
        return this.style;
    }

    setStyle(style : {}){
        this.style = style;
    }

    getClasses() {
        return this.classes;
    }

    setClasses(classes : {}){
        this.classes = classes;
    }
}

interface ColumnContent{
    component: any;
    data: any;
}