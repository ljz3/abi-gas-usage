// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

pragma abicoder v1;

contract ThirtyTwoBytesABIEncodePackedV1 {
    function testAbiEncodePacked32Bytes() public returns (bytes memory) {
        return abi.encode(uint256(100));
    }
}
