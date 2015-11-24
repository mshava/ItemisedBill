var fs = require("fs");
exports.bill = function(FilePath){
var LinesInFile = fs.readFileSync(FilePath, "utf-8");
var rows = LinesInFile.split('\r');
return rows;
var billList = [];
rows.forEach(function(rows){
var split = rows.split(',');
var date = columns[0];
var providers = columns[1];
var numbers = columns[2];
var duration = columns[3];
var callsObj = {
	callsDate : Date,
	providerName : columns[1],
	phoneCalls : Number,
	callDuration : columns[3]
};
billList.push(callsObj);	
});
console.log(">>>>>>>>>" +billList);
callback(null, billList);
};
this.groupedItems = function(){
var linesInFile = fs.readFileSync(filePath, "utf-8");
var rows = linesInFile.split('\r');	
var itemMap = {};
rows.forEach(function(billList){
var split = billList.split(",");
var providers = split[1];
var numbers = split[2];
	if(itemMap[providers] === undefined){
		itemMap[providers] = 0;
	}	
itemMap[providers] += Number(phoneCalls);
});
console.log("<><><><><>><<><><><>><<><><><><>><><><<><><><><>" + itemMap);
return itemMap;
};

