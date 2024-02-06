import { useRef } from "react";
export default function Start({ setusername}) {
  const inputRef =useRef();

  const handleClick = () => {
    inputRef.current.value && setusername(inputRef.current.value);
  };
  return (
    <div className='start'>
      <input 
      placeholder='enter your name' 
      className='startinput'
      ref={inputRef} />
      <button className='startbutton' onClick={handleClick}>
        Start
        </button>
        
    </div>
  )
}
