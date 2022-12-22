import { useState } from "react";



const Message = (props) => {



    const [count, setCount] = useState();

    const Increment = () => {
        setCount(count += 1);
    };

    const Decriment = () => {
        setCount(count -= 1);
    };


    return (
        <>
            <div className="Msg">
                {props.headerText}
                <h3>Привет, {props.name}</h3>
            </div>
            <h1>
                {count}
            </h1>
            <button onClick={Increment} >Increment</button>
            <button onClick={Decriment}>Decrement</button>
        </>
    )
}



export default Message;