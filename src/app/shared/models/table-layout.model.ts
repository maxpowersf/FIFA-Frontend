export interface TableLayout {
    title: string;
    headerRows : string[];
    data: any[];
    canEdit: boolean;
    canRemove: boolean;
    functionRemove: Function;
    canLock?: boolean;
    propertyToCheck?: string;
    functionLock?: Function;
}