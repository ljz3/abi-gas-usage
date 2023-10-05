// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

contract Arr1ByteABIEncodePacked {
    function testAbiEncodePackedArr1Byte(uint8[] memory arr) public returns (bytes memory) {
        return abi.encodePacked(arr);
    }
}
