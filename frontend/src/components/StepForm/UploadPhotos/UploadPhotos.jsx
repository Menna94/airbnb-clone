import React ,{useState} from 'react';
import './UploadPhotos.css'

export const UploadPhotos = ({formData , setForm ,navigation}) => {
    const [image , setImage] = useState('')
    const [loading , setloading] = useState(false)

    const uploadImage = async e =>{
        const files = e.target.files
        const data = new FormData()
        data.append('file' , files[0])
        ///////////'aalaa' from back ??
        data.append('upload_present' ,'aalaa')
        setloading(true)
        const res = await fetch (
            'http//////////////////api url',
            {
                method:'post',
                body:data
            }
        )
        const file = await res.json()
        //img url
        setImage(file.secure_url)
        setloading(false)
    }

    return (

        <div class="container">
            <div class="row description">
                <div class="col-md-6 offset-md-3">
                    <h4 className="price_p">Liven up your listing with photos</h4>
                    <p className="price_p">Take photos using a phone or camera. Upload at least one photo to publish your listing and drag to reorder however you like. You can always add or edit your photos later.</p>
                    <form >
                        <div class="form-group">
                            <div class=" uploadInput">
                                <input  type="file" 
                                name="file"
                                placeholder="upload image"
                                onChange={uploadImage}
                                />
                                {loading ? (
                                    <h3>loading..........</h3>
                                ):(
                                <img src={image} style={{width:'300 px'}}></img>
                                )}
                            </div>
                        </div>
                        {/* <button type="submit" class="btn btn_start" >next</button> */}
                    </form>
                </div>
            </div>
        </div>
        
    )
}
