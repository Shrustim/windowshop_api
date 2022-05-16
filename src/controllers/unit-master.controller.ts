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
import {UnitMaster} from '../models';
import {UnitMasterRepository} from '../repositories';

export class UnitMasterController {
  constructor(
    @repository(UnitMasterRepository)
    public unitMasterRepository : UnitMasterRepository,
  ) {}

  @post('/unit-masters')
  @response(200, {
    description: 'UnitMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(UnitMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitMaster, {
            title: 'NewUnitMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    unitMaster: Omit<UnitMaster, 'id'>,
  ): Promise<UnitMaster> {
    return this.unitMasterRepository.create(unitMaster);
  }

  @get('/unit-masters/count')
  @response(200, {
    description: 'UnitMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UnitMaster) where?: Where<UnitMaster>,
  ): Promise<Count> {
    return this.unitMasterRepository.count(where);
  }

  @get('/unit-masters')
  @response(200, {
    description: 'Array of UnitMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UnitMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UnitMaster) filter?: Filter<UnitMaster>,
  ): Promise<UnitMaster[]> {
    return this.unitMasterRepository.find(filter);
  }

  @patch('/unit-masters')
  @response(200, {
    description: 'UnitMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitMaster, {partial: true}),
        },
      },
    })
    unitMaster: UnitMaster,
    @param.where(UnitMaster) where?: Where<UnitMaster>,
  ): Promise<Count> {
    return this.unitMasterRepository.updateAll(unitMaster, where);
  }

  @get('/unit-masters/{id}')
  @response(200, {
    description: 'UnitMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UnitMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UnitMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<UnitMaster>
  ): Promise<UnitMaster> {
    return this.unitMasterRepository.findById(id, filter);
  }

  @patch('/unit-masters/{id}')
  @response(204, {
    description: 'UnitMaster PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitMaster, {partial: true}),
        },
      },
    })
    unitMaster: UnitMaster,
  ): Promise<void> {
    await this.unitMasterRepository.updateById(id, unitMaster);
  }

  @put('/unit-masters/{id}')
  @response(204, {
    description: 'UnitMaster PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() unitMaster: UnitMaster,
  ): Promise<void> {
    await this.unitMasterRepository.replaceById(id, unitMaster);
  }

  @del('/unit-masters/{id}')
  @response(204, {
    description: 'UnitMaster DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.unitMasterRepository.deleteById(id);
  }
}
