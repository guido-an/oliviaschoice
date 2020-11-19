import React from "react";
import ImageUploading from "react-images-uploading";
import storage from "../../firebase/index";
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const imageUpload = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onImageSave = (e) => {
    // data for submit
    
    const saveImages = images
    saveImages.forEach(image => {
        handleUpload(image)
      })
  };

  const putImageOnProduct = async (url, name) => {
    const response = await service.post('/api/product/update', {
        url: url,
        name:name
      })

  }

  const handleUpload = imageToUpload => {
    if (imageToUpload) {
      const image = imageToUpload.file;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
       /*  snapshot => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          //this.setState({ progress });
        },
        error => {
          // Error function ...
          console.log(error);
        }, */
        () => {
          // complete function ...
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                putImageOnProduct(url, image.name)
            });
        }
      );
    }
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <button onClick={() => onImageSave()}>Save</button>
    </div>
  );
}

export default imageUpload
