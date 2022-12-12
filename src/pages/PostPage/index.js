import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Axios  from 'axios';
import './style.css';
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/userSlice'


function SearchPage() {

    const [selectedFiles, setSelectedFiles] = React.useState([]);
    const [thumbnail, setThumbnail]=React.useState();
    const [sliderList, setsliderList] = React.useState([]);
    const [utilities, setUtilities] = React.useState([]);
    const [name,setName]=React.useState("");
    const [licenseNumber,setLicenseNumber]=React.useState("");
    const [address,setAddress]=React.useState("");
    const [star,setStar]=React.useState(0);
    const [phone,setphone]=React.useState("");
    const [description,setDescription]=React.useState("");
    const [nameUtility,setNameUtility]=React.useState("")
    const [imgNameUtility,setImgNameUtility]=React.useState("")

    const user=useSelector(selectUser)
    //console.log(user.userId)

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

    const handleLicenseNumber = (event)=>{
        // show the user input value to console
        const licenseNumber = event.target.value;
        setLicenseNumber(licenseNumber)
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

        setStar(star)
    };

    const handleDescription = (event)=>{
        // show the user input value to console
        const description = event.target.value;

        setDescription(description)
    };

    const handleCheck = () =>{
        if (name.length===0) return false
        else if (address.length===0) return false
        else if (phone.length===0) return false
        else if (description.length===0) return false
        return true
    }

    const checkInputFillComplete = () => {

        if(handleCheck()) {
            console.log(star)
            console.log(sliderList)
            console.log(licenseNumber)
            console.log(utilities)

        

            Axios.post("http://localhost:2345/api/hotel/createhotel", {
                    userId: user.userId,
                    licenseNumber:licenseNumber,
                    hotelName: name,
                    hotelAddress: address,
                    hotelPhoneNumber: phone,
                    starNumber: star,
                    description: description,
                    descriptionImage: thumbnail,
                    utilities:utilities,
                    slider : sliderList,
                })
                .then((response) => {
                console.log(response);
            });
        }
        else {
            alert("You must fill in the information about Name hotel, Address, Phone Number, Star, Description, Thumbnail, Slider")
        }
    }

    const outputImage = (source) => {
        return <img src={source} alt="" width="20%"/>;
    }

    const handleUtilitiesChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...utilities];
        list[index][name] = value;
        setUtilities(list);
      };
      
      const handleUtilitiesRemove = (index) => {
        const list = [...utilities];
        list.splice(index, 1);
        setUtilities(list);
      };
      
      const handleUtilitiesAdd = () => {
        // const nameValue=nameInput.current.value;
        // const imgValue=imgInput.current.value;

        if(nameUtility!=="" && imgNameUtility!=="")  {
            setUtilities([...utilities, { name: nameUtility, imageURL: imgNameUtility }]);
            // nameInput.current.value="";
            // imgInput.current.value="";

            setNameUtility("")
            setImgNameUtility("")
        }
          
          
      };

      //console.log(utilities)

      const renderUtilities = () => {
        return <>
                <form className="App" autoComplete="off">
                    <div className="form-field">
                    {utilities.map((singleUtilities, index) => (
                        <div key={index} className="Utilities">
                        <div className="first-division">
                            <p className='name-utility-style'>Name utility: {singleUtilities.name}</p>
                            <img src={singleUtilities.imageURL} alt="" width="20%"/>
                            <br></br>
                            <br></br>
                        {/* value={singleUtilities.Utilities} onChange={(e) => handleUtilitiesChange(e, index)} */}
                            {/* <input className='Utilities-style' placeholder="Name" name="Utilities" type="text" id="utilities" ref={nameInput}/>
                            <br></br>
                            <br></br>
                            <input className='Utilities-style' placeholder="Image Link" name="Utilities-img" type="text" id="utilities-img" ref={imgInput}/> */}
                            <br></br>
                            <br></br>
                            
                            
                            <div className="second-division">
                            {utilities.length !== 0 && (
                            <button
                                type="button"
                                onClick={() => handleUtilitiesRemove(index)}
                                className="remove-btn"
                            >
                                <span>Remove</span>
                            </button>
                            )}
                        </div>
                            
                        </div>

                        
                        <br></br>
                        </div>
                        
                    ))}
                    <input className='Utilities-style' placeholder="Name" name="Utilities" type="text" id="utilities" value={nameUtility} onChange={(e) => setNameUtility(e.target.value)}/>
                    <br></br>
                    <br></br>        
                    <input className='Utilities-style' placeholder="Image Link" name="Utilities-img" type="text" id="utilities-img" value={imgNameUtility} onChange={(e) => setImgNameUtility(e.target.value)}/>
                    
                    <br></br>
                    <br></br>
                    <button type="button" onClick={handleUtilitiesAdd} className="btn btn-success add-btn-utilitie">
                        <span>Add an Utility</span>
                    </button>
                    
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </form>
        </>
    }


    
    const handleSliderChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...sliderList];
        list[index][name] = value;
        setsliderList(list);
      };
      
      const handleSliderRemove = (index) => {
        const list = [...sliderList];
        list.splice(index, 1);
        setsliderList(list);
      };
      
      const handleSliderAdd = () => {
        setsliderList([...sliderList, { Slider: "" }]);
      };
 
      const renderSlider = () => {
        return <>
                <form className="App" autoComplete="off">
                    <div className="form-field">
                    {sliderList.map((singleSlider, index) => (
                        <div key={index} className="Sliders">
                            <div className="first-division">
                                <input className='slider-style' name="Slider" type="text" id="Slider" value={singleSlider.Slider} onChange={(e) => handleSliderChange(e, index)}/>
                            
                                <div className="second-division">
                                {sliderList.length !== 0 && (
                                <button
                                    type="button"
                                    onClick={() => handleSliderRemove(index)}
                                    className="remove-btn"
                                >
                                    <span>Remove</span>
                                </button>
                                )}
                            </div>  
                        </div>

                        <br></br>
                        </div>
                        
                    ))}

                    <br></br>
                    <br></br>
                    <button type="button" onClick={handleSliderAdd} className="btn btn-success add-btn">
                        <span>Add a Slider</span>
                    </button>
                    
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="output">
                    <p>Your slider:</p>
                    {sliderList &&
                        sliderList.map((singleSlider, index) => (
                        <ul key={index}>
                            {singleSlider.Slider && <li>{outputImage(singleSlider.Slider)}</li>}
                        </ul>
                        ))}
                    </div>
                </form>
        </>
    }
   

    return (
        <div className='container wrapper'>

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
                    <Form.Label>License number:</Form.Label>
                    <br></br>
                    <input className='input-text-name' type="text" placeholder="Name" required
                    onChange={handleLicenseNumber}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address:</Form.Label>
                    <br></br>
                    <input className='input-text-address' type="text" placeholder="Address" required
                    onChange={handleAddress}/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number:</Form.Label>
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
                    <Form.Label>Utility:</Form.Label>
                    <br></br>
                    {renderUtilities()}
                </Form.Group>

               
                <Form.Group className="mb-3">
                    <Form.Label>Slider:</Form.Label>
                    <br></br>
                    {renderSlider()}
                </Form.Group>

            </Form>

            <div className='submit'>
                <button type="button" className="btn btn-primary" onClick={checkInputFillComplete}>Submit</button>
            </div>

            <br></br>
    
        </div>
      );


}

export default SearchPage;
