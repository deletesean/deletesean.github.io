

/**********************************************************************************************	
	KeyMonkeyEvolved.js by Adam Callaway & Miles Inada for Southern Oregon University EMDA 203
	Keyboard event handler.  Attaches the keyMonkey arrays to the global window object.
		based on example code from HTML5 Canvas by O'Reilly:
		http://chimera.labs.oreilly.com/books/1234000001654/index.html

***********************************************************************************************/

(function (window,document,undefined){

	// 1. 	Creare arrays to keep track of key states (active keys will have a value of true)
	var keyMonkey = [];				//	Is the key being hit OR held down? 
	var keyMonkeyHit = [];			//	Is the key being HIT for the first time? (It was NOT down in the previous tick)
	var keyMonkeyHold = [];			//	Is the key continuing to be HELD down? (It WAS down in the previous tick)
	var keyMonkeyRelease = [];		//	Is the key being RELEASED, having been held down in the previous tick?
	

	// 2. 	Create an object named 'keys' that maps keyCodes to their corresponding string names.
	// 		This will let users check keyMonkey[] by a key's string name rather than a numeric keyCode
	var keys = { 8:'backspace', 9:'tab', 13:'enter', 16:'shift', 17:'ctrl', 18:'alt', 19:'pause_break', 20:'caps_lock', 27:'escape', 32:'space_bar', 33:'page_up', 34:'page_down', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down', 45:'insert', 46:'delete', 48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 57:'9', 65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i', 74:'j', 75:'k', 76:'l', 77:'m', 78:'n', 79:'o', 80:'p', 81:'q', 82:'r', 83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x', 89:'y', 90:'z', 91:'left_window key', 92:'right_window key', 93:'select_key', 96:'numpad_0', 97:'numpad_1', 98:'numpad_2', 99:'numpad_3', 100:'numpad_4', 101:'numpad_5', 102:'numpad_6', 103:'numpad_7', 104:'numpad_8', 105:'numpad_9', 106:'multiply', 107:'add', 109:'subtract', 110:'decimal_point', 111:'divide', 112:'f1', 113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 121:'f10', 122:'f11', 123:'f12', 144:'num_lock', 145:'scroll_lock', 186:'semi_colon', 187:'equal_sign', 188:'comma', 189:'dash', 190:'period', 191:'forward_slash', 192:'grave_accent', 219:'open_bracket', 220:'backslash', 221:'close_bracket', 222:'single_quote' };

	// 3.	Use the 'keys' object to populate the keyMonkey arrays with string-name properties and boolean values.
	// 		i.e...				keyMonkey =  ['backspace':false, 'tab':false, 'enter':false, etc...]
	for(k in keys)
		keyMonkey[keys[k]] = false;
	for(k in keys)
		keyMonkeyRelease[keys[k]] = false;
	for(k in keys)
		keyMonkeyHold[keys[k]] = false;
	for(k in keys)
		keyMonkeyHit[keys[k]] = false;

	// 4. 	Add an event listener for keys being pressed down
	document.onkeydown = function(e){
		//	this makes sure we get events if the browser sees it in the window instead of document
		e = e ? e : window.event;
		//	Here's how it works!
		// 	The HTML onkeydown event automatically returns the event object:   	e
		// 	The object e contains the property:                         		e.keyCode
		//	e.keyCode holds the ASCII/Windows code for the key being pressed. 
		//	For example, the keycode for the backspace key is 8, so...			e.keycode === 8
		//	Using e.keyCode we can get the string name of our key
		//	by accesing our keys object:										keys[e.keyCode] === keys[8]	
		// 	The property 8 of our keys object has a value of 'backspace'		keys[8] === 'backspace'
		// 	Take a look at line 22 and see!

		// 	So... in all of the code below, remember...
		//			keys[e.keyCode] === keys[8] === 'backspace'
		//	Whew!

		//  Since all our keyMonkey arrays are set up like so: keyMonkey = ['backspace':false, 'tab':false, etc...]
		// 	we can use keys[e.keyCode] to check and change the boolean values in our arrays...

		// 	Translation for the conditional below using the backspace key as an example: 
		//	"If the keyMonkeyHold array's 'backspace' property is false...
		// 	... set the keyMonkeyHit array's 'backspace' property to true."
		if(keyMonkeyHold[keys[e.keyCode]]===false){ 
			keyMonkeyHit[keys[e.keyCode]]=true;
		}
		// trans: Set the keyMonkey array's 'backspace' property to true.
		keyMonkey[keys[e.keyCode]] = true;
		// trans: Set the keyMonkeyHold array's 'backspace' property to true.
		keyMonkeyHold[keys[e.keyCode]]=true;
	} 
	
	// 5.	Add an event listener for keys being released. Does pretty much the opposite of the keydown handler.
	document.onkeyup = function(e){
		e = e ? e : window.event;
		keyMonkey[keys[e.keyCode]] = false;
		keyMonkeyHold[keys[e.keyCode]] = false;
		keyMonkeyRelease[keys[e.keyCode]] = true;
	}; 

	// 	6. !!!!!!!!!!!!!!!!!!!!!!	 IMPORTANT 	!!!!!!!!!!!!!!!!!!!!!!!!!
	//	You must call the clear() method as the last step in your code's key handler function: 	
	//						  	keyMonkey.clear();
	//	.clear() should be called at the end of every tick and resets all Release and Hit values to FALSE.
	function clear(){
		for(k in keys)
			keyMonkeyRelease[keys[k]] = false; 	
		for(l in keys)
			keyMonkeyHit[keys[l]] = false;
	}
	keyMonkey.clear = clear;		// sets up clear() as a method of keyMonkey

	// 7.	Defines the help() method. Prints list of available key names to the console.
	//							keyMonkey.help();
	function help() {
		console.log("*************************************");
		console.log("*         KeyMonkeyEvolved.js Help         *");
		console.log("*************************************");
		console.log("");
		console.log(" Keys available in keyMonkey[]:");
		for(k in keys)
			console.log(" '"+keys[k]+"'");
		console.log("");
		console.log(" The values in keyMonkey[], keyMonkeyHit[],");
		console.log(" keyMonkeyHold[], and keyMonkeyRelease[]");
		console.log(" are boolean values (true or false)");
		console.log(" and assigned to string-name properties.");
		console.log("");
		console.log(" The keyMonkey arrays are meant to be used");
		console.log(" in conditional statements such as:");
		console.log("	if(keyMonkey['right']) { character.x +=1; }");
		console.log("	if(keyMonkeyRelease['space_bar']) { shoot(); }");
		console.log("	if(keyMonkeyHit['right']) { hero.startAni(walk); }")
		console.log("");
		console.log(" In order for keyMonkeyEvolved to work,");
		console.log(" be sure to call keyMonkey.clear()");
		console.log(" at the end of your keyHandler function!");
		console.log(" It resets keyMonkeyHit and keyMonkeyRelease after every tick.");
	}
	keyMonkey.help = help; 			// sets up help() as a method of keyMonkey

	// 8.	Make arrays available to the document from which KeyMonkeyEvolved.js is called
	window.keyMonkey = keyMonkey;
	window.keyMonkeyHold = keyMonkeyHold;
	window.keyMonkeyHit = keyMonkeyHit;
	window.keyMonkeyRelease = keyMonkeyRelease;
	
}(this,document));