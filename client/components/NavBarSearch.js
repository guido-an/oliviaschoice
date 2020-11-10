import Link from 'next/link'

const NavBarSearch = () => {
  return (
    <div>
      <Link href='/cerca'>
        <div style={{
          display: 'flex',
          position: 'relative'
        }}
        >
          <p style={{
            color: '#222',
            fontWeight: '700',
            position: 'relative',
            bottom: '16px',
            right: '4px',
            letterSpacing: '1px'
          }}
          >CERCA
          </p>
          <p style={{
            width: '60px',
            height: '2px',
            borderBottom: '2px solid black'
          }}
          />
        </div>
      </Link>

    </div>
  )
}
export default NavBarSearch
