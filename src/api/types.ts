export type Category =
  | 'hair'
  | 'beauty'
  | 'barbershop'
  | 'massage'

export interface Service {
  id: string;
  name: string;
  category: Category;
  details?: string;
  saloonId: string;
}

export interface Saloon {
  id: string;
  categories: Category[];
  name: string;
  address: string;
  description?: string;
}

export interface Api {
  getCategoriesList(): Promise<Category[]>;
  getSaloonsList(categoryId: string): Promise<Saloon[]>;
  getServicesList(saloonId: string): Promise<Service[]>;
}
