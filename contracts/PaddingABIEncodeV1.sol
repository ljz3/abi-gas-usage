// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

pragma abicoder v1;

contract PaddingABIEncodeV1 {
    function testAbiEncodePadding() public returns (bytes memory) {
        return abi.encode(uint8(1));
    }
}
