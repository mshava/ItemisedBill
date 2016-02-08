var fs = require("fs");
//Here I'm reading a csv file.
exports.readCsv = function(fileName){
	var stream = fs.readFileSync(fileName);
	var list = stream.toString();
	var rows = (list.split('\r')).slice(1);
	var itemisedBill = rows.map(function (rows){
		var fields = rows.split(',');
			return{
				date : fields[0],
				provider : fields[1],
				number : fields[2],
				duration : fields[3]
			}
	});
	itemisedBill.pop();
	return itemisedBill;
		
}














/*

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
					for (var i = 0; i < fileLines.length; i++) {
						billObj = fileLines[i]++;
						
					};
						var billObj = {
								date : column[0],
								providerName : column[1],
								Calls : numbers,
								Duration : duration
							};

		billList.push(billObj);
});
console.log(">>>>>>>>>" + billList);
	return billList;
	//Here I'm checking how many of  provider name
exports.filterProviders = function(billList,providerName){
	var Totalcalls = [];
			for(var i = 0; i < providerName.length;i++){
				var Prov = billList[i]++;
					if(Prov.providerName === providerName){
						Totalcalls.push(Prov);
					}
			}
		console.log("<><><><><>><<><><><>><<><><><><>" + Totalproviders);
		return Totalcalls;
	}
};
*/
