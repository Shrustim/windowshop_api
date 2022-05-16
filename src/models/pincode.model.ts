import {Entity, model, property} from '@loopback/repository';

@model()
export class Pincode extends Entity {
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
  pincodeNo: string;

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


  constructor(data?: Partial<Pincode>) {
    super(data);
  }
}

export interface PincodeRelations {
  // describe navigational properties here
}

export type PincodeWithRelations = Pincode & PincodeRelations;
