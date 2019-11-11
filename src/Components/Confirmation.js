import React from 'react';
import Style from './Login.module.css';
import { isLogins } from '../utils';
class Confirm extends React.Component {
  constructor(props){
    super(props);
    this.cancel = this.cancel.bind(this);
  }
      cancel(){
      isLogins()?  
      this.props.history.push('/Studenthome'): this.props.history.push('/');
    }
    render(){
 return (
  <div className={Style.confirm}>
    <h3> 170668 Adarsh S S5 Computer Science & Engineering</h3>
    <span>Scholarship Details: E-grantz</span>
    <span>Fee Deadline: 29/08/2019</span>
    <span>Fee: Rs 1700</span><br/>
    <div>
    <br/>
    <span>Fine imposed: Rs 40</span>
    <span className={Style.finedetails} title="Fine for last 7 days">?</span>
    </div>
    <span>Total Amount: Rs 1740</span>
    <div>
    <button className={Style.button5} type="Submit"> Confirm </button>
    <button className={Style.button6} type="Submit" onClick={this.cancel}> Cancel </button>
    </div>
</div>

  );}
}

export default Confirm;