import cartIcon from '../images/icons/shopping-cart-icon.png'
const Values = () => {
  return (
    <div className='values'>
      <span className='overtitle'>LOREM ISPUM SIN AMET</span>
      <h2 className='title-section'>LOREM ISPUMN DOLORET SENT AT</h2>
      <div className='icons-container'>
        <div className='icon-container'>
          <img src={cartIcon} />
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className='icon-container'>
          <img src={cartIcon} />
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className='icon-container'>
          <img src={cartIcon} />
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

      </div>
      {/* <style jsx>{`
        .values {
            padding: 40px 80px 60px;
            margin: 80px 10px 60px;
            border-radius: 4px;
            margin-bottom: 40px;
            box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4);
            background-color: #fafafa
        }
        .values h3 {
            color: #222;
        }
        .icons-container {
          margin-top: 40px
        }
        .icon-container img {
            box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
            padding: 25px;
            border-radius: 50%
        }
        .icon-container p {
            position: relative;
            bottom: 15px;
            margin-bottom: 40px
        }

        @media(min-width:968px){
            .values {
              padding: 60px 80px 80px;
              margin: 120px 85px;
              border-radius: 4px;
              margin-bottom: 40px;
            }
            .icons-container{
                display: flex
            }
            .icons-container {
                margin-top: 60px
            }
            .icon-container {
                width: 30%;
                margin: 0 auto
            }
        }
        `}
      </style> */}
      <style jsx>{`
        .values {
            margin-top: 140px;
            padding: 40px 10px 60px;
            background-color: #8c2b2f;
        }

        .values h2, span, p  {
            color: #fff
        } 

        .values h3{
            color: #fff !important;
            font-weight: 600
        }
        .values p {
            font-weight: 300;
           letter-spacing: 0.2px;
           line-height: 26px
        }

        .icons-container {
          margin-top: 40px
        }
        .icon-container img {
            padding: 25px;
            border-radius: 50%;
            background-color: #FDFAFA;

        }
        .icon-container p {
            position: relative;
            bottom: 15px;
            margin-bottom: 40px
        }

        @media(min-width:968px){
            .values {
                padding: 60px 80px 80px;
                margin: 120px 85px;
                border-radius: 4px;
                margin-bottom: 40px;
                box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4)
            }
            .icons-container{
                display: flex
            }
            .icons-container {
                margin-top: 60px
            }
            .icon-container {
                width: 30%;
                margin: 0 auto
            }
        }

        `}
      </style>
    </div>
  )
}

export default Values
