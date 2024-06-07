import React, {useState} from 'react';
import InputColor from 'react-input-color';

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function changeColorHandler(color){
        setColor(color.hex);
    }

    return(
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div style={{backgroundColor: color, width: '100px', height: '100px'}}></div>
            
            <label>Select a color:  
            <InputColor
                initialValue="#5e72e4"
                onChange={(changeColorHandler)}
                placement="right"
            />
            </label>
        </div>
    );
}

export default ColorPicker;