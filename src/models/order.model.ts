import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
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
  userId: number;

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
    type: 'string',
    required: true,
  })
  address: string;
  
  @property({
    type: 'number',
    required: true,
  })
  pincode: number;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
