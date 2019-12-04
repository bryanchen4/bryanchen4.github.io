

function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id
	document.getElementById(lightboxID).classList.remove('hidden');

}

function unhideLightbox1() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("proj1-hidden")
}

document.getElementById("proj1").onclick = unhideLightbox1;


function unhideLightbox2() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("proj2-hidden")
}

document.getElementById("proj2").onclick = unhideLightbox2;


function unhideLightboxTBD() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox("projTBD-hidden")
}

document.getElementById("projTBD1").onclick = unhideLightboxTBD;
document.getElementById("projTBD2").onclick = unhideLightboxTBD;
document.getElementById("projTBD3").onclick = unhideLightboxTBD;
document.getElementById("projTBD4").onclick = unhideLightboxTBD;
document.getElementById("projTBD5").onclick = unhideLightboxTBD;
document.getElementById("projTBD6").onclick = unhideLightboxTBD;
document.getElementById("projTBD7").onclick = unhideLightboxTBD;
document.getElementById("projTBD8").onclick = unhideLightboxTBD;
document.getElementById("projTBD9").onclick = unhideLightboxTBD;
document.getElementById("projTBD10").onclick = unhideLightboxTBD;



function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id
	document.getElementById(lightboxID).classList.add('hidden');
}


function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('proj-more');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;