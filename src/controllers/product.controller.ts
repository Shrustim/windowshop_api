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
import {Product} from '../models';
import {ProductRepository} from '../repositories';

interface ProductFilter {
  categoryId: number,
  subCategoryId: number,
  unitId: any,
  totalPriceFrom: number,
  totalPriceTo: number,
  limit: number,
  offset: number
}
export class ProductController {

  constructor(
    @repository(ProductRepository)
    public productRepository: ProductRepository,
  ) { }

  @post('/products')
  @response(200, {
    description: 'Product model instance',
    content: {'application/json': {schema: getModelSchemaRef(Product)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {
            title: 'NewProduct',

          }),
        },
      },
    })
    product: Product,
  ): Promise<Product> {
    return this.productRepository.create(product);
  }

  @get('/products/count')
  @response(200, {
    description: 'Product model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Product) where?: Where<Product>,
  ): Promise<Count> {
    return this.productRepository.count(where);
  }

  @get('/products')
  @response(200, {
    description: 'Array of Product model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Product, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Product) filter?: Filter<Product>,
  ): Promise<Product[]> {
    return this.productRepository.find(filter);
  }

  @patch('/products')
  @response(200, {
    description: 'Product PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {partial: true}),
        },
      },
    })
    product: Product,
    @param.where(Product) where?: Where<Product>,
  ): Promise<Count> {
    return this.productRepository.updateAll(product, where);
  }

  @get('/products/{id}')
  @response(200, {
    description: 'Product model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Product, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Product, {exclude: 'where'}) filter?: FilterExcludingWhere<Product>
  ): Promise<Product> {
    return this.productRepository.findById(id, filter);
  }

  @patch('/products/{id}')
  @response(204, {
    description: 'Product PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {partial: true}),
        },
      },
    })
    product: Product,
  ): Promise<void> {
    await this.productRepository.updateById(id, product);
  }

  @put('/products/{id}')
  @response(204, {
    description: 'Product PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() product: Product,
  ): Promise<void> {
    await this.productRepository.replaceById(id, product);
  }

  @del('/products/{id}')
  @response(204, {
    description: 'Product DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productRepository.deleteById(id);
  }


  @post('/products-list')
  @response(200, {
    description: 'Array of Product model instances',
    // content: {'application/json': {schema: Array}},
  })
  async products_list(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              categoryId: {type: "number"},
              subCategoryId: {type: "number"},
              unitId: {type: "number"},
              startPrice: {type: "number"},
              endPrice: {type: "number"},
              limit: {type: "number"},
              offset: {type: "number"}
            },
          },
        },
      },
    }) dataa: any,
  ): Promise<any> {
    var query = "SELECT DISTINCT(Product.id), productName, categoryId, subCategoryId, description, imageone, imagetwo, imagethree, imagefour FROM `Product` LEFT JOIN Productprice ON Product.id = Productprice.productId WHERE Product.is_active = 1 AND Productprice.is_show = 1 AND Productprice.is_active = 1";
    var filter = " ";
    var filterForProductPrice = " ";
    // console.log("filter---", dataa)
    if (dataa) {

      if (dataa.categoryId && dataa.categoryId > 0) {
        // console.log("categoryId-----------", dataa.categoryId)
        filter = filter + " AND categoryId = '" + dataa.categoryId + "'";
      }
      if (dataa.subCategoryId && dataa.subCategoryId > 0) {
        // console.log("subCategoryId-----------", dataa.subCategoryId)
        filter = filter + " AND subCategoryId = '" + dataa.subCategoryId + "'";
      }

      if (dataa.unitId && dataa.unitId > 0) {
        // console.log("unitId-----------", dataa.unitId);
        filter = " AND Productprice.unitId = '" + dataa.unitId + "'" + filter;
      }
      if (dataa.startPrice && dataa.startPrice > 0 && dataa.endPrice && dataa.endPrice > 0) {
        // console.log("startPrice-----------", dataa.startPrice)
        // console.log("endPrice-----------", dataa.endPrice)
        filter = filter + " AND Productprice.totalPrice BETWEEN " + dataa.startPrice + " AND " + dataa.endPrice + " ";
        filterForProductPrice = " AND Productprice.totalPrice BETWEEN " + dataa.startPrice + " AND " + dataa.endPrice + " ";
      }

      if (dataa.limit && dataa.limit > 0 && dataa.offset >= 0) {
        // console.log("limit-----------", dataa.limit)
        // console.log("offset-----------", dataa.offset)
        filter = filter + "  LIMIT " + dataa.limit + " OFFSET " + dataa.offset + " ";

      }

    }
    // console.log("--------------", filter);
    var result: any = await this.productRepository.execute(query + " " + filter);

    var newData: any = await Promise.all(result.map(async (e: any, index: any): Promise<any> => {
      var resultData: any = [];
      resultData = await this.productRepository.execute('SELECT Productprice.id, productId, unitId, qty, price,discount, totalPrice ,UnitMaster.name as unitName FROM `Productprice` LEFT OUTER JOIN UnitMaster ON Productprice.unitId = UnitMaster.id WHERE Productprice.is_active = 1 AND Productprice.is_show = 1 AND productId = "' + e.id + '" ' + filterForProductPrice + '');
      var a = {
        ...e,
        "pricedata": resultData
      };
      return a;
    }));

    return newData;
  }




}
