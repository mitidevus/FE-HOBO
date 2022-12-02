import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';


function SearchPage() {

    const [selectedFiles, setSelectedFiles] = React.useState([]);
    const [descriptionImage, setDescriptionImage]=React.useState();

    const [name,setName]=React.useState("");
    const [address,setAddress]=React.useState("");
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

       
        const file=source.target.files[0];
        file.preview=URL.createObjectURL(file);
        setDescriptionImage(file)
        URL.revokeObjectURL(file)
    }

    const renderPhoto = (source) => {
        return <img src={source.preview} alt="" width="20%"/>;
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
                    <Form.Label>Description:</Form.Label>
                    <br></br>
                    <textarea className="description-input" cols="40" rows="5" required
                    onChange={handleDescription}></textarea>
                </Form.Group>
              
                <Form.Group className="mb-3">
                    <Form.Label>Description image:</Form.Label>
                    <br></br>
                    <input type="file" id="file" title=" " onChange={handleImageChange}/>
                    <br></br>
                    <br></br>
                    {descriptionImage  && 
                        <div className="result">{renderPhoto(descriptionImage)}</div>}
                </Form.Group>

               


                <Form.Group className="mb-3">
                    <Form.Label>Slider:</Form.Label>
                    <br></br>
                    
                    <input type="file" id="file" title=" " multiple onChange={handleImagesChange} />
                    <br></br>
                    <br></br>
                    {selectedFiles  && 
                         <div className="result">{renderPhotos(selectedFiles)}</div>}
                </Form.Group>

            </Form>

            <div className='submit'>
                <button type="button" class="btn btn-primary" onClick={handleCheck}>Submit</button>
            </div>

            <br></br>
    
        </div>
      );
}

export default SearchPage;
