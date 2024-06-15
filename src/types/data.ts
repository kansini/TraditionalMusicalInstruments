export interface IInstrument {
    id: number;
    name: string;
    pinyin: string;
    image: string;
    desc?: string;

}

export interface ICategory {
    id: number;
    name: string;
    pinyin: string;
    instruments: IInstrument[];
}