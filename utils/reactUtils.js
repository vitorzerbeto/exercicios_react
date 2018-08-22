import React from 'react'

export const childrenWithProps = (childrens, props) => (
    React.Children.map(childrens, 
        child => (
            React.cloneElement(child, {...props}
        )
    ))
)