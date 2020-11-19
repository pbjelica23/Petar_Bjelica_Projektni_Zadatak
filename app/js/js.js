$(document).ready(function() {
  $(".content-slider").slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});

function onSubmit(token) {
  document.getElementById("myForm").submit();
}

// Initialize and add the map
function initMap() {
  // The location of Podgorica
  const podgorica = { lat: 42.446303, lng: 19.244112 };
  // The map, centered at Podgorica
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: podgorica,
  });
  // The marker, positioned at Podgorica
  const marker = new google.maps.Marker({
    position: podgorica,
    map: map,
  });
}

/* zamijeni formu porukom */
$('#myForm').submit(function() {
  $('#myResultDiv').html("<h1>You have successfully submitted the form!</h1>");
  $('#myForm, #myFormHeading, #myFormParagraph').hide();
  return false;
});

/* content mijenjanje */
$('#websites').click(function() {
  $("#websites").css("background-color", "rgb(202, 202, 202)");
  $("#photography").css("background-color", "rgb(239, 239, 239)");
  $("#seo").css("background-color", "rgb(239, 239, 239)");
  $("#app").css("background-color", "rgb(239, 239, 239)");
  $('#results').html("<p class='result__paragraph'>WEBSITES ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.</p>");
  return false;
});


$('#photography').click(function() {
  $("#photography").css("background-color", "rgb(202, 202, 202)");
  $("#websites").css("background-color", "rgb(239, 239, 239)");
  $("#seo").css("background-color", "rgb(239, 239, 239)");
  $("#app").css("background-color", "rgb(239, 239, 239)");
  $('#results').html("<p class='result__paragraph'>PHOTOGRAPHY ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.</p>");
  return false;
});

$('#seo').click(function() {
  $("#seo").css("background-color", "rgb(202, 202, 202)");
  $("#websites").css("background-color", "rgb(239, 239, 239)");
  $("#photography").css("background-color", "rgb(239, 239, 239)");
  $("#app").css("background-color", "rgb(239, 239, 239)");
  $('#results').html("<p class='result__paragraph'>SEO ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.</p>");
  return false;
});

$('#app').click(function() {
  $("#app").css("background-color", "rgb(202, 202, 202)");
  $("#websites").css("background-color", "rgb(239, 239, 239)");
  $("#photography").css("background-color", "rgb(239, 239, 239)");
  $("#seo").css("background-color", "rgb(239, 239, 239)");
  $('#results').html("<p class='result__paragraph'>APP ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.</p><p class='result__paragraphTwo'><span class='icon-bullet'></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.</p>");
  return false;
});



/* work categories */

/* content mijenjanje */
$('#AllCategorie').click(function() {
  $('#prints, #photos, #webweb').show();
  $('#appsapps').hide();
  $("#AllCategorie").css("color", "rgb(46, 204, 113)");
  $("#PrintCategorie, #WebCategorie, #ApplicationCategorie, #PhotographyCategorie").css("color", "rgb(115, 115, 115)");
   return false;
});

$('#PrintCategorie').click(function() {
  $('#photos, #webweb,  #appsapps').hide();
  $('#prints').show();
  $("#PrintCategorie").css("color", "rgb(46, 204, 113)");
  $("#AllCategorie, #WebCategorie, #ApplicationCategorie, #PhotographyCategorie").css("color", "rgb(115, 115, 115)");
   return false;
});

$('#PhotographyCategorie').click(function() {
  $('#prints, #webweb, #appsapps').hide();
  $('#photos').show();
  $("#PhotographyCategorie").css("color", "rgb(46, 204, 113)");
  $("#AllCategorie, #WebCategorie, #ApplicationCategorie, #PrintCategorie").css("color", "rgb(115, 115, 115)");
   return false;
});

$('#WebCategorie').click(function() {
  $('#prints, #photos, #appsapps').hide();
  $('#webweb').show();
  $("#WebCategorie").css("color", "rgb(46, 204, 113)");
  $("#AllCategorie, #PhotographyCategorie, #ApplicationCategorie, #PrintCategorie").css("color", "rgb(115, 115, 115)");
   return false;
});

$('#ApplicationCategorie').click(function() {
  $('#prints, #photos, #webweb').hide();
  $('#appsapps').html("<h1 class='work__second-images--heading'>No results!</h1>");
  $('#appsapps').show();
  $("#ApplicationCategorie").css("color", "rgb(46, 204, 113)");
  $("#AllCategorie, #PhotographyCategorie, #WebCategorie, #PrintCategorie").css("color", "rgb(115, 115, 115)");
   return false;
});

$('#listView').click(function() {
  $("#listView").css("color", "rgb(46, 204, 113)");
  $("#gridView").css("color", "rgb(115, 115, 115)");
  $(".work__second-images").css("grid-template-columns", "repeat(1, 3fr)");
  $(".work__second-images--img").css("display", "block");
  $(".work__second-images--img").css("margin", "auto");
  $(".work__second-images--img").css("margin", "auto");
  $(".work__second-images").css("padding-bottom", "100px");
   return false;
});


$('#gridView').click(function() {
  $("#gridView").css("color", "rgb(46, 204, 113)");
  $("#listView").css("color", "rgb(115, 115, 115)");
  $(".work__second-images").css("grid-template-columns", "repeat(3, 1fr)");
  $(".work__second-images").css("padding-bottom", "20px");
   return false;
});


$('#imageCarouselOne').click(function(){
  $('#contentResults').html("<h1 class='content-result--heading'>Dark UI Kit Freebie</h1><p class='content-result--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,<br> vel congue mauris. Fusce velit justo, faucibus eu sagittis.</p>");
});

$('#imageCarouselTwo').click(function(){
  $('#contentResults').html("<h1 class='content-result--heading'>Black UI Kit Freebie</h1><p class='content-result--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,<br> vel congue mauris. Fusce velit justo, faucibus eu sagittis.</p>");
});

$('#imageCarouselThree').click(function(){
  $('#contentResults').html("<h1 class='content-result--heading'>Green UI Kit Freebie</h1><p class='content-result--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,<br> vel congue mauris. Fusce velit justo, faucibus eu sagittis.</p>");
});

$('#imageCarouselFour').click(function(){
  $('#contentResults').html("<h1 class='content-result--heading'>Blue UI Kit Freebie</h1><p class='content-result--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,<br> vel congue mauris. Fusce velit justo, faucibus eu sagittis.</p>");
});

$('#imageCarouselFive').click(function(){
  $('#contentResults').html("<h1 class='content-result--heading'>White UI Kit Freebie</h1><p class='content-result--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,<br> vel congue mauris. Fusce velit justo, faucibus eu sagittis.</p>");
});


