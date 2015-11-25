var assert = require("assert");
var Bill = require("../Bill");
var fs = require("fs");

describe("Itemized Bills for cell phone providers",function(){
	it("Should read and return csv file with objects",function(){

				var results = Bill.bill('./ItemisedBill.csv');

           console.log(results)
        assert.equal(36, results.length);
	});
			it("Should return a list of providers with their names",function(){

					var results = Bill.bill('./ItemisedBill.csv');
					var billList = Bill.results;
					var provList = Bill.filterProviders(billList, "MTN");
					var provList = Bill.filterProviders(billList, "Vodacom");
					var provList = Bill.filterProviders(billList, "CellC");

				  assert.equal(provList.length, 16);
					assert.equal(provList.length, 8);
					assert.equal(provList.length, 11);
			});
});
