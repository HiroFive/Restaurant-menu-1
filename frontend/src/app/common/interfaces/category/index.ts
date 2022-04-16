import { IFood } from '../';

export interface ICategory {
  id: string;
  title: string;
  hidden: boolean;
  parentId?: string | null;
}

export interface ICategoryWithChildren {
  id: string;
  title: string;
  hidden: boolean;
  parentId?: string | null;
  childrenCategory?: ICategoryWithChildren[];
}

export interface IChildrenCategory {
  id: string;
  title: string;
  hidden: boolean;
  food?: IFood[];
  childrenCategory?: IChildrenCategory;
}

export interface ICategoryPost {
  title: string;
  hidden: boolean;
  parentId?: string;
}
