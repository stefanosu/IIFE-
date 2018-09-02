


//Added an event listener to button, and listen for a 'click' event. 
//Then will pass in an IIFE (Immediately-Invoked Fucntion Expression) as the second argument:
button.addEventListener('click',(function() {
//First, declared a local variable, count, which is initially set to 0. 
	let count = 0;
//Secondly, return a function from that function. The returned function increments count. 
	return function(){
		count += 1;
//Then, alerts the user and resets the count back to 0 if the count reaches 2.
			if(count === 2) {
			alert('This alert appears every other press');
			count = 0; 

		}
	};
})());

