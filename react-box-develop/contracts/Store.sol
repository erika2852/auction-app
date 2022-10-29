// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Store{
    mapping(address=>uint) MyproNum;

    function Buyproduct() payable external{
        MyproNum[msg.sender]++;
    }

    function GetMyProNum() view external returns(uint)
    {
        return MyproNum[msg.sender];
    }
}