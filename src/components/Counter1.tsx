import * as React from 'react';
import {connect} from 'react-redux';
import {Counter1, Store} from '../types';
import actions from '../store/actions/counter';
interface IProps {
    number: number,
    increment: any,
    incrementDelay:any,
    decrement: any,
}

class Counter extends React.Component<IProps> {
    render(){
        let {number,increment, decrement, incrementDelay} = this.props;
        return (
            <div>
               <p>{number}</p>
               <button
                onClick={increment}
               >+</button>
               <br/>
               <button
                onClick={incrementDelay}
               >1s后+1</button>
               <br/>
                <button
                onClick={decrement}
               >-</button>
            </div>
        );
    }
}
let mapStateToProps = function(state:Store):Counter1{
    return state.counter1;
}
export default connect(
    mapStateToProps,
    actions
)(Counter)