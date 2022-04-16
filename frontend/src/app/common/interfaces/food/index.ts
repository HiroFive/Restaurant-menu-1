import { IChildrenCategory } from '../';

export interface IFood {
  id: string;
  name: string;
  description: string;
  hidden: boolean;
  categoryId: string;
  image: string;
  portions: Array<{ price: number; weight: number }>;
}

interface IPortions {
  price: number;
  weight: number;
}
export interface IFoodWithCategory {
  parentId: string | undefined;
  id: string;
  title: string;
  hidden: boolean;
  food?: IFood[];
  childrenCategory?: IChildrenCategory[];
}
