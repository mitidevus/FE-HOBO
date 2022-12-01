import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';


function SearchPage() {

    const [selectedFiles, setSelectedFiles] = React.useState([]);

    const handleImageChange = (e) => {
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

    const renderPhotos = (source) => {
        console.log("source: ", source);
        return source.map((photo) => {
        return <img src={photo} alt="" key={photo} width="20%"/>;
        });
    };

   

    return (
        <div className='container'>
            <br></br>

            <div className='title-postpage'>
                <h1>
                    POST ROOM
                </h1>
            </div>

            <input type="text"></input>

            <input type="file" id="file" multiple onChange={handleImageChange} />

            <div className="result">{renderPhotos(selectedFiles)}</div>
      
            
        </div>
      );
}

export default SearchPage;
