import React from 'react'
import {useNavigate} from "react-router-dom"
  
export default function Additem() {
  return (
    <div><form>
       <label>productname
       </label>
       <input type='text'></input><br></br>
       <label>product price</label>
       <input type='text'>

       </input>
       <br>
       </br>
       
       <label>product size</label>
       <input type='text'></input>
       <button>Submit</button>
      </form></div>
  )
}
