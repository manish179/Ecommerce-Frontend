import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SAVE_SHIPPING_INFO
} from "../constants/cartConstants";

export const cartReducers=(state={cartItems:[],shippingInfo:{}},action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const item=action.payload
            const isItemsExists=state.cartItems.find (i=>i.product===item.product)
            if(isItemsExists){
                return{
                    ...state,
                    cartItems:state.cartItems.map(i=> i.product === isItemsExists.product ? item:i)
                }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
            case REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems:state.cartItems.filter(i=>i.product!==action.payload)
                }
                case SAVE_SHIPPING_INFO:
                    return{
                        ...state,
                        shippingInfo:action.payload
                    }

            default:
                return state
    }
}