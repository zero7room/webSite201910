import React from 'react'
import PropTypes from 'prop-types'


const Container = ({ children}) => <div style={{height:"350px"}}>
      {children}
</div>

Container.propTypes = {
  children: PropTypes.element.isRequired,
  ratio: PropTypes.number,
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number,
}

export default Container
