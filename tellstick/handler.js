var handler = {};

var lastMotion = new Date();

handler.handleInput = function(data){
	//console.log(data);
	var date = new Date();
	//console.log(date);
	if (data.indexOf('temp:') > -1){
		var pos = data.indexOf('temp:')
		var temp = data.slice(pos, pos+15);
		var breaker = temp.indexOf(';');
		temp = temp.slice(5, breaker);
		console.log(date.toISOString() + " temp: " + temp);
	}
	if (data.indexOf('humidity:') > -1){
		var pos = data.indexOf('humidity:')
		var temp = data.slice(pos, pos+15);
		var breaker = temp.indexOf(';');
		temp = temp.slice(9, breaker);
		console.log(date.toISOString() + " humidity: " + temp);
	}
	if (data.indexOf('house:51360754') > -1){
		if ((date - lastMotion) > (3*1000)){
			lastMotion = date;
			console.log(date.toISOString() + " Motion triggered");
		}
	}
}

module.exports = handler;