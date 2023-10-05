// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

contract ThirtyTwoBytesABIEncodeV2 {
    function testAbiEncode32Bytes() public returns (bytes memory) {
        return abi.encode(uint256(100));
    }
}
