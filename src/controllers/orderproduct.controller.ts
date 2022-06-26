import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Orderproduct} from '../models';
import {OrderproductRepository} from '../repositories';
// @authenticate('jwt')
export class OrderproductController {
  constructor(
    @repository(OrderproductRepository)
    public orderproductRepository: OrderproductRepository,
  ) { }

  @post('/orderproducts')
  @response(200, {
    description: 'Orderproduct model instance',
    content: {'application/json': {schema: getModelSchemaRef(Orderproduct)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orderproduct, {
            title: 'NewOrderproduct',

          }),
        },
      },
    })
    orderproduct: Orderproduct,
  ): Promise<Orderproduct> {
    return this.orderproductRepository.create(orderproduct);
  }

  @get('/orderproducts/count')
  @response(200, {
    description: 'Orderproduct model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Orderproduct) where?: Where<Orderproduct>,
  ): Promise<Count> {
    return this.orderproductRepository.count(where);
  }

  @get('/orderproducts')
  @response(200, {
    description: 'Array of Orderproduct model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Orderproduct, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Orderproduct) filter?: Filter<Orderproduct>,
  ): Promise<Orderproduct[]> {
    return this.orderproductRepository.find(filter);
  }

  @patch('/orderproducts')
  @response(200, {
    description: 'Orderproduct PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orderproduct, {partial: true}),
        },
      },
    })
    orderproduct: Orderproduct,
    @param.where(Orderproduct) where?: Where<Orderproduct>,
  ): Promise<Count> {
    return this.orderproductRepository.updateAll(orderproduct, where);
  }

  @get('/orderproducts/{id}')
  @response(200, {
    description: 'Orderproduct model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Orderproduct, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Orderproduct, {exclude: 'where'}) filter?: FilterExcludingWhere<Orderproduct>
  ): Promise<Orderproduct> {
    return this.orderproductRepository.findById(id, filter);
  }

  @patch('/orderproducts/{id}')
  @response(204, {
    description: 'Orderproduct PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orderproduct, {partial: true}),
        },
      },
    })
    orderproduct: Orderproduct,
  ): Promise<void> {
    await this.orderproductRepository.updateById(id, orderproduct);
  }

  @put('/orderproducts/{id}')
  @response(204, {
    description: 'Orderproduct PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() orderproduct: Orderproduct,
  ): Promise<void> {
    await this.orderproductRepository.replaceById(id, orderproduct);
  }

  @del('/orderproducts/{id}')
  @response(204, {
    description: 'Orderproduct DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderproductRepository.deleteById(id);
  }
}
