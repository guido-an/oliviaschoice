import Link from 'next/link'
const ButtonRed = ({ link, text, paddingSides, color }) => {
  return (
    <div>
      <Link href={`/${link}`}>
        <a className={color === 'red' ? 'red-button' : 'white-button'}>
          {text}
        </a>
      </Link>
      <style jsx>{`
      .red-button{
        border: 1px solid #8c2b2f;
        color: #fff;
        font-weight: 400;
        font-size: 12px;
        padding: 10px ${paddingSides};
        height: 40px;
        border-radius: 4px;
        letter-spacing: 1px;
        box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
        transition: 0.3s;
        background-color: #8c2b2f;
        
      }
      .red-button:hover {
        color: #8c2b2f;
        background-color: #fff;
        font-weight: 500;        
        border: 1px solid #8c2b2f
      }
      .white-button{
        border: 1px solid #8c2b2f;
        color: #8c2b2f;
        font-weight: 500;
        font-size: 12px;
        padding: 10px ${paddingSides};
        height: 40px;
        border-radius: 4px;
        letter-spacing: 1px;
        box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
        transition: 0.3s;
        background-color: #fff;
        
      }
      .white-button:hover {
        color: #fff;
        background-color: #8c2b2f;
        font-weight: 500;        
        border: 1px solid #8c2b2f
      }

        `}
      </style>
    </div>
  )
}
export default ButtonRed
