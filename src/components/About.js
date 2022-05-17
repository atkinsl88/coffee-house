import React from 'react'

class About extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <h2>About</h2>
          <p>{this.props.about.text}</p>
        </div>
      </section>
    )
  }
}

export default About