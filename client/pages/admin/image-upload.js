import React, { useEffect, useState } from 'react'
import ImageUploading from "react-images-uploading";
import storage from "../../firebase/index";
import axios from 'axios'
import Link from 'next/link'

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const imageUpload = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1000;
  useEffect(() => {
    // Create an scoped async function in the hook
    async function checkIfAdmin () {
      try {
        const res = await service.get('/admin/get-admin')
        if (res.data.admin) {
          setProceed(true)
        } else {
          router.push('/')
        }
      } catch (e) {
        console.log(e)
      }
    }
    // Execute the created function directly
    checkIfAdmin()
  }, [])


  const onChange = (imageList) => {
    setImages(imageList)
  }
  React.useEffect(() => {
    // Create an scoped async function in the hook
    async function checkIfAdmin () {
      try {
        const res = await service.get('/admin/get-admin')
        if (res.data.admin) {
          setProceed(true)
        } else {
          router.push('/')
        }
      } catch (e) {
        console.log(e)
      }
    }
    // Execute the created function directly
    checkIfAdmin()
  }, [])

  const onImageSave = (e) => {
    // data for submit

    const saveImages = images
    saveImages.forEach(image => {
      handleUpload(image)
    })
  }

  const putImageOnProduct = async (url, name) => {
    const response = await service.post('/api/product/update', {
      url: url,
      name: name
    })
  }

  const handleUpload = imageToUpload => {
    if (imageToUpload) {
      const image = imageToUpload.file
      const uploadTask = storage.ref(`images/${image.name}`).put(image)
      uploadTask.on(
        'state_changed',
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
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              putImageOnProduct(url, image.name)
            })
        }
      )
    }
  }

  return (
    <div>
      <style jsx>{`
              .upload-block{
                margin: 0 5vw;
              }
              .link-btn{
                color: rgb(140, 43, 47);
                font-weight: 500 !important;
                display: block
                margin-left: 5vw;
              }
              .upload-btn{
                  background: #fff;
                  border-radius: 10px;
                  width: 79%;
                  padding: 3%;
                  font-size: 20px;
                  margin-bottom: 25px;
              }

              .remove-btn{
                  background: #f44336;
                  border-radius: 10px;
                  width: 20%;
                  padding: 3% 0;
                  font-size: 20px;
                  border-color: red;
                  color: #fff;
              }

              .image-item{
                  text-align: center;
              }

              img{
                  width: 400px;
              }

              .image-item__btn-wrapper{
                  position: relative;
                  top: 20px;
                  margin-right: auto;
                  text-align: right;
                  margin-left: auto;
                  width: 400px;
              }

              .remove-image {
                  position: absolute;
                  top: -30px;
                  right: -10px;
                  border-radius: 10em;
                  padding: 2px 6px 3px;
                  text-decoration: none;
                  font: 700 21px/20px sans-serif;
                  background: #555;
                  border: 3px solid #fff;
                  color: #FFF;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 2px 4px rgba(0,0,0,0.3);
                    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
                    -webkit-transition: background 0.5s;
                    transition: background 0.5s;
              }
              .remove-image:hover {
                  background: #E54E4E;
                    padding: 3px 7px 5px;
                    top: -31px;
                  right: -11px;
              }
              .remove-image:active {
                  background: #E54E4E;
                    top: -30px;
                  right: -11px;
              }

              .save-btn{
                  position: -webkit-sticky;
                  position: sticky;
                  bottom: 10px;
                  background: #008CBA;
                  color: #fff;
                  padding: 10px 50px;
                  border-color: #008CBA;
                  border-radius: 10px;
                  font-size: 20px;
              }
  `}
      </style>
      <div className='upload-block'>
        <Link href='/admin/private' as='/admin/private'>
          <p className='link-btn'> Back to private area</p>
        </Link>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey='data_url'
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
            <div className='upload__image-wrapper'>
              <button
                className='upload-btn'
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here the images
              </button>
              &nbsp;
              <button className='remove-btn' onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className='image-item'>
                  <p>{image.name}</p>
                  <div className='image-item__btn-wrapper'>
                    <button className='remove-image' onClick={() => onImageRemove(index)}>X</button>
                  </div>
                  <img src={image.data_url} alt='' width='100' />
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <button className='save-btn' onClick={() => onImageSave()}>Save</button>
      </div>

    </div>
  )
}

export default imageUpload
