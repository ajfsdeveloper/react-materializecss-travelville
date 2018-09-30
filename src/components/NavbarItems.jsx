import React from 'react'

const items = [
  { url: 'home', text: 'Home' },
  { url: 'search', text: 'Search' },
  { url: 'popular', text: 'Popular Places' },
  { url: 'gallery', text: 'Gallery' },
  { url: 'contact', text: 'Contact' }
]

const NavbarItems = () => {
  return (
    <React.Fragment>
      {items.map(item => (
        <li key={item.url}>
          <a href={`#${item.url}`}>{item.text}</a>
        </li>
      ))}
    </React.Fragment>
  )
}

export default NavbarItems
