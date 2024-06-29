// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Details {
    string[] public Area;
    string public MRP;
    string public About_Product;

    constructor() {
        Area.push("Jalandhar");
        MRP = "MRP";
    }

    function Get_Area() public view returns (string[] memory) {
        return Area;
    }

    function Set_Area(string[] memory _cities) public {
        delete Area;
        for (uint256 i = 0; i < _cities.length; i++) {
            Area.push(_cities[i]);
        }
    }

    function Get_MRP() public view returns (string memory) {
        return MRP;
    }

    function Set_MRP(string memory _MRP) public {
        MRP = _MRP;
    }

    function Get_AboutProduct() public view returns (string memory) {
        return About_Product;
    }

    function Set_About(string memory _About_Product) public {
        About_Product = _About_Product;
    }
}
