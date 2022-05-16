import {Entity, model, property} from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  productName: string;

  @property({
    type: 'number',
    required: true,
  })
  categoryId: number;


  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  imageone?: string;

  @property({
    type: 'string',
  })
  imagetwo?: string;

  @property({
    type: 'string',
  })
  imagethree?: string;

  @property({
    type: 'string',
  })
  imagefour?: string;

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


  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
