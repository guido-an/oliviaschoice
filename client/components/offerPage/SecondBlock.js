import img from '../../images/offer/mewa-offerta-2.jpg'

const SecondBlock = () => {
  return (
    <div className='section-container'>
      <div className='section-left'>
        <h2>Rimuove trucco e impurità per una pelle morbida e levigata.</h2>
        <p>Pulisce delicatamente le impurità come le cellule morte, lo smog e i residui di trucco esfoliando e detergendo in profondità la pelle per renderla più fresca, pulita e compatta. Inoltre, grazie alla sua caratteristica Waterproof, MEWA è comodissimo da risciacquare alla fine del trattamento.</p>
      </div>
      <div className='section-right' />

      <style jsx='true'>{`
          .section-container {
              background-color: #f4f4f2;
              display: flex;
              flex-direction: column-reverse
          }
          .section-right {
              background: url('${img}');
              height: 80vh;
              background-size: cover;
              background-position: center
           }
           .section-left {
               padding: 20px 15px 60px
           }
           @media(min-width: 968px){
               .section-container{
                   display: flex;
                   flex-direction: row

               }
               .section-right {
                   width: 50%;
                   height: 70vh
               }
               .section-left {
                 width: 50%;
                 padding: 60px 
              }
           }
          
          `}
      </style>
    </div>
  )
}

export default SecondBlock
