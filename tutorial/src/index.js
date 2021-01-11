import React from 'react';
import ReactDOM from 'react-dom';



function Greeting(){
    return <h4>this is ryan and this is my first component</h4>;
}

ReactDOM.render(<Greeting/>, document.getElementById('root'));