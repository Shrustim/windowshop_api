import {Entity, model, property} from '@loopback/repository';

@model()
export class Orderproduct extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
  
 @property({
    type: 'number',
  })
  orderId?: number;

  @property({
    type: 'number',
  })
  userId?: number;

  @property({
    type: 'number',
    required: true,
  })
  productId: number;

  @property({
    type: 'number',
    required: true,
  })
  totalPrice: number;

  @property({
    type: 'number',
    required: true,
  })
  qty: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;


  constructor(data?: Partial<Orderproduct>) {
    super(data);
  }
}

export interface OrderproductRelations {
  // describe navigational properties here
}

export type OrderproductWithRelations = Orderproduct & OrderproductRelations;
