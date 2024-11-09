import React from 'react'
import { Card } from 'react-bootstrap';
const MovieCard = (props) => {
  // console.log(props);

  const {Poster,Title,Year}=props.moviedata
    
  return (
    <>
      <div>
                    <Card  className='border-0' style={{ width: '15rem'}}>
                <Card.Img variant="top" className='' height={260} src={Poster} />
                <Card.Body className='mb-0 mt-0'>
                  <p className='fw-semibold text-white'>{Title}</p>
                  <p className='mb-0'>{Year}</p>
                </Card.Body>
              </Card>
              </div>
    </>
  )
}

export default MovieCard