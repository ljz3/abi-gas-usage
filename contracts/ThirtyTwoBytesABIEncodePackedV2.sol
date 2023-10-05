// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

contract ThirtyTwoBytesABIEncodePackedV2 {
    function testAbiEncodePacked32Bytes() public returns (bytes memory) {
        return abi.encodePacked(uint256(100));
    }
}
