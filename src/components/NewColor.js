import React, {useState} from 'react';
import {axiosWithAuth} from '../helpers/axiosWithAuth'
import { useHistory } from 'react-router-dom';

const initialColor = {
    color: '',
    code: {
        hex: ''
    }
};

function NewColor(props) {
const [ color, setColor ] = useState(initialColor);
const history = useHistory();
const { updateColors } = props;

const newColor = e => {
    e.preventDefault();
    axiosWithAuth()
        .post("/api/colors", color)
        .then((res) => {
            updateColors(res.data)
        })
        .catch((err) => console.log(err));
        history.push('/bubblePage');
}
return(
    <div>
        <form onSubmit = {newColor}>
        <label>Add Color</label>
        <input onChange = {(e)=> setColor({...color,color:e.target.value})}
        value={color.color}/>
        <label>Hex Code: </label>
        <input onChange = {(e)=> setColor({...color, code: {hex: e.target.value}})}
        value={color.code.hex}/>
        <div>
            <button>ADD NewColor</button>
        </div>
        </form>
    </div>
);
}
export default NewColor;