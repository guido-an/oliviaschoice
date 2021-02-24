import Link from 'next/link'

const CategoryContainer = ({ title, img, link }) => {
  return (
    <Link href={link}>
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
              cursor: pointer;
        
          }
          .category-container:hover {
            box-shadow: 0px 8px 20px 0 rgba(0,0,0,0.3);
          }
         .category-container h3{
           padding-bottom: 30px
         }
        
          @media(min-width: 968px){
          .category-container {
            width: 31%;
            margin: 0 auto;
            }
          .category-container h3{
           padding-bottom: 10px
         }
          } 
         
    `}
        </style>
      </div>
    </Link>
  )
}

export default CategoryContainer
