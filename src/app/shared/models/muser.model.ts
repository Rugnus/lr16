export interface Muser {
    name: String; 
    surname: String;
    patronymic: string;
    phone: string;
    email: string;
    group: number;
    edit: boolean;
    id?: number;
}

export enum MyGroups {
    it,
    sale,
    delivery,
    legal,
  }