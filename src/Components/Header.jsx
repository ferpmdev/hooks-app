import { useState } from "react"


const Header = () => {
  const [darkmode, setDarkmode] = useState(false);
  const handleClick = () => {
    setDarkmode(!darkmode)
  }

  return (
    <div className="header">
      <h4>ReactHooks</h4>
      <button type="button" onClick={handleClick}>{darkmode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  )
}

export default Header