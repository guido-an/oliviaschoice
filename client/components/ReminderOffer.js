import ButtonRed from './helpersComponent/ButtonRed'

const ReminderOffer = () => {
  return (
    <div className='reminder-offer'>
      <div>
        <span className='overtitle'>LOREM ISPUM SIN AMET</span>
        <h2 className='title-section'>LOREM ISPUMN DOLORET SENT AT?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, excepturi.</p>
      </div>
      <div className='btn-reminder-offer'>
        <ButtonRed
          text='Offerta del Mese'
          link='offerta'
          paddingSides='60px'
          color='red'
        />
      </div>
      <style jsx>{`
          .reminder-offer {
            margin-top: 140px;
            padding: var(--container-padding);
            background-color: #e9d0cd;
          }
            h2, span, p {
            color: #222 !important
          }
          p {
            font-weight: 300
          }
          .btn-reminder-offer {
                margin-top: 40px
            }

          @media(min-width: 968px){
            .reminder-offer {
                margin: var(--container-margin);
                border-radius: 4px;
                margin-bottom: 40px;
                box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4);
                display: flex;
                justify-content: space-evenly
            }
            .btn-reminder-offer {
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

export default ReminderOffer
