import React from 'react'
import PropTypes from 'prop-types'
import './layout-form-grid.css'

const LayoutFormGrid = ({onSubmit, children, ...rest}) => (
    <form onSubmit={onSubmit} {...rest}>
        {children}
    </form>
);

LayoutFormGrid.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutFormGrid;
