export const LOExtras : LOExtrasContent = {
    menuBars: null
};

interface LOExtrasContent{
    menuBars : {
        top ?: Array<any>,
        bottom ?: Array<any>
    },
    footer ?: Array<any>,
    helpBtns ?: Array<any>
}

