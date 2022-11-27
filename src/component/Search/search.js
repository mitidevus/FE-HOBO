import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../Search/SearchStyle.css'
import Button from 'react-bootstrap/Button';
import { React, useState } from "react";

const items = ["Filter","Starts", "Price", "Location"];

// function Search(props) {
//   let inputContext="";
//   let filterContext="";

//   return (
//     <div className='search-body'>
//       <InputGroup className="mb-3" id="component-search">
//         <select class="selectpicker" onChange={(evt) => {filterContext=evt.target.value}}>
//           {items.map((item,index)=><option key={index}>{item}</option>)}
//         </select>
//           <Form.Control onChange={(evt) => { inputContext=evt.target.value; }} aria-label="Text input with dropdown button" />
//           <Button onClick={()=>{props.onClickButton(inputContext)
//                                 props.onSelectFilter(filterContext)}} as="input" type="submit" value="Search" />{' '}
//       </InputGroup>
  
//     </div>
//   );
// }

function Search(props) {
  //let inputContext="";
  //let filterContext="";

  const [inputContext, setInputContext] = useState("");
  const [filterContext, setFilterContext] = useState("");

  const handleSelect = (evt) => {
    setFilterContext(evt.target.value);
    //console.log(filterContext);
    //props.onSelectFilter(filterContext)
  }

  return (
    <div className='search-body'>
      <InputGroup className="mb-3" id="component-search">
        <select class="selectpicker" onChange={handleSelect}>
          {items.map((item,index)=><option key={index}>{item}</option>)}
        </select>
          <Form.Control onChange={(evt) => { setInputContext(evt.target.value); }} aria-label="Text input with dropdown button" />
          <Button onClick={()=>{
                props.onClickButton(inputContext,filterContext); 
                props.onSelectFilter(filterContext)}} 
              as="input" type="submit" value="Search" />{' '}
      </InputGroup>
  
    </div>
  );
}

export default Search;