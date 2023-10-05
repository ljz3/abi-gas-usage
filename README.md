# Deep Dive into ABI Encoding & Decoding: Techniques, Gas Efficiency, and Key Security Considerations

This repository contains the code sample for measuring gas usages of different usages of ABI encoding used in the article, "Deep Dive into ABI Encoding & Decoding: Techniques, Gas Efficiency, and Key Security Considerations".

TODO: Insert article link here

## Structure

- `contracts`: Comparison of many different usages of ABI encoding
- `test`: Tests for contracts.
- `hardhart.config.js`: Hardhat configuration, including compiler optimization options.

## Scripts

- `yarn compile`: Compile the contracts.
- `yarn test`: Run the tests and produce a gas usage report.

## Gas Usage Chart

### Gas Usage for each function call

    | Contract                          | Method                                            | Gas    |
    |-----------------------------------|---------------------------------------------------|--------|
    | Arr1ByteABIEncode                 | testAbiEncodeArr1Byte (1 Element)                 |  22897 |
    | Arr1ByteABIEncodePacked           | testAbiEncodePackedArr1Byte (1 Element)           |  22688 |
    | Arr1ByteABIEncode                 | testAbiEncodeArr1Byte (100 Element)               |  67638 |
    | Arr1ByteABIEncodePacked           | testAbiEncodePackedArr1Byte (100 Element)         |  67424 |
    | Arr32BytesABIEncode               | testAbiEncodeArr32Bytes (1 Element)               |  22827 |
    | Arr32BytesABIEncodePacked         | testAbiEncodePackedArr32Bytes (1 Element)         |  22618 |
    | Arr32BytesABIEncode               | testAbiEncodeArr32Bytes (100 Element)             |  60638 |
    | Arr32BytesABIEncodePacked         | testAbiEncodePackedArr32Bytes (100 Element)       |  60424 |
    | NoPaddingABIEncodePackedV1        | testAbiEncodePackedNoPadding                      |  21636 |
    | NoPaddingABIEncodePackedV2        | testAbiEncodePackedNoPadding                      |  21519 |
    | PaddingABIEncodeV1                | testAbiEncodePadding                              |  21523 |
    | PaddingABIEncodeV2                | testAbiEncodePadding                              |  21539 |
    | ThirtyTwoBytesABIEncodePackedV1   | testAbiEncodePacked32Bytes                        |  21523 |
    | ThirtyTwoBytesABIEncodePackedV2   | testAbiEncodePacked32Bytes                        |  21539 |
    | ThirtyTwoBytesABIEncodeV1         | testAbiEncode32Bytes                              |  21523 |
    | ThirtyTwoBytesABIEncodeV2         | testAbiEncode32Bytes                              |  21539 |


### Gas Usage for contract deployments

    | Contract                         |  Gas        |
    | -------------------------------- | ----------- |
    | Arr1ByteABIEncode                |    174139   |
    | Arr1ByteABIEncodePacked          |    171113   |
    | Arr32BytesABIEncode              |    167459   |
    | Arr32BytesABIEncodePacked        |    164421   |
    | NoPaddingABIEncodePackedV1       |    105559   |
    | NoPaddingABIEncodePackedV2       |    100595   |
    | PaddingABIEncodeV1               |    105127   |
    | PaddingABIEncodeV2               |    102329   |
    | ThirtyTwoBytesABIEncodePackedV1  |    105127   |
    | ThirtyTwoBytesABIEncodePackedV2  |    102329   |
    | ThirtyTwoBytesABIEncodeV1        |    105127   |
    | ThirtyTwoBytesABIEncodeV2        |    102329   |
