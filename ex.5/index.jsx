import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Zerbeto">
        <Member name="Vitor" />
        <Member name="Ana" />
        <Member name="Lais" />
        <Member name="Junior" />
        <Member name="Marli" />
    </Family>
, document.getElementById('app'))