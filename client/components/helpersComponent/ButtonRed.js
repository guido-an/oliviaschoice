import Link from 'next/link'
const ButtonRed = ({ link, text, bg, color }) => {
  return (
    <div>
      <Link href={`/${link}`}>
        <a className='red-button'>
          {text}
        </a>
      </Link>
      <style jsx>{`
      .red-button{
        border: 1px solid #8c2b2f;
        color: #8c2b2f;
        font-weight: 600;
        font-size: 12px;
        padding: 10px 25px;
        height: 40px;
        border-radius: 4px;
        letter-spacing: 0.8px;
        box-shadow: 0px 4px 10px 0 rgba(0,0,0,0.3);
        width: 200px;
        transition: 0.3s;
      }
      .red-button:hover {
        color: #fff;
        background-color: #8c2b2f;
      }

        `}
      </style>
    </div>
  )
}
export default ButtonRed
