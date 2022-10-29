import React, { Component } from 'react'
import Store from '../build/contracts/Store.json'
import getWeb3 from './utils/getWeb3'

class App extends Component {
constructor(props) {
super(props)

this.state = {
web3: null,
storeInstance:null, //storeInstance 추가
myAccount:null, //myAccount 추가

//새로운추가 코드
myCokeNum:0 // 나의 콜라 개수저장 변수 myCokeNum추가
   }
 }

componentWillMount() {
getWeb3
   .then(results => {
this.setState({
web3: results.web3
     })

this.instantiateContract()
   })
   .catch(() => {
console.log('Error finding web3.')  
   })
 }

instantiateContract() {

const contract = require('truffle-contract')
const simpleStore = contract(Store)
simpleStore.setProvider(this.state.web3.currentProvider)

//아래를 추가해주시면 됩니다.
this.state.web3.eth.getAccounts((error,accounts)=>{
if(!error){
simpleStore.deployed().then(instance=>{
this.setState({storeInstance:instance,myAccount:accounts[0]})
this.GetMyProNum();
       })
     }
   })

 }

 Buyproduct=()=>{
console.log("##성공")
this.state.storeInstance.Buyproduct({
from:this.state.myAccount,
value:this.state.web3.toWei(20,"ether")
   })
 }

GetMyProNum=()=>{
this.state.storeInstance.GetMyProNum().then(result=>{
this.setState({myCokeNum: result.toNumber()});
   });
 }

render() {
return (
<div>
<h1>메타마스크 연결 테스트</h1>
<div>테스트 +1(20이더) : <button onClick={this.Buyproduct}>클릭</button></div>
<div>현재 개수 : {this.state.myCokeNum}</div>
</div>
   );
 }
}

export default App