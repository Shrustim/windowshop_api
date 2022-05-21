import {Entity, model, property} from '@loopback/repository';

@model()
export class Productprice extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  productId: number;

  @property({
    type: 'number',
  })
  unitId?: number;

  @property({
    type: 'number',
    required: true,
  })
  qty: number;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  discount?: number;

  @property({
    type: 'number',
  })
  totalPrice?: number;

  @property({
    type: 'number',
  })
  is_show?: number;

  @property({
    type: 'number',
  })
  is_active?: number;

  @property({
    type: 'string',
  })
  created?: string;

  @property({
    type: 'string',
  })
  updated?: string;


  constructor(data?: Partial<Productprice>) {
    super(data);
  }
}

export interface ProductpriceRelations {
  // describe navigational properties here
}

export type ProductpriceWithRelations = Productprice & ProductpriceRelations;
