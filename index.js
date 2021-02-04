var defaultTitle = "";
var gameDevContent = '<div class="collapse projectsListCollapse single-doBlock">' +
'<div class="row">' +
'<div class="col-sm-7">' +
'        <div class="d-flex flex-column align-content-center card-body">' +
'            <h5 class="card-title">Frantic</h5>' +
'            <p class="card-text">Personal Third person shooter project set on a world in the future. On going project with conitnuous updates and devlogs soon to be posted on a seperate site of my own. Game includes over 100+ game mechanics, Fully functional multiplayer system, Smart AI, 9 characters, multiple maps and gamemodes, and optimized user friendly gameplay.<br><br><br></p>' +
'            <a href="#" class="disabled btn btn-primary">Link Coming Soon</a>' +
'        </div>' +
'</div>' +
'<div class="col-sm-5">' +
'    <img class="about-img" src="media/FranticLogo.PNG" alt="">' +
'</div>' +
'</div>';
var softwareDevContent = '';
var webDevContent = '';

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
  }, function() {
    if (defaultTitle === ""){

    } else {
      document.getElementById("projTitleText").innerHTML = defaultTitle;
    }
  }
);

$("#SoftwareIconProjs").click(
  function() {
    defaultTitle = "Software Development";
    document.getElementById("projTitleText").innerHTML = defaultTitle;
    document.getElementById("ProjectListInfo").innerHTML = softwareDevContent;
    $('.projectsListCollapse').collapse('show');
  }
);

$("#GameDevIconProjs").hover(
  function() {
    document.getElementById("projTitleText").innerHTML = "Game Development";
  }, function() {
    if (defaultTitle === ""){

    } else {
      document.getElementById("projTitleText").innerHTML = defaultTitle;
    }
  }
);

$("#GameDevIconProjs").click(
  function() {
    defaultTitle = "Game Development";
    document.getElementById("projTitleText").innerHTML = defaultTitle;
    document.getElementById("ProjectListInfo").innerHTML = gameDevContent;
    $('.projectsListCollapse').collapse('show');
  }
);

$("#WebDevIconProjs").hover(
  function() {
    document.getElementById("projTitleText").innerHTML = "Web Development";
  }, function() {
    if (defaultTitle === ""){

    } else {
      document.getElementById("projTitleText").innerHTML = defaultTitle;
    }
  }
);

$("#WebDevIconProjs").click(
  function() {
    defaultTitle = "Web Development";
    document.getElementById("projTitleText").innerHTML = defaultTitle;
    document.getElementById("ProjectListInfo").innerHTML = webDevContent;
    $('.projectsListCollapse').collapse('show');
  }
);