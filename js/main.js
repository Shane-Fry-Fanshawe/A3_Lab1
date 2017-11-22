(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework


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
      });




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
         //To do this I would get the index maybe, somehow estabish the active one and set the normal state to faded, but the active to full.
        // Add a class that makes it full transparent.



        }




})();
