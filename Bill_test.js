var assert = require("assert");

var Bill = require("./Bill"); 

var fs = require("fs");

describe("Itemized Bills for cell phone providers",function(){

	it("Should return a list  of ItemizedBill as an object",function(){

		var results = Bill.bill('./ItemisedBill.csv'); 
		
           console.log(results)
        assert.equal(36, results.length);
   
	});

	it("should return number of call per provider",function(){

		var results = Bill.bill('./ItemisedBill.csv');

		assert.equal(16,results.MTN);
		assert.equal(12, results.CellC); 
		assert.equal(8, results.Vodacom);
	});

});
