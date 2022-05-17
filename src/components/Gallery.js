import React from 'react'

class Gallery extends React.Component {
  render() {
    return (
      <section>
        <div id="gallery" className="container">
          <h2>Gallery</h2>
          <div className="image-one"></div>
          <div className="image-two"></div>
          <div className="image-three"></div>
        </div>
      </section>
    )
  }
}

export default Gallery