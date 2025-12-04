import './AppMain.css';

import { useState } from 'react';

export default function AppMain(){
    const [newItem, setNewItem] = useState('');

    const [item, setItem] = useState([])



    function handlerSubmit(event){
      event.preventDefault(); 
      setItem([...item, newItem]); 
      setNewItem('');
    };
    return (
        <main>

            <ul>
                {item.map((item, index) => (
                    <li key={index}>
                        <p>{item}</p>
                    </li>
                ))}
            </ul>


            <form onSubmit={handlerSubmit}>
                
                
                <input 
                    type="text" 
                    value= {newItem}
                    onChange={(event) => {
                        const newNewItem = event.target.value;
                        setNewItem(newNewItem);     
                    }}
                />

                <button type='submit'>invia</button>
            </form>
        </main>
    );
}
