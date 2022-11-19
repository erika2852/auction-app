import React, { Component } from 'react';
import "../css/store.css"

class Storeinfo extends Component{
  render()
  {
    return(
      <>
      
      <div className='main'>
          <h1>물건 목록</h1>
          <div>
            <ProList/>
            <ProList/>
            <ProList/>
          </div>
      </div>
      <BottomMenu/>
      
      </>
    );
  }
}

class ProList extends Component
{
  render()
  {
    return(
      <div className='product'>
        <img className="phoneImage" alt="iPhone_01" src="/img/tsimg.jpg" />
        <div className='list'>
          <div className='text'>닌텐도 스위치</div>
          <div className='text'>b</div>
          <div className='text'>10,000</div>
        </div>
      </div>
    );
  }
}
class BottomMenu extends Component{
  render(){
    return(
      <div className='bottommenu'><h2>fasdf</h2></div>
    );
  }
}

function First() {
    return (
      <div>
        <Storeinfo/>

      </div>
    );
  };

  export default First;