import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = (props) =>  {
  
    return (
        <div>
            <h1>{props.counter.number}</h1>
            <input type="number" value={props.counter.step}
                onChange={props.stepChanged}/>

            <button onClick={props.dec}>Dec</button>
            <button onClick={props.inc}>Inc</button>
        </div>
    )
}

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)