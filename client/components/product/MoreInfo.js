import { useContext, useEffect, useState } from 'react'

function createMarkup (text) { return { __html: text } };

const MoreInfo = ({ singleProduct }) => {
  const [displayDescription, setDisplayDescription] = useState(true)
  const [displayDetails, setDisplayDetails] = useState(false)
  const [displayHowToUseIt, setHowToUseIt] = useState(false)

  const handleDescription = () => {
    setDisplayDescription(true)
    setDisplayDetails(false)
    setHowToUseIt(false)
  }
  const handleDetails = () => {
    setDisplayDescription(false)
    setDisplayDetails(true)
    setHowToUseIt(false)
  }
  const handleHowToUseIt = () => {
    setDisplayDescription(false)
    setDisplayDetails(false)
    setHowToUseIt(true)
  }

  return (
    <div id='more-info-section'>
      <div className='titles-container'>
        {singleProduct.description &&
          <div className='more-info-item'>
            <h5
              id='description'
              onClick={handleDescription}
              className={displayDescription && 'active-item'}
            >
                 Descrizione
            </h5>
          </div>}

        {singleProduct.details &&
          <div className='more-info-item'>
            <h5
              id='details'
              onClick={handleDetails}
              className={displayDetails && 'active-item'}
            >
                 Informazioni
            </h5>
          </div>}

        {singleProduct.howToUseIt &&
          <div className='more-info-item'>
            <h5
              id='how-to-use-it'
              onClick={handleHowToUseIt}
              className={displayHowToUseIt && 'active-item'}
            >
                 Come Usarlo
            </h5>
          </div>}
      </div>
      <div className='additional-info-tab'>
        {displayDescription &&
          <div
            dangerouslySetInnerHTML={createMarkup(singleProduct && singleProduct.description)}
          />}
        {displayDetails &&
          <div
            dangerouslySetInnerHTML={createMarkup(singleProduct && singleProduct.details)}
          />}
        {displayHowToUseIt &&
          <div
            dangerouslySetInnerHTML={createMarkup(singleProduct && singleProduct.howToUseIt)}
          />}
      </div>
      {/* More styling in _app.js, not working here for dangerouslySetInnerHTML */}
      <style jsx='true'>{`
              .more-info-item {
                width: 33%
              }

              #more-info-section {
               background-color: #f4f4f2;
               padding: 20px 10px 80px;
             }

              #description, #details, #how-to-use-it {
                cursor: pointer;
                font-size: 16px;
                font-weight: 500
              }
              .active-item { 
                color: var(--main-color) !important;
                border-bottom: 3px solid var(--main-color);
                padding-bottom: 5px;
                width: 110px;
                font-weight: 500 !important        
              }
              .titles-container {
                display: flex;
                justify-content: space-evenly;
                margin-bottom: 10px;
              }
              .additional-info-tab {
                background-color: #fff;
                padding: 20px 40px
              }
              #more-info-section ul{
                   display: none !important
                }
                
              @media(min-width: 968px){

                #more-info-section {
                   position: relative;
                   bottom: 120px
             }

                .titles-container {
                  width: 50% ;
                  margin: 0 auto
                }
                .additional-info-tab {
                   background-color: #fff;
                   width: 50% ;
                  margin: 0 auto;
               }  
              }
              
              `}
      </style>
    </div>
  )
}

export default MoreInfo
