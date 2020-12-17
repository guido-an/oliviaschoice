import ButtonRed from './ButtonRed'
const CategoryContainer = ({ title, img, link }) => {
  return (

    <div
      style={{
        backgroundColor: '#fff'
      }}
      className='category-container'
    >
      <img
        style={{
          width: '120px',
          position: 'relative',
          top: '10px'
        }}
        src={img}
      />
      <h3>{title}</h3>
      <p style={{
        position: 'relative',
        bottom: '10px'
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita ducimus amet laudantium, ab libero?</p>
      <ButtonRed text={title} link={link} />
      <style jsx>{`
          .category-container {
              box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
              border-radius: 4px;
              margin: 10px 20px 40px;
              padding: 20px 10px 40px;
            
          }
          .category-container:hover {
            box-shadow: 0px 8px 20px 0 rgba(0,0,0,0.3);
          }
        
           .category-container p {
             margin-bottom: 30px
          } 
        
          @media(min-width: 968px){
          .category-container {
            padding: 40px 90px 60px;
            width: 46%;
            margin: 20px auto
            }
          } 
         
    `}
      </style>
    </div>
  )
}

export default CategoryContainer
