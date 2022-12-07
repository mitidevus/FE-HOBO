import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';


function SearchPage() {

    /*
    const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Hello</button>

      {Array.from(Array(counter)).map((c, index) => {
        return <><br></br> <input key={c} type="text"></input></>;
      })}
    </div>
  );

  */

    const [selectedFiles, setSelectedFiles] = React.useState([]);
    const [thumbnail, setThumbnail]=React.useState();
    const [inputFields, setInputFields] = React.useState([{
        fullName:'',
    } ]);
    const [name,setName]=React.useState("");
    const [address,setAddress]=React.useState("");
    const [star,setStar]=React.useState(0);
    const [phone,setphone]=React.useState("");
    const [description,setDescription]=React.useState("");

    const handleImagesChange = (e) => {

        alert("Click the image thay you want to delete!!!")
        // console.log(e.target.files[])
        if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
        );

        // console.log("filesArray: ", filesArray);

        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
            (file) => URL.revokeObjectURL(file) // avoid memory leak
        );
        }
    };

    function deleteHandler(image) {
        setSelectedFiles(selectedFiles.filter((e) => e !== image));
        URL.revokeObjectURL(image);
      }

    const renderPhotos = (source) => {
        return source.map((photo) => {
        return <> <img src={photo} alt="" key={photo} width="20%" onClick={() => deleteHandler(photo)}/>  </>;
        });
    };

    const handleImageChange =(source) => {
        const file=source.target.value;
        setThumbnail(file)
    }

    const renderPhoto = (source) => {
        return <img src={source} alt="" width="20%"/>;
    };
   
    const handleName = (event)=>{
        // show the user input value to console
        const name = event.target.value;

        setName(name)
    };

    const handleAddress = (event)=>{
        // show the user input value to console
        const address = event.target.value;

        setAddress(address)
    };

    const handlePhone = (event)=>{
        // show the user input value to console
        const phone = event.target.value;

        setphone(phone)
    };

    const handleStar = (event)=>{
        // show the user input value to console
        const star = event.target.value;

        setphone(star)
    };

    const handleDescription = (event)=>{
        // show the user input value to console
        const description = event.target.value;

        setDescription(description)
    };

    const handleCheck = () =>{
        if (name.length===0) alert("1")
        else if (address.length===0) alert("2")
        else if (phone.length===0) alert("3")
        else if (description.length===0) alert("4")
        alert("5")
    }

    const addInputField = ()=>{
        setInputFields([...inputFields, {
            fullName:'',
        } ])
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }

   const renderImage = (e) => {
    return <img src={e} alt="" width="5%"/>
   }

   const handleChange = (index, evnt)=>{
    
        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
        console.log(list[index][name])
        
    }
 

    const renderSlider= () =>{
        return <>
            <div className="container_">
            <div>
                <div>
                  {
                      inputFields.map((data, index)=>{
                          const {fullName}= data;
                          return(
                            <div className="my-3" key={index}>
                    <div className="col">
                        <div>
                            <input  type="text" onChange={(evnt)=>handleChange(index, evnt)} value={fullName} name="fullName" className="slider-style"  placeholder="Image link" />

                        </div>
                    </div>
                   

                    {(data.length!==1)?  
                    <div className="">
                        <br></br>
                        {renderImage(fullName)}
                        <button className="btn btn-danger" onClick={removeInputFields}>Delete this image</button>
                    </div>:''}
                   
                    
                    </div>
                          )
                      })
                  }


     
                <div className="row">
                    <div className="col-sm-12">
                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </>
    }

    return (
        <div className='container'>

            <h1 className='title-postpage'>POST PAGE</h1>
            <br></br>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name hotel:</Form.Label>
                    <br></br>
                    <input className='input-text-name' type="text" placeholder="Name" required
                    onChange={handleName}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address:</Form.Label>
                    <br></br>
                    <input className='input-text-address' type="text" placeholder="Address" required
                    onChange={handleAddress}/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>PhoneNumber:</Form.Label>
                    <br></br>
                    <input className='input-text-phone' type="text" placeholder="Phone" required
                    onChange={handlePhone}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Star:</Form.Label>
                    <br></br>
                    <input className='input-text-star' type="number" placeholder="star" required min='0' max='5'
                    onChange={handleStar}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <br></br>
                    <textarea className="description-input" cols="40" rows="5" required
                    onChange={handleDescription}></textarea>
                </Form.Group>
              
                <Form.Group className="mb-3">
                    <Form.Label>Thumbnail:</Form.Label>
                    <br></br>
                    <input className='thumbnail-style' type="text" id="text-thumbnail" title=" " onChange={handleImageChange}/>
                    <br></br>
                    <br></br>
                    {thumbnail  && 
                        <div className="result">{renderPhoto(thumbnail)}</div>}
                </Form.Group>

               
                <Form.Group className="mb-3">
                    <Form.Label>Slider:</Form.Label>
                    <br></br>
                    {renderSlider()}
                </Form.Group>


                {/* <Form.Group className="mb-3">
                    <Form.Label>Slider:</Form.Label>
                    <br></br>
                    
                    <input type="file" id="file" title=" " multiple onChange={handleImagesChange} />
                    <br></br>
                    <br></br>
                    {selectedFiles  && 
                         <div className="result">{renderPhotos(selectedFiles)}</div>}
                </Form.Group> */}

            </Form>

            <div className='submit'>
                <button type="button" class="btn btn-primary" onClick={handleCheck}>Submit</button>
            </div>

            <br></br>
    
        </div>
      );
}

export default SearchPage;
