import heroImg from '../../images/hero-img.jpg'

const SecondBlock = () => {
  return (
    <div className='section-container'>
      <div className='section-left'>
        <h2>Lorem ipsum doloret sin amet</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi expedita vel suscipit eum itaque atque numquam quisquam error, laborum in mollitia repellat perspiciatis esse amet illum aperiam provident impedit, fugiat illo ducimus porro! Sit, ab. Consequuntur aspernatur amet voluptatum sit maxime nisi dolores fugit iure ratione at nobis, minima possimus assumenda nesciunt illo omnis dicta modi nemo porro. Sequi laudantium quas atque voluptas incidunt ad. Cupiditate suscipit autem sunt.</p>
      </div>
      <div className='section-right' />
      <style jsx='true'>{`
          .section-container {
              background-color: #f4f4f2;
              display: flex;
              flex-direction: column-reverse
          }
          .section-right {
              background: url('${heroImg}');
              height: 60vh;
              background-size: cover;
           }
           .section-left {
               padding: 0 15px 20px
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
