var fs = require("fs");

//Here I'm reading a csv file.
exports.bill = function(fileName){
	var LinesInFile = fs.readFileSync(fileName, "utf8");
		var lines = LinesInFile.split('\r');
//Here I wanna create a list of Objects and push them inside billList.

var billList = [];
 lines.forEach(function(fileLines){
	 var column = fileLines.split(',');
	 			var date = column[0];
				var providers = column[1];
				var numbers = column[2];
				var duration = column[3];

						var billObj = {
								date : date,
								providerName : providers,
								Calls : numbers,
								Duration : duration
							};

		billList.push(billObj);
});
console.log(">>>>>>>>>" + billList);
	return billList;
};
//Here I'm checking how many of  provider name
exports.filterProviders = function(billList,providerName){
	var Totalcalls = [];
			for(var i = 0; i < billList.length;i++){
				var Prov = billList[i];
					if(Prov.providerName === providerName){
						Totalcalls.push(Prov);
					}
			}
		console.log("<><><><><>><<><><><>><<><><><><>" + Totalproviders);
		return Totalcalls;
	}
