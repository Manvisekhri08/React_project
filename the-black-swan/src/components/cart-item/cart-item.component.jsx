
import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const { name, quatity } = cartItem;
    return (
        <div>
            <h2>{name}</h2>
            <span>{quatity}</span>
        </div>
    )
}

export default CartItem;