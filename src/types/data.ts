export interface IInstrument {
    id: number;
    name: string;
    pinyin: string;

}

export interface ICategory {
    id: number;
    name: string;
    pinyin: string;
    instruments: IInstrument[];
}