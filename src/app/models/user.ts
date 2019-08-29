export interface Iuser {
  id: number;
  email: string;
  inactive?: Date;
  init: Date;
  name: string;
  surname1: string;
  surname2: string;
  role: Irole;
}

export interface Irole {
  id: number;
  descripcion: string;
}
