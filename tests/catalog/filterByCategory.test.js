const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

const ids = (list) => list.map((product) => product.id);

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(filterByCategory(products, 'all'))).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("'electronics' возвращает товары с ID [1, 2]");
  test.todo("'books' возвращает товары с ID [3, 6]");
  test.todo("'home' возвращает товары с ID [4, 5]");
  test.todo("'clothes' возвращает пустой массив");
  test.todo("'toys' возвращает пустой массив");
  test.todo("'sports' возвращает пустой массив");
});
