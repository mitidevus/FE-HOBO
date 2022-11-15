import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../Search/SearchStyle.css'
import Button from 'react-bootstrap/Button';

const items = ["Filter","Starts", "Price", "Location", "Service"];

function Search() {

  return (
    <div className='search-body'>
      <InputGroup className="mb-3" id="component-search">
        <select class="selectpicker">
          {items.map((item,index)=><option key={index}>{item}</option>)}
        </select>
          <Form.Control aria-label="Text input with dropdown button" />
          <Button as="input" type="submit" value="Search" />{' '}
      </InputGroup>
  
    </div>
  );
}

export default Search;