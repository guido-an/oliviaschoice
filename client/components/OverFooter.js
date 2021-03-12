import ButtonRed from './helpersComponent/ButtonWhite'

const OverFooter = () => {
  return (
    <div className='overfooter'>
      <div>
        <span className='overtitle'>HAI BISOGNO DI ASSISTENZA?</span>
        <h2 className='title-section'>CONTATTA IL NOSTRO CUSTOMER CARE</h2>
        <p>Saremo felici di risolvere ogni tuo problema.</p>
      </div>
      <div className='btn-overfooter'>
        <ButtonRed
          text='Mettiti in contatto con noi'
          link='faq'
          paddingSides='60px'
        />
      </div>
      <style jsx>{`
          .overfooter {
            margin-top: 140px;
            padding: var(--container-padding);
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
                margin: var(--container-margin);
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
