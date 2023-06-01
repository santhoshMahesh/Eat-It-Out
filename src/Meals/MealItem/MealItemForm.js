import classes from './MealItemForm.module.css';
import Input from '../../UI/Input.js'; 
import { useRef ,useState} from 'react';
 
const MealItemForm= (props)=>{
    
    const amountInputRef=useRef();
    const [amountIsValid,setAmountIsValid]=useState(true)
    const submitHandler=event=>{
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=Number(enteredAmount);
   
    if (enteredAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5){
        setAmountIsValid(false)
        return ;
    }
    props.onAddtoCart(enteredAmount);
    }

    return <form className={classes.form} onSubmit={submitHandler}> 
        <Input 
            ref={amountInputRef}
            label="Amount" 
            input={{
            id:'amount_'+props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
            }} />
        <button className={classes.button}>+ Add</button>
        {!amountIsValid&&<p>Please enter valid amount(1-5)</p>}
    </form>
};

export default MealItemForm;