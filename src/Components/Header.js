import { LOGO_URL } from "../Utils/constant";


const Header = () => {
  return (
    <div className='absolute z-20 w-56'>
      <img src={LOGO_URL} alt="Netflix Logo" />
    </div>

  )
}

export default Header;
