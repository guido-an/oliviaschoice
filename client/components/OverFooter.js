import ButtonWhite from '../components/helpers/ButtonWhite'

const OverFooter = () => {
  return (
    <div className='overfooter'>
      <div>
        <span className='overtitle'>LOREM ISPUM SIN AMET</span>
        <h2 className='title-section'>LOREM ISPUMN DOLORET SENT AT</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, excepturi.</p>
      </div>
      <div className='btn-overfooter'>
        <ButtonWhite text='LOREM IPSUM' link='faq' />
      </div>
      <style jsx>{`
          .overfooter {
            margin-top: 140px;
            padding: 40px 10px 60px;
            background-color: #8c2b2f;
          }
            h2, span, p {
            color: #fff !important
          }
          p {
            font-weight: 300
          }
          .btn-overfooter {
                margin-top: 40px
            }

          @media(min-width: 968px){
            .overfooter {
                padding: 60px 80px 80px;
                margin: 120px 85px;
                border-radius: 4px;
                margin-bottom: 40px;
                box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4);
                display: flex;
                justify-content: space-evenly
            }
            .btn-overfooter {
                margin-top: 60px
            }
            p {
                width: 70%
            }
          }
          
          `}
      </style>
    </div>
  )
}

export default OverFooter
