export interface MenuBarElement{
    iconClass : string;
    text: string;
    isActive : () => boolean;
    onClick : () => void;
}