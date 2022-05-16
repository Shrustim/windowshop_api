import {Entity, model, property} from '@loopback/repository';

@model()
export class Category extends Entity {
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
  categoryName: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
  })
  description?: string;

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


  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
