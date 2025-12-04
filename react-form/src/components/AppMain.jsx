import './AppMain.css';

import { useState } from 'react';

export default function AppMain(){
    const [newItem, setNewItem] = useState('');


    return (
        <main>

            <ul>
                <li>
                    <p>ciao</p>
                </li>
                <li>
                    <p>no</p>
                </li>
            </ul>


            <form>
                <h1>{newItem}</h1>
                <h1>{setNewItem}</h1>
                <input 
                    type="text" 
                    value= {newItem}
                    onChange={(event) => {
                        const newNewItem = event.target.value;
                        setNewItem(newNewItem);
                    
                    }} 
                />
            </form>
        </main>
    );
}
