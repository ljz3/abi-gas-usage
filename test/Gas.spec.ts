import { ethers } from "hardhat";
import {
  Arr32BytesABIEncodePacked,
  Arr32BytesABIEncode,
  Arr1ByteABIEncodePacked,
  Arr1ByteABIEncode,
  NoPaddingABIEncodePackedV1,
  NoPaddingABIEncodePackedV2,
  PaddingABIEncodeV1,
  PaddingABIEncodeV2,
  ThirtyTwoBytesABIEncodePackedV1,
  ThirtyTwoBytesABIEncodePackedV2,
  ThirtyTwoBytesABIEncodeV1,
  ThirtyTwoBytesABIEncodeV2,
} from "../typechain-types";

describe("factories", async function () {
  let ABIEncodeTest: ThirtyTwoBytesABIEncodeV2;
  let ABIEncodeTestV1: ThirtyTwoBytesABIEncodeV1;
  let ABIEncodePaddingTest: PaddingABIEncodeV2;
  let ABIEncodePaddingTestV1: PaddingABIEncodeV1;
  let ABIEncodePackedTest: ThirtyTwoBytesABIEncodePackedV2;
  let ABIEncodePackedTestV1: ThirtyTwoBytesABIEncodePackedV1;
  let ABIEncodePackedNoPaddingTest: NoPaddingABIEncodePackedV2;
  let ABIEncodePackedNoPaddingTestV1: NoPaddingABIEncodePackedV1;
  let ABIEncode32BytesArrTest: Arr32BytesABIEncode;
  let ABIEncodePacked32BytesArrTest: Arr32BytesABIEncodePacked;
  let ABIEncode1ByteArrTest: Arr1ByteABIEncode;
  let ABIEncodePacked1ByteArrTest: Arr1ByteABIEncodePacked;

  before(async function () {
    this.accounts = await ethers.getSigners();
  });

  describe("ABI Encoding of a 32-byte Primitive Value", async function () {
    it("Evaluates the deployment cost of 32-byte ABI encoding contract", async function () {
      const ABIEncode = await ethers.getContractFactory(
        "ThirtyTwoBytesABIEncodeV2",
      );
      ABIEncodeTest = await ABIEncode.deploy();
    });

    it("Evaluates the gas usage of 32-byte ABI encoding function", async function () {
      const tx = await ABIEncodeTest.testAbiEncode32Bytes();
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode: ${gasUsed.toString()}`);
    });
  });

  describe("ABI Encoding of a 32-byte Primitive using ABI Coder V1", async function () {
    it("Evaluates the deployment cost for 32-byte encoding contract with ABI Coder V1", async function () {
      const ABIEncodeV1 = await ethers.getContractFactory(
        "ThirtyTwoBytesABIEncodeV1",
      );
      ABIEncodeTestV1 = await ABIEncodeV1.deploy();
    });

    it("Evaluates the gas usage for 32-byte encoding function with ABI Coder V1", async function () {
      const tx = await ABIEncodeTestV1.testAbiEncode32Bytes();
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode v1: ${gasUsed.toString()}`);
    });
  });

  describe("ABI Encoding of a Primitive Value with Padding", async function () {
    it("Evaluates the deployment cost for encoding contract with padding", async function () {
      const ABIEncodePadding = await ethers.getContractFactory(
        "PaddingABIEncodeV2",
      );
      ABIEncodePaddingTest = await ABIEncodePadding.deploy();
    });

    it("Evaluates the gas usage for encoding function with padding", async function () {
      const tx = await ABIEncodePaddingTest.testAbiEncodePadding();
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode padding: ${gasUsed.toString()}`);
    });
  });

  describe("ABI Encoding of a Primitive Value with Padding using ABI Coder V1", async function () {
    it("Evaluates the deployment cost for padding encoding contract with ABI Coder V1", async function () {
      const ABIEncodePaddingV1 = await ethers.getContractFactory(
        "PaddingABIEncodeV1",
      );
      ABIEncodePaddingTestV1 = await ABIEncodePaddingV1.deploy();
    });

    it("Evaluates the gas usage for padding encoding function with ABI Coder V1", async function () {
      const tx = await ABIEncodePaddingTestV1.testAbiEncodePadding();
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode padding v1: ${gasUsed.toString()}`);
    });
  });

  describe("ABI encodePacked Encoding of a 32-byte Primitive Value", async function () {
    it("Evaluates the deployment cost for packed 32-byte encoding contract", async function () {
      const ABIEncodePacked = await ethers.getContractFactory(
        "ThirtyTwoBytesABIEncodePackedV2",
      );
      ABIEncodePackedTest = await ABIEncodePacked.deploy();
    });

    it("Evaluates the gas usage for packed 32-byte encoding function", async function () {
      const tx = await ABIEncodePackedTest.testAbiEncodePacked32Bytes();
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode packed: ${gasUsed.toString()}`);
    });
  });

  describe("ABI encodePacked Encoding of a 32-byte Primitive using ABI Coder V1", async function () {
    it("Evaluates the deployment cost for packed 32-byte encoding contract with ABI Coder V1", async function () {
      const ABIEncodePackedV1 = await ethers.getContractFactory(
        "ThirtyTwoBytesABIEncodePackedV1",
      );
      ABIEncodePackedTestV1 = await ABIEncodePackedV1.deploy();
    });

    it("Evaluates the gas usage for packed 32-byte encoding function with ABI Coder V1", async function () {
      const tx = await ABIEncodePackedTestV1.testAbiEncodePacked32Bytes();
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode packed v1: ${gasUsed.toString()}`);
    });
  });

  describe("ABI encodePacked Encoding of a Primitive Value with No Padding", async function () {
    it("Evaluates the deployment cost for packed encoding contract with no padding", async function () {
      const ABIEncodePackedPadding = await ethers.getContractFactory(
        "NoPaddingABIEncodePackedV2",
      );
      ABIEncodePackedNoPaddingTest = await ABIEncodePackedPadding.deploy();
    });

    it("Evaluates the gas usage for packed encoding function with no padding", async function () {
      const tx =
        await ABIEncodePackedNoPaddingTest.testAbiEncodePackedNoPadding();
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode packed padding: ${gasUsed.toString()}`);
    });
  });

  describe("ABI encodePacked Encoding of a Primitive Value with No Padding using ABI Coder V1", async function () {
    it("Evaluates the deployment cost for packed encoding contract with no padding using ABI Coder V1", async function () {
      const ABIEncodePackedPaddingV1 = await ethers.getContractFactory(
        "NoPaddingABIEncodePackedV1",
      );
      ABIEncodePackedNoPaddingTestV1 = await ABIEncodePackedPaddingV1.deploy();
    });

    it("Evaluates the gas usage for packed encoding function with no padding using ABI Coder V1", async function () {
      const tx =
        await ABIEncodePackedNoPaddingTestV1.testAbiEncodePackedNoPadding();
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode packed padding: ${gasUsed.toString()}`);
    });
  });

  describe("ABI Encoding of an Array with 32-byte elements", async function () {
    it("Evaluates the deployment cost for encoding contract of 32-byte array elements", async function () {
      const ABIEncode32BytesArr = await ethers.getContractFactory(
        "Arr32BytesABIEncode",
      );
      ABIEncode32BytesArrTest = await ABIEncode32BytesArr.deploy();
    });

    it("Evaluates the gas usage for encoding a single 32-byte array element", async function () {
      const tx = await ABIEncode32BytesArrTest.testAbiEncodeArr32Bytes([1]);
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode 32 bytes array: ${gasUsed.toString()}`);
    });

    it("Evaluates the gas usage for encoding 100 32-byte array elements", async function () {
      const arr = [];
      for (let i = 1; i <= 100; i++) {
        arr.push(i);
      }
      const tx = await ABIEncode32BytesArrTest.testAbiEncodeArr32Bytes(arr);
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode 32 bytes array: ${gasUsed.toString()}`);
    });
  });

  describe("ABI encodePacked Encoding of an array with 32-byte elements", async function () {
    it("Evaluates the deployment cost for packed encoding contract of 32-byte array elements", async function () {
      const ABIEncodePacked32BytesArr = await ethers.getContractFactory(
        "Arr32BytesABIEncodePacked",
      );
      ABIEncodePacked32BytesArrTest = await ABIEncodePacked32BytesArr.deploy();
    });

    it("Evaluates the gas usage for packed encoding a single 32-byte array element", async function () {
      const tx =
        await ABIEncodePacked32BytesArrTest.testAbiEncodePackedArr32Bytes([1]);
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode packed 32 bytes array: ${gasUsed.toString()}`);
    });

    it("Evaluates the gas usage for packed encoding 100 32-byte array elements", async function () {
      const arr = [];
      for (let i = 1; i <= 100; i++) {
        arr.push(i);
      }
      const tx =
        await ABIEncodePacked32BytesArrTest.testAbiEncodePackedArr32Bytes(arr);
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode packed 32 bytes array: ${gasUsed.toString()}`);
    });
  });

  describe("ABI Encoding of an array with 1-byte elements", async function () {
    it("Evaluates the deployment cost for encoding contract of 1-byte array elements", async function () {
      const ABIEncode1ByteArr = await ethers.getContractFactory(
        "Arr1ByteABIEncode",
      );
      ABIEncode1ByteArrTest = await ABIEncode1ByteArr.deploy();
    });

    it("Evaluates the gas usage for encoding a single 1-byte array element", async function () {
      const tx = await ABIEncode1ByteArrTest.testAbiEncodeArr1Byte([1]);
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode 1-byte array: ${gasUsed.toString()}`);
    });

    it("Evaluates the gas usage for encoding 100 1-byte array elements", async function () {
      const arr = [];
      for (let i = 1; i <= 100; i++) {
        arr.push(i);
      }
      const tx = await ABIEncode1ByteArrTest.testAbiEncodeArr1Byte(arr);
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode 1-byte array: ${gasUsed.toString()}`);
    });
  });

  describe("ABI encodePacked Encoding of an array with 1-byte elements", async function () {
    it("Evaluates the deployment cost for packed encoding contract of 1-byte array elements", async function () {
      const ABIEncodePacked1ByteArr = await ethers.getContractFactory(
        "Arr1ByteABIEncodePacked",
      );
      ABIEncodePacked1ByteArrTest = await ABIEncodePacked1ByteArr.deploy();
    });

    it("Evaluates the gas usage for packed encoding a single 1-byte array element", async function () {
      const tx = await ABIEncodePacked1ByteArrTest.testAbiEncodePackedArr1Byte([
        1,
      ]);
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode packed 1-byte array: ${gasUsed.toString()}`);
    });

    it("Evaluates the gas usage for packed encoding 100 1-byte array elements", async function () {
      const arr = [];
      for (let i = 1; i <= 100; i++) {
        arr.push(i);
      }
      const tx = await ABIEncodePacked1ByteArrTest.testAbiEncodePackedArr1Byte(
        arr,
      );
      const { gasUsed } = await tx.wait();
      console.log(`ABI encode packed 1-byte array: ${gasUsed.toString()}`);
    });
  });
});
