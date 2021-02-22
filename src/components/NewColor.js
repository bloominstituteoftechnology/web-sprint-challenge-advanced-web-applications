import React, {useState} from 'react';
import {axiosWithAuth} from '../helpers/axiosWithAuth'


const initialColor = {
    color: '',
    code: {
        hex: ''
    }
};

const NewColor = ({updateColorList}) => {
const [ color, setColor ] = useState(initialColor);

const newColor = e => {
    e.preventDefault();
    axiosWithAuth()
        .post(`http://localhost:5000/api/colors`, color)
        .then((res) => {
            console.log(res);
            updateColorList(res.data);
        });                    
}
return(
    <div>
        <form onSubmit = {newColor}>
        <label>Add Color</label>
        <input
        name="colorName"
        id="colorName"
        onChange={(e) => setColor ({...color, color: e.target.value})}
        value={color.color}/>

        <label>Hex Code: </label>
        <input 
        name="hex"
        id="hex"
        onChange={(e) => setColor({...color, code:{hex: e.target.value}})}
        value={color.code.hex}/>
        <div>
            <button>ADD NewColor</button>
        </div>
        </form>
    </div>
);
}
export default NewColor;