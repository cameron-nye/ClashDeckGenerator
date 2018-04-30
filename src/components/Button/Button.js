import React from 'react';

function Button(props){
  console.log(props)
  // let styles;
  // if (props.myStyle === 'primary') {
  //   styles = {

  //   }
  // } else if (props.myStyle === 'secondary') {
  //   styles = {

  //   }
  // }
  return(
    <button 
    style={{width:props.width}}
      disabled={props.disabled}
      onClick={props.method}>{props.name}
    </button> 
  )
}




export default Button;