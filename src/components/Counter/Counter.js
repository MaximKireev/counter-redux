import {connect} from "react-redux";
import React from "react";
import {bindActionCreators} from "redux";
import * as actions from '../actionCreators/actionCreators'

const Counter = ({counter, inc, dec, rnd, cln}) => {
    return(
        <div>
            <h2 className="counter">{`Counter: ${counter}`}</h2>
            <button className="btnINC"
                    onClick={inc}>+</button>
            <button className="btnDEC"
                    onClick={dec}>-</button>
            <button className="btnRND"
                    onClick={rnd}
            >RND</button>
            <button className="btnCLN"
                    onClick={cln}
            >CLEAN!</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

