import {Entity, model, property} from '@loopback/repository';

@model()
export class Subcategory extends Entity {
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
  subCategoryName: string;

  @property({
    type: 'number',
    required: true,
  })
  categoryId: number;

  @property({
    type: 'string',
  })
  image?: string;

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


  constructor(data?: Partial<Subcategory>) {
    super(data);
  }
}

export interface SubcategoryRelations {
  // describe navigational properties here
}

export type SubcategoryWithRelations = Subcategory & SubcategoryRelations;
