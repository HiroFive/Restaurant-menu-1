import { ICategoryWithChildren } from 'src/app/common/interfaces';

export const categoryAll: ICategoryWithChildren = {
  title: 'All',
  hidden: false,
  id: 'none',
  parentId: 'none',
  childrenCategory: [],
};
export const categoryFoodWithoutCategory: ICategoryWithChildren = {
  title: 'Food without category',
  hidden: true,
  id: 'null',
  parentId: null,
  childrenCategory: [],
};
