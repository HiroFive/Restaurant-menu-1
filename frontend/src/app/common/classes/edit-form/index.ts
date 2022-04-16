export abstract class BaseInfo {
  constructor(
    public address: string,
    public contacts: string,
    public wifiPassword: string,
    public id: string = '',
  ) {}
}
export class Info extends BaseInfo {}

export abstract class BaseCategory {
  constructor(
    public title: string = '',
    public hidden: boolean = false,
    public id: string = '',
    public parentId: string = '',
  ) {}
}
export class Category extends BaseCategory {}

export abstract class BaseFood {
  constructor(
    public id: string = '',
    public name: string = '',
    public description: string = '',
    public hidden: boolean = false,
    public categoryId: string = '',
    public image: string = '',
    public portions: Array<{ price: number; weight: number }> = [
      { price: 1, weight: 1 },
    ],
  ) {}
}

export class Food extends BaseFood {}
