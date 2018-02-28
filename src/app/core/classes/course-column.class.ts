import { CourseRow } from './course-row.class';

export class CourseColumn{
    private columnContent : ColumnContent;
    private flex : number;

    constructor(flex? : number) {
        this.flex = flex ? flex : null;
        this.columnContent = {
            component: null,
            data: {}
        }
    }

    setContent(component : any, data: any) {
        this.columnContent.component = component;
        this.columnContent.data = data;
    }

    getContent(){
        return this.columnContent;
    }
}

interface ColumnContent{
    component: any;
    data: any;
}