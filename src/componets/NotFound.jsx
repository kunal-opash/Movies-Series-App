import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      {/* <img src='https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png' height="500px" width="700px"/> */}
      <Link to="/"><p>Oops.!!!Page not Found</p></Link>
    </div>
  )
}

export default NotFound
