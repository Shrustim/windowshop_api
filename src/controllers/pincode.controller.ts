import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Pincode} from '../models';
import {PincodeRepository} from '../repositories';

export class PincodeController {
  constructor(
    @repository(PincodeRepository)
    public pincodeRepository : PincodeRepository,
  ) {}

  @post('/pincodes')
  @response(200, {
    description: 'Pincode model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pincode)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pincode, {
            title: 'NewPincode',
            
          }),
        },
      },
    })
    pincode: Pincode,
  ): Promise<Pincode> {
    return this.pincodeRepository.create(pincode);
  }

  @get('/pincodes/count')
  @response(200, {
    description: 'Pincode model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pincode) where?: Where<Pincode>,
  ): Promise<Count> {
    return this.pincodeRepository.count(where);
  }

  @get('/pincodes')
  @response(200, {
    description: 'Array of Pincode model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pincode, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pincode) filter?: Filter<Pincode>,
  ): Promise<Pincode[]> {
    return this.pincodeRepository.find(filter);
  }

  @patch('/pincodes')
  @response(200, {
    description: 'Pincode PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pincode, {partial: true}),
        },
      },
    })
    pincode: Pincode,
    @param.where(Pincode) where?: Where<Pincode>,
  ): Promise<Count> {
    return this.pincodeRepository.updateAll(pincode, where);
  }

  @get('/pincodes/{id}')
  @response(200, {
    description: 'Pincode model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pincode, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pincode, {exclude: 'where'}) filter?: FilterExcludingWhere<Pincode>
  ): Promise<Pincode> {
    return this.pincodeRepository.findById(id, filter);
  }

  @patch('/pincodes/{id}')
  @response(204, {
    description: 'Pincode PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pincode, {partial: true}),
        },
      },
    })
    pincode: Pincode,
  ): Promise<void> {
    await this.pincodeRepository.updateById(id, pincode);
  }

  @put('/pincodes/{id}')
  @response(204, {
    description: 'Pincode PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pincode: Pincode,
  ): Promise<void> {
    await this.pincodeRepository.replaceById(id, pincode);
  }

  @del('/pincodes/{id}')
  @response(204, {
    description: 'Pincode DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pincodeRepository.deleteById(id);
  }
}
