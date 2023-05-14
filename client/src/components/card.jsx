import React from 'react';
import '../style.css';

const card = ({val}) => {
  
  return (
    <>
    <img src={val.imageURL} alt="" width={300} height={200} />
                  <h3>{val.name}haiii</h3>
                  {/* <h5>{val.headline}</h5>
                  <p>{val.primaryText}</p>
                  <p>{val.description}</p>
                  <a href={val.url}> {val.name} </a> */}
    </>
  )
}

export default card;