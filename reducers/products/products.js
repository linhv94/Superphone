
const initialState =  [{
    id: 'p1', 
    name: 'Iphone X', 
    price: 1000, 
    description: 'Brand New',
    brand: 'Apple',
    producer: 'Apple',
    imageUrl: 'https://cdn.macrumors.com/article-new/2017/09/iphonexdesign-1-800x597.jpg',
    edit: false,
    productType: 'c1'
},
{
    id: 'p5', 
    name: 'Oppo F1', 
    price: 400, 
    description: 'Brand New',
    brand: 'Oppo',
    producer: 'Oppo',
    imageUrl: 'http://i0.wp.com/www.coolest-gadgets.com/wp-content/uploads/2016/01/oppo-selfie-f1.jpg',
    productType: 'c1'
},
{
    id: 'p11', 
    name: 'Samsung Galaxy Gear Watch', 
    price: 300, 
    description: 'Brand New',
    brand: 'Samsung',
    producer: 'Samsung',
    imageUrl: 'https://img.yugster.com/uploads/image/image/54768/big_thumb_big_thumb_main_small-14.jpg',
    productType: 'c3'
},
{
    id: 'p6', 
    name: 'Macbook Pro 13"', 
    price: 2000, 
    description: 'Brand New',
    brand: 'Apple',
    producer: 'Apple',
    imageUrl: 'https://cdn.tgdd.vn/Products/Images/44/107359/apple-macbook-pro-touch-mpxx2sa-a-450x300-450x300.jpg',
    productType: 'c2'
}]

const products = (state = initialState, 
    action) => {
        switch(action.type){
            case 'FETCH_PRODUCTS_SUCCESS':
                console.log('loading success');
                state = action.payload;
                return state;
            case 'ADD_PRODUCT':
                return [...state, action.payload];
            case 'DELETE_PRODUCT':
                return state.filter((p) => p._id !== action.payload);
            default:
                return state;
        }
    };

export default products;
    