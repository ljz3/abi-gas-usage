// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

contract PaddingABIEncodeV2 {
    function testAbiEncodePadding() public returns (bytes memory) {
        return abi.encode(uint8(1));
    }
}
