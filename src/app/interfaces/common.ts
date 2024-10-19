export interface JsonData {
    [key:string]:string | number;
}

export interface TableKey{
    field: string,
    header: string
}

export interface FilterKey{
    label: string,
    command: any
}

export interface Filter{
    [key: string]: string | number
}
