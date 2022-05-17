import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a>Gallery</a></li>
            <li><a>Menu</a></li>
            <li><a>About</a></li>
            <li><a>Location</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation