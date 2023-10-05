// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

contract NoPaddingABIEncodePackedV2 {
    function testAbiEncodePackedNoPadding() public returns (bytes memory) {
        return abi.encodePacked(uint8(1));
    }
}
