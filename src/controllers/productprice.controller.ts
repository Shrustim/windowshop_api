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
import {Productprice} from '../models';
import {ProductpriceRepository} from '../repositories';

export class ProductpriceController {
  constructor(
    @repository(ProductpriceRepository)
    public productpriceRepository: ProductpriceRepository,
  ) { }

  @post('/productprices')
  @response(200, {
    description: 'Productprice model instance',
    content: {'application/json': {schema: getModelSchemaRef(Productprice)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productprice, {
            title: 'NewProductprice',

          }),
        },
      },
    })
    productprice: Productprice,
  ): Promise<Productprice> {
    return this.productpriceRepository.create(productprice);
  }

  @get('/productprices/count')
  @response(200, {
    description: 'Productprice model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Productprice) where?: Where<Productprice>,
  ): Promise<Count> {
    return this.productpriceRepository.count(where);
  }

  @get('/productprices')
  @response(200, {
    description: 'Array of Productprice model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Productprice, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Productprice) filter?: Filter<Productprice>,
  ): Promise<Productprice[]> {
    return this.productpriceRepository.find(filter);
  }

  @patch('/productprices')
  @response(200, {
    description: 'Productprice PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productprice, {partial: true}),
        },
      },
    })
    productprice: Productprice,
    @param.where(Productprice) where?: Where<Productprice>,
  ): Promise<Count> {
    return this.productpriceRepository.updateAll(productprice, where);
  }

  @get('/productprices/{id}')
  @response(200, {
    description: 'Productprice model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Productprice, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Productprice, {exclude: 'where'}) filter?: FilterExcludingWhere<Productprice>
  ): Promise<Productprice> {
    return this.productpriceRepository.findById(id, filter);
  }

  @patch('/productprices/{id}')
  @response(204, {
    description: 'Productprice PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productprice, {partial: true}),
        },
      },
    })
    productprice: Productprice,
  ): Promise<void> {
    await this.productpriceRepository.updateById(id, productprice);
  }

  @put('/productprices/{id}')
  @response(204, {
    description: 'Productprice PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productprice: Productprice,
  ): Promise<void> {
    await this.productpriceRepository.replaceById(id, productprice);
  }

  @del('/productprices/{id}')
  @response(204, {
    description: 'Productprice DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productpriceRepository.deleteById(id);
  }

  @get('/productPriceById/{id}')
  @response(200, {
    description: 'Array of Order model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Productprice, {includeRelations: true}),
        },
      },
    },
  })
  async ordersById(
    @param.path.number('id') id: number,
    @param.filter(Productprice) filter?: Filter<Productprice>,
  ): Promise<Productprice> {
    const result: any = await this.productpriceRepository.execute('SELECT `Productprice`.*, `UnitMaster`.name as unitName ,`Product`.`productName`,`Product`.`imageone` FROM `Productprice` INNER JOIN `Product` ON `Productprice`.productId=`Product`.id INNER JOIN `UnitMaster` ON `Productprice`.unitId=`UnitMaster`.id WHERE `Productprice`.`productId`="' + id + '"');
    return result;
  }
}
