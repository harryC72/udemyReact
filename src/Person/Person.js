import React from 'react'
import PropTypes from 'prop-types'

function Person({name, age, children}) {
  return (
    <div>
      <h1>Here comes {name} who is {age} years old</h1>
      <div>{children}</div>
    </div>
  )
}

Person.propTypes = {

}

export default Person

