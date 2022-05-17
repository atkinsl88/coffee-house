import React from 'react'

class Menu extends React.Component {
  render() {
    return (
      <section>
        <div id="menus" className="container">
          <h2>Menu</h2>
          <p>{this.props.menus.text}</p>
          {this.props.menus.links.map(link => (<a key={link}>{link}</a>))}
        </div>
      </section>
    )
  }
}

export default Menu