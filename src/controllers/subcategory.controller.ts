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
import {Subcategory} from '../models';
import {SubcategoryRepository} from '../repositories';

export class SubcategoryController {
  constructor(
    @repository(SubcategoryRepository)
    public subcategoryRepository : SubcategoryRepository,
  ) {}

  @post('/subcategories')
  @response(200, {
    description: 'Subcategory model instance',
    content: {'application/json': {schema: getModelSchemaRef(Subcategory)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Subcategory, {
            title: 'NewSubcategory',
            
          }),
        },
      },
    })
    subcategory: Subcategory,
  ): Promise<Subcategory> {
    return this.subcategoryRepository.create(subcategory);
  }

  @get('/subcategories/count')
  @response(200, {
    description: 'Subcategory model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Subcategory) where?: Where<Subcategory>,
  ): Promise<Count> {
    return this.subcategoryRepository.count(where);
  }

  @get('/subcategories')
  @response(200, {
    description: 'Array of Subcategory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Subcategory, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Subcategory) filter?: Filter<Subcategory>,
  ): Promise<Subcategory[]> {
    return this.subcategoryRepository.find(filter);
  }

  @patch('/subcategories')
  @response(200, {
    description: 'Subcategory PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Subcategory, {partial: true}),
        },
      },
    })
    subcategory: Subcategory,
    @param.where(Subcategory) where?: Where<Subcategory>,
  ): Promise<Count> {
    return this.subcategoryRepository.updateAll(subcategory, where);
  }

  @get('/subcategories/{id}')
  @response(200, {
    description: 'Subcategory model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Subcategory, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Subcategory, {exclude: 'where'}) filter?: FilterExcludingWhere<Subcategory>
  ): Promise<Subcategory> {
    return this.subcategoryRepository.findById(id, filter);
  }

  @patch('/subcategories/{id}')
  @response(204, {
    description: 'Subcategory PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Subcategory, {partial: true}),
        },
      },
    })
    subcategory: Subcategory,
  ): Promise<void> {
    await this.subcategoryRepository.updateById(id, subcategory);
  }

  @put('/subcategories/{id}')
  @response(204, {
    description: 'Subcategory PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() subcategory: Subcategory,
  ): Promise<void> {
    await this.subcategoryRepository.replaceById(id, subcategory);
  }

  @del('/subcategories/{id}')
  @response(204, {
    description: 'Subcategory DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.subcategoryRepository.deleteById(id);
  }
}
