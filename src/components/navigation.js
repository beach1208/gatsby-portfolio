/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const MenuItems = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/blog",
    title: "Work"
  },
  {
    path: "/contact",
    title: "Contact"
  },
]

const ListLink = (props) => (<li><Link to={props.to}>{props.children}</Link></li>)


class Navigation extends React.Component {
  render () {
    const listMenuItems = MenuItems.map((menuItem, index) => 
      <ListLink key={index} to={menuItem.path}>{menuItem.title}</ListLink>
    )
    return (
      <nav className="site-navigation" sx={navStyle.menu}>
        <ul>
          {listMenuItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation

const navStyle = {
  menu:{
    "ul":{
      bg: "primary",
    },
  }
}