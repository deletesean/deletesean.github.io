
/**********************************************************************************************	
	KeyMonkey.js by Adam Callaway, for Southern Oregon University EMDA 203
	Simple keyboard event handler.  Attaches the keyMonkey array to the global window object.
		based on example code from HTML5 Canvas by O'Reilly:
		http://chimera.labs.oreilly.com/books/1234000001654/index.html

***********************************************************************************************/

(function (window,document,undefined){

	//an array to keep track of which keys are down (they will have a value of true)
	var keyMonkey = [];

	//a mapping of keyCodes to strings representing the corresponding keys
	//created so that we users can check keyMonkey[] by the key's name rather than the numeric keyCode
	var keys = { 8:'backspace', 9:'tab', 13:'enter', 16:'shift', 17:'ctrl', 18:'alt', 19:'pause_break', 20:'caps_lock', 27:'escape', 32:'space_bar', 33:'page_up', 34:'page_down', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down', 45:'insert', 46:'delete', 48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 57:'9', 65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i', 74:'j', 75:'k', 76:'l', 77:'m', 78:'n', 79:'o', 80:'p', 81:'q', 82:'r', 83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x', 89:'y', 90:'z', 91:'left_window key', 92:'right_window key', 93:'select_key', 96:'numpad_0', 97:'numpad_1', 98:'numpad_2', 99:'numpad_3', 100:'numpad_4', 101:'numpad_5', 102:'numpad_6', 103:'numpad_7', 104:'numpad_8', 105:'numpad_9', 106:'multiply', 107:'add', 109:'subtract', 110:'decimal_point', 111:'divide', 112:'f1', 113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 121:'f10', 122:'f11', 123:'f12', 144:'num_lock', 145:'scroll_lock', 186:'semi_colon', 187:'equal_sign', 188:'comma', 189:'dash', 190:'period', 191:'forward_slash', 192:'grave_accent', 219:'open_bracket', 220:'backslash', 221:'close_bracket', 222:'single_quote' };

	//set default values to false
	for(k in keys)
		keyMonkey[keys[k]] = false;

	//add an event listener for a key being pressed down
	document.onkeydown = function(e){
		//	this makes sure we get events if the browser sees it in the window instead of document
		e = e ? e : window.event;
		//	this gets the appropriate key name string for the associated event keyCode
		//	example: for the 'up' key, the keyCode will be 38, which will grab the string 'up'
		//	it then sets the value at the 'up' index in keyMonkey to true, equivalent to:  keyMonkey['up'] = true;
		// console.log("keyCode: "+e.keyCode);
		keyMonkey[keys[e.keyCode]] = true;
	}
	
	//add an event listener for a key going up, does pretty much the opposite of the keydown handler
	document.onkeyup = function(e){
		e = e ? e : window.event;
		keyMonkey[keys[e.keyCode]] = false;
	};

	//keyMonkey.help() function, prints list of available key names to the console
	function help() {
		console.log("*************************************");
		console.log("*         KeyMonkey.js Help         *");
		console.log("*************************************");
		console.log("");
		console.log("Keys available in keyMonkey[]:");
		for(k in keys)
			console.log("'"+keys[k]+"'");
		console.log("");
		console.log("The values in keyMonkey[] are boolean (true or false).");
		console.log("Intended to be used in conditional statements such as:");
		console.log("    if(keyMonkey['right']) { character.x +=1; }");
	}
	keyMonkey.help = help;

	window.keyMonkey = keyMonkey;
	
}(this,document));