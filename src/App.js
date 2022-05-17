import React from 'react'
import image from './assets/hero-image.jpg'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Menu from './components/Menu'
import About from './components/About'
import Location from './components/Location'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    menus: {
      links: [
        'Breakfast',
        'Brunch',
        'All Day'
      ]
  }

  render() {
    return (
      
      <main>

        <Navigation />

        <Hero />

        <Gallery />

        <Menu 
          menus={this.state.menus}
        />

        <About 
          about={this.state.about}
        />

        <Location />

        <Footer 
          footer={this.state.footer}
        />

      </main>

    )
  }
}

export default App
