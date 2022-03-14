/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {

  // Select Form
	$('select').selectize();


  // Range Input
	$('input[type=range]').rangeslider({
    polyfill: false,
  });

	const rangePercent = document.querySelector('.range__top-percent span');
  
	$(document).on('input', 'input[type="range"]', function(e) {
    rangePercent.innerHTML = e.currentTarget.value;
  });


  // Burger Menu
  const menuIcon = document.querySelector('.menu-icon');
  const menuBody = document.querySelector('.menu__body');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menuBody.classList.toggle('opened');
  }); 


  // Animate
  $('.order').waypoint(function() {
		$('.order__step').each(function(index) {
			var ths = $(this);
			setInterval(function() {
			  ths.addClass('on'); 
			}, 200 * index);
		});
	}, {
    offset : '40%'
  });


});


// Dropzone
const dropzoneWrap = document.querySelector('.dropzone__wrap');
const dropzoneUpload = document.querySelector('.dropzone__upload');
const dropzoneUploadTitle = document.querySelector('.dropzone__upload-title');
const dropzoneUploadRemove = document.querySelector('.dropzone__upload-remove');

function readURL(input) {
  if (input.files && input.files[0]) {

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      dropzoneWrap.style.display = 'none';
      dropzoneUpload.style.display = 'block';
      dropzoneUploadTitle.innerHTML = input.files[0].name;
    });

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

dropzoneUploadRemove.addEventListener('click', removeUpload);

function removeUpload() {
  dropzoneUpload.style.display = 'none';
  dropzoneWrap.style.display = 'block';
}
