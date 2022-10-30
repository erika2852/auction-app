import React, { Component } from 'react'
import Store from '../build/contracts/Store.json'
import getWeb3 from './utils/getWeb3'


class main extends Component {
constructor(props) {
super(props)

this.state = {
web3: null,
storeInstance:null, //storeInstance 추가
myAccount:null, //myAccount 추가

//새로운추가 코드
myProNum:0 // 나의 콜라 개수저장 변수 myCokeNum추가
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

this.state.web3.eth.getAccounts((error,accounts)=>{
if(!error){
simpleStore.deployed().then(instance=>{
this.setState({storeInstance:instance,myAccount:accounts[0]})
this.getProNum();

       })
     }
   })

 }

BuyPro=()=>{
console.log("성공")
this.state.storeInstance.BuyPro({
from:this.state.myAccount,
value:this.state.web3.toWei(1,"ether")
   })
 }

 getProNum=()=>{
this.state.storeInstance.getProNum().then(result=>{
this.setState({myProNum: result.toNumber()});
   });
 }


render() {
return (
<div>
<h1>Dapp 테스트 </h1>
<div>+1 (1이더) : <button onClick={this.BuyPro}>클릭</button></div>
<div>총 개수 : {this.state.myProNum}</div>
</div>
   );
 }
}

export default main