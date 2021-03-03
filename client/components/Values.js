import icon1 from '../images/icons/non-e-una-questione-di-costi.png'
import icon2 from '../images/icons/come-uno-di-famiglia.png'
import icon3 from '../images/icons/ci-mettiamo-il-cuore.png'

const Values = () => {
  return (
    <div className='values'>
      <span className='overtitle'>SCEGLI OLIVIA'S CHOICE PERCHÈ</span>
      <h2 className='title-section'>ECCO PERCHÈ MOLTI CLIENTI CI SCELGONO</h2>
      <div className='icons-container'>
        <div className='icon-container'>
          <img src={icon1} />
          <h3>Non è una question di costi</h3>
          <p>Tutti i prodotti che troverai nel nostro shop sono di altissima qualità e te li proponiamo al migliore prezzo possibile, perché la qualità arrivi ovunque.</p>
        </div>
        <div className='icon-container'>
          <img src={icon2} />
          <h3>Come uno di famiglia</h3>
          <p>Ci sono oltre 200 prodotti in ben 10 categorie diverse perché crediamo che ognuno di noi abbiamo bisogno di prodotti diversi per stare bene.</p>
        </div>
        <div className='icon-container'>
          <img src={icon3} />
          <h3>Ci mettiamo il cuore</h3>
          <p>Garantiamo la qualità dei nostri prodotti, la consegna tracciata in 24/48 ore in tutta Italia e la disponibilità del nostro customer care sempre al tuo servizio.</p>
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
            margin-top: 100px;
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
            padding: 10px;
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
                padding: 60px 80px 20px;
                margin: 120px 85px;
                border-radius: 4px;
                margin-bottom: 40px;
                box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.4);
                position: relative;
                bottom: 160px;
                z-index: 89
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
