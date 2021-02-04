

$("#SoftwareExpPanel").hover(
    function() {
       $('.softwareDevCard').collapse('show');
     }, function() {
       $('.softwareDevCard').collapse('hide');
     }
);

$("#GameDevExpPanel").hover(
    function() {
       $('.gameDevCard').collapse('show');
     }, function() {
       $('.gameDevCard').collapse('hide');
     }
);

$("#WebDevExpPanel").hover(
    function() {
       $('.webDevCard').collapse('show');
     }, function() {
       $('.webDevCard').collapse('hide');
     }
);

$("#DatabaseExpPanel").hover(
    function() {
       $('.databaseCard').collapse('show');
     }, function() {
       $('.databaseCard').collapse('hide');
     }
);

$("#SoftwareIconProjs").hover(
  function() {
    document.getElementById("projTitleText").innerHTML = "Software Development";
  }
);

$("#SoftwareIconProjs").click(
  function() {
    $('#ProjectsList').collapse('show');
  }
);

$("#GameDevIconProjs").hover(
  function() {
    document.getElementById("projTitleText").innerHTML = "Game Development";
  }
);

$("#WebDevIconProjs").hover(
  function() {
    document.getElementById("projTitleText").innerHTML = "Web Development";
  }
);