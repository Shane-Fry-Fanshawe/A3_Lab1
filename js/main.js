(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework


	
	
	
	
	
	
	//In this Lab I was able to do everything but the toggling. From my understanding I would need to get the current ID from "this.id" this would allow me to select the active car. Then I would need to just turn the others off, and repeat probably through a loop.
	//Where I had troubles is I think just turning them all off in general, I tried doing this with the "theImages" using the class of .data-ref, but it would not work for me. If i was able to do this I could just switch the active one on with "this.id" and be done. Also looping through it so everytime its clicked it does that and when another is clicked they turn off (reset).
	//I left everything below to see everything I tried, I understand what to do, i just couldnt figure it out. 
	
	//Basically what I want to have done is once clicked - Turn all nonActive - Use the this.id to make that active - and then once its clicked again reset and have a new active one (couldnt figure out just wanted to show I understand how to do it, just couldnt firgure it out - part marks)
	
	
	
	
  //Personal Notes:
  //Get each class and assign a variable to them (Headings and Paragraph Sections)
  //Then add event listeners to know that you click them
  //After that add the functions to them such as filling in the info to the correct image clicked. (Index? Its Value*)


    var theImages = document.querySelectorAll('.data-ref'),
        modelHeader = document.querySelector('.modelName'),
        modelPrice = document.querySelector('.priceInfo'),
        modelDetailsHeading = document.querySelector('.modelDetails');


        //add an index number to the thumbnail for array refrence


        theImages.forEach(function(element, index) {
			
		
        //loop through and do stuff to each element at the top of the page
        element.addEventListener('click', changeElements, false);
			
			console.log(index);
			
			
			
			
			 function changeElements() {

          //console.log("Hello");
          let objectIndex = carData[this.id];

          modelHeader.classList.add(this.id);
          modelPrice.classList.add(this.id);
          modelDetailsHeading.classList.add(this.id);


         modelHeader.firstChild.nodeValue = objectIndex.carName;
         modelPrice.firstChild.nodeValue = objectIndex.carPrice;
         modelDetailsHeading.firstChild.nodeValue = objectIndex.carDetails;


         //Now just add the Active Car to be full transparent, and the others not.
         //Take the "this.id" and change the CSS to it since they correspond to the image and images ID (They are the same)
		//Then take the current Image clicked (index?) and make that one active with a else statement making the others nonActive
			
		
		/*
		
		Playing around here, this is cleary not an effiecent way in my opinion (Leaving here for possible marks)
		
		if (index === 0) {
    		document.getElementById('F56').className += " nonActive";
			document.getElementById('R58').className += " nonActive";
			document.getElementById('F55').className += " active";
		} 
		   else if (index === 1) {
    		document.getElementById('F55').className += " nonActive";
			document.getElementById('R58').className += " nonActive";
			document.getElementById('F56').className += " active";
			}
			else if (index === 2) {
    		document.getElementById('F55').className += " nonActive";
			document.getElementById('F56').className += " nonActive";
			document.getElementById('R58').className += " active";
			} */
		
				 
				 
				 //A possible way is doing it backwards? Having them all switch to faded besides the active one

				//I was going to make them all nonActive from a varaible containing all the IMGs for me that would have been "theImages" but i think i did the santax wrong and it wouldnt work so i did it this way.
				 /* document.getElementById(this.id).className += " active";
				 document.getElementById("F55").className += " nonActive";
				 document.getElementById("F56").className += " nonActive";
				 document.getElementById("R58").className += " nonActive"; */
				 
				 
			
				//For this way I had troubles reseting it, so when a new car is clicked the active goes faded
		 if (this.id === 'F55') {
    		     
				 document.getElementById("F56").className += " nonActive";
				 document.getElementById("R58").className += " nonActive";
			 document.getElementById(this.id).className += " active";
		} 
		   else if (this.id === 'F56') {
    		
				 document.getElementById("F55").className += " nonActive";
				 document.getElementById("R58").className += " nonActive";
			   document.getElementById(this.id).className += " active";
			}
			else if (this.id === 'R58') {
    		     
				 document.getElementById("F55").className += " nonActive";
				 document.getElementById("F56").className += " nonActive";
				document.getElementById(this.id).className += " active";
			} 
				
				 
				 
				  //Would be easier to make the everyone but "this.id" non active so it basically resets by switching
				 
				 
				 //What I need to do is make the active bright, while everything else turns off and loop through this everytime its clicked so when a new "this.id" is active it changes.
				 //Step 1: When clicked all "theImages turn nonActive"
				 //Step 2: Then the this.id stays active
				 //Step 3: Loop through this and have it reset.
				 
				 
			
				 
				 
		
			
		console.log(this.id);
			
			
		

			

        }
			
			
			
			
      });



})();
