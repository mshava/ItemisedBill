var fs = require("fs");
var assert = require("assert");
var readCsv = require("./readCsv");
var allPhoneCalls = require("./allPhoneCalls");
var totalCalls = require("./totalCalls");


describe("read CSV file",function (){

	it("Should read and return csv file's content with objects",function (done){

		//var results = Bill.readCsv("../ItemisedBill");
        assert.equal(readCsv.readCsv("./ItemisedBill.csv").length, 34);
        console.log(readCsv.readCsv("./ItemisedBill.csv"));
        done();
	});	
});

describe("get all calls from given service provider", function (){

	it("It should return all phone calls from Mtn!", function (done){

		var BillMap = readCsv.readCsv("./ItemisedBill.csv");
		
		assert.equal(allPhoneCalls.allPhoneCalls(BillMap, "MTN").length, 15);
		console.log(allPhoneCalls.allPhoneCalls(BillMap, "MTN"));
		done();	
	});

	it("It should return all phone calls from Vodacom!", function (done){

		var BillMap = readCsv.readCsv("./ItemisedBill.csv");

		assert.equal(allPhoneCalls.allPhoneCalls(BillMap, "Vodacom").length, 8);
		console.log(allPhoneCalls.allPhoneCalls(BillMap, "Vodacom"));
		done();
	});

	it("It should return all phone calls from CellC!", function (done){

		var BillMap = readCsv.readCsv("./ItemisedBill.csv");

		assert.equal(allPhoneCalls.allPhoneCalls(BillMap, "CellC").length, 11);
		console.log(allPhoneCalls.allPhoneCalls(BillMap, "CellC"));
		done();
	});
});

describe("Get total amount of calls made to a specific number from a given service provider", function (){
	
	it("returns a list of all calls made to a number from NTM!", function (done){

		var BillMap = readCsv.readCsv("./ItemisedBill.csv");

		var providerMap = allPhoneCalls.allPhoneCalls(BillMap, "MTN");
		var	results = {
					 	"0832401145": 5,
						"0838758090": 5,
						"0831239023": 3,
						"0837351200": 1,
						"0832004576": 1,
						"0834590001": 1	
					};

		assert.equal(totalCalls.totalCalls(providerMap), results.length);			
		done();			
	});
});
