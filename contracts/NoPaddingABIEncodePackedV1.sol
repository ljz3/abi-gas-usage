// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

pragma abicoder v1;

contract NoPaddingABIEncodePackedV1 {
    function testAbiEncodePackedNoPadding() public returns (bytes memory) {
        return abi.encodePacked(uint8(1));
    }
}
