import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
    // items: ShoppingCartItem[] = [];

    // get productIds() {
    //     return Object.keys(this.items);
    // }
    // get totalItemsCount(): number {
    //     let count = 0;
    //     // tslint:disable-next-line:forin prefer-const
    //     for ( let productId in this.items) {          
    //         count += this.items[productId].quantity;
    //     }
    //     return count;
    // }

    items: ShoppingCartItem[] = [];

    
    
    constructor(public itemsMap: { [productId: string]: ShoppingCartItem}) {
        this.itemsMap = itemsMap || {};
        
        // tslint:disable-next-line:forin prefer-const
        for (let productId in itemsMap) {
            // tslint:disable-next-line:prefer-const
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    // getQuantity(product: Product) {
    //     const item = this.items[product.key];
    //     return item ? item.quantity : 0;
    // }

    get totalItemsCount(): number {
        let count = 0;
        // tslint:disable-next-line:forin prefer-const
        for ( let productId in this.itemsMap) {          
            count += this.itemsMap[productId].quantity;
        }
        return count;
    }

    get totalPrice(): number {
        let sum = 0;
        // tslint:disable-next-line:forin prefer-const
        for ( let productId in this.items) { 
            sum += this.items[productId].totalPrice;
        }
        return sum;

    }

}
