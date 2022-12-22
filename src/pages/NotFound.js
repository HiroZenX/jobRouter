import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div> 
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum, fugiat facilis, repudiandae sint voluptate nostrum beatae aliquid esse ullam consectetur vel dolor perspiciatis, suscipit quia? Similique quam dolore consectetur! Asperiores veritatis eos libero assumenda! Voluptate, harum impedit cum amet, ab eum recusandae aliquam, commodi nulla architecto officiis eveniet.</p>

        <p>Go to the <Link to="/">Homepage</Link></p>
    </div>

  )
}
