import heroImg from '../../images/hero-img.jpg'

const FirstBlock = () => {
  return (
    <div className='section-container'>
      <div className='section-left' />
      <div className='section-right'>
        <h2>La spazzola per la pulizia del viso in puro silicone soft-touch</h2>
        <p>Le morbide e sottili setole in silicone rendono MEWA confortevole e delicata sul viso con punti di contatto più sottili nell’area di detergenza per fronte, viso e guance, e più spessi nella zona superiore frontale dedicata alle zone difficili da raggiungere come il contorno del naso. Grazie alla sua tecnologia a vibrazioni con tre livelli di intensità MEWA elimina le impurità per una detersione più profonda.</p>
      </div>
      <style jsx='true'>{`
          .section-container {
              background-color: #f4f4f2
          }
          .section-left {
              background: url('${heroImg}');
              height: 60vh;
              background-size: cover;
           }
           .section-right {
               padding: 0 15px 20px
           }
           @media(min-width: 968px){
               .section-container{
                   display: flex
               }
               .section-left{
                   width: 50%;
                   height: 70vh
               }
               .section-right {
                 width: 50%;
                 padding: 60px 
              }
           }
          
          `}
      </style>
    </div>
  )
}

export default FirstBlock
