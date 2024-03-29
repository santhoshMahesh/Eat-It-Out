import classes from './Cart.module.css'
import Modal from '../../UI/Modal';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'; 

const Cart=props=>{
    const cartCtx = useContext(CartContext);
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;
    const history=useHistory();
    const cartItemRemoveHandler=id=>{
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler=item=>{
       cartCtx.addInSingular(item)
    };

    const navigateToMaps = () => {
        // 👇️ navigate to /contacts
        history.push("/Checkout");
      };
   


    const cartItems=(
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>(
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
        ))}
    </ul>
    )
    return <Modal hideCartHandler={props.hideCartHandler}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}
        >
            <button className={classes['button--alt']} onClick={props.hideCartHandler}>close</button>
            { hasItems && <button className={classes.button} onClick={navigateToMaps}>Order</button>}
        </div>
    </Modal>
};

export default Cart;