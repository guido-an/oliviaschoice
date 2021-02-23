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
          width: '100%',
          height: 'auto'
        }}
        src={img}
      />
      <h3>{title}</h3>

      <style jsx>{`
          .category-container {
              box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
              margin: 10px 5px 40px;
              text-align: center;
          }
          .category-container:hover {
            box-shadow: 0px 8px 20px 0 rgba(0,0,0,0.3);
          }
         .category-container h3{
           padding: 20px 0 30px
         }
        
          @media(min-width: 968px){
          .category-container {
            width: 31%;
            margin: 0 auto;
            }
          } 
         
    `}
      </style>
    </div>
  )
}

export default CategoryContainer
