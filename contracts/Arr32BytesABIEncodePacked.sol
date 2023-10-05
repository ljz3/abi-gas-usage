// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

contract Arr32BytesABIEncodePacked {
    function testAbiEncodePackedArr32Bytes(uint256[] memory arr) public returns (bytes memory) {
        return abi.encodePacked(arr);
    }
}
