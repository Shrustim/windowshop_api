import {Entity, model, property} from '@loopback/repository';

@model()
export class UnitMaster extends Entity {
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
  name: string;

  @property({
    type: 'number',
  })
  parentId?: number;

  @property({
    type: 'number',
  })
  conversion_value?: number;

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


  constructor(data?: Partial<UnitMaster>) {
    super(data);
  }
}

export interface UnitMasterRelations {
  // describe navigational properties here
}

export type UnitMasterWithRelations = UnitMaster & UnitMasterRelations;
