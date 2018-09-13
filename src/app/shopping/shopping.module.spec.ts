import { ShoppingModule } from './shopping.module';

describe('ShoppingModule', () => {
  let shoppingModule: ShoppingModule;

  beforeEach(() => {
    shoppingModule = new ShoppingModule();
  });

  it('should create an instance', () => {
    expect(shoppingModule).toBeTruthy();
  });
});
