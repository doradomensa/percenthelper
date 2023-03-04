import React from 'react';
import './App.scss';
import PercentText from './components/PercentText';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      money:0
    }
  }
  render(){

  const percentsComponents=[]
  for(var i=0.95;i<1.05;i=i+0.01){
    percentsComponents.push(<PercentText amount={this.state.money} percent={i}/>);
  }
  return (
    <div className="App">
      <div className='row approw'>
      <div className='col-md-4'></div>
      <div className='col-md-4 mainscreen border-gradient-purple'>
        <div style={{display: 'flex', 'justifyContent': 'space-between'}}>
        <div className='alignedCenter'>
          Enter value:<br/>
        <input name="money" type='number'  onChange={e => this.setState({money:e.target.value})}/>
        </div>
        <table>
          <tr>{percentsComponents}</tr>
        
        </table>
        </div>
      </div>
      <div className='col-md-4'></div>
      </div>
    </div>
  );
  }
}

export default App;
