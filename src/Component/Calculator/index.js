import React from "react";
import styles from "./calculator.module.css";
import { connect } from "react-redux";
import { getItem,solveItem,deleteItem } from "../../action";
import { bindActionCreators } from "redux";
class Calculator extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.container}>
                <div>
                    <h1>CALCULATOR</h1>
                </div>
                <div className={styles.inputbox}>
              {this.props.Item}
                </div>
                <div className={styles.tablebox}>
                    <table className={styles.table}>
                        <tbody >
                            <tr>
                                <td>
                                    <button onClick={()=>this.props.getItem('*')} className={styles.oprater}>*</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('+')}  className={styles.oprater}>+</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('-')}  className={styles.oprater}>-</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('/')}  className={styles.oprater}>/</button>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={()=>this.props.getItem('1')}  className={styles.number}>1</button>
                                </td>
                                <td>
                                    <button  onClick={()=>this.props.getItem('2')} className={styles.number}>2</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('3')}  className={styles.number}>3</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('4')}  className={styles.number}>4</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={()=>this.props.getItem('5')}  className={styles.number}>5</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('6')}  className={styles.number}>6</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('7')}  className={styles.number}>7</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('8')}  className={styles.number}>8</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={()=>this.props.getItem('9')}  className={styles.number}>9</button>
                                </td>
                                <td>
                                    <button onClick={()=>this.props.getItem('0')}  className={styles.number}>0</button>
                                </td>
                                <td><button onClick={()=>this.props.solveItem(this.props.Item)} className={styles.equal}>=</button></td>
                                <td><button onClick={()=>this.props.deleteItem(this.props.Item)} className={styles.delete}>x</button></td>
                               
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
}

const mapStateToProps=(store)=>{
    return{
       Item:store.todolist
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({getItem,solveItem,deleteItem},dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(Calculator);