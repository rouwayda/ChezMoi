import { useState } from "react";
import './add.css';
import Axios from "axios";
import { Image } from "cloudinary-react";
const Add = () => {
    const [titre,setTitre] = useState('');
    const [body, setBody] = useState('');
    const [imageselect, setImageselect] =useState('');
    const uploadImage =(files) => {
        const formData= new FormData()
        formData.append("file",  imageselect)
        formData.append("upload_preset" , "m8d4i17a")    

        //setImage(files);
       Axios.post("https://api.cloudinary.com/v1_1/dmdwoqhuj/image/upload", formData).then((response) => 
       console.log(response))

    }
    const handleSubmit = () => {
        const data= {
            titre,
            body,
            imageselect
        }
    }
    return(
        <div className="create"> 
            <h2> Ajouter une nouvelle announce</h2>
            <form>
                <label> Titre </label>
                <input type="text"
                        required
                        value={titre}
                        onChange= {(e) => setTitre(e.target.value)}/>
                <label>
                Description
                    <textarea 
                    required
                    value={body}
                    onChange= {(e) => setBody(e.target.value)}
                    >
                    </textarea>
                  
                </label>
                <label>
                    <input type="file" 
                    onChange={(e) => {setImageselect(e.target.files);}}/>
                    <button onClick={uploadImage}> Upload</button>
                </label>
                <button> Ajouter </button>
            </form>
        </div>

    )
}

export default Add;