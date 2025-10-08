import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(0);

    return(
        <>
        <h4>Count: {show}</h4>
              <button onClick={() => {
                if (count < 10) {
                  setCount(count + 1)
                } else {
                  setShow(show + 1);
                  setCount(0)
                }}}>{count}</button>
        </>
    );
}