var defaultTitle = "Click an Icon To View More";

var gameDevContent = '<div class="collapse projectsListCollapse single-doBlock">' +
'<div class="row">' +
'   <div class="col-sm-5">' +
'       <img class="project-img" src="media/FranticLogo.png" alt="FranticLogo">' +
'   </div>' +
'   <div class="col-sm-7">' +
'        <div class="d-flex flex-column align-content-center card-body item-text">' +
'            <h5 class="card-title">Frantic</h5>' +
'            <p class="card-text">Personal Third person shooter project set on a world in the future. On going project with conitnuous updates and devlogs soon to be posted on a seperate site of my own. Game includes over 100+ game mechanics, Fully functional multiplayer system, Smart AI, 9 characters, multiple maps and gamemodes, and optimized user friendly gameplay.<br><br><br></p>' +
'            <a href="#" class="disabled btn btn-primary">Link Coming Soon</a>' +
'            <p class="card-text"><b>Tools, Techniques, and Languages Used:</b> <i>C++, Unreal Engine 4, Blender, AWS, Photoshop, OOP, Interfaces, Parent-child relationships, Abstract classes, Dependency Injection principles, Singleton classes, Observer design patterns, Client-Server model.</i> </p>' +
'        </div>' +
'   </div>' +
'</div>';

var softwareDevContent = '<div class="collapse projectsListCollapse single-doBlock">' +
'<div class="row">' +
'   <div class="col-sm-5">' +
'       <img class="project-img" src="media/JShellIcon.png" alt="JShellLogo">' +
'   </div>' +
'   <div class="col-sm-7">' +
'        <div class="d-flex flex-column align-content-center card-body item-text">' +
'            <h5 class="card-title">J-Shell</h5>' +
'            <p class="card-text">Mocked command line interface with only Java with 15+ cmd commands such as cat, echo, curl and more listed below on an artificial FileSystem. The code was done with a group of 3 friends through a 4 month agile scrum method.<br><br><br></p>' +
'            <a href="https://github.com/Muizz24/J-Shell" class="btn btn-primary">Github Page</a>' +
'            <p class="card-text"><b>Tools, Techniques, and Languages Used:</b> <i>Java, Singleton, Dependency Injection Pattern, abstract classes, interfaces, Agile Scrum methodology</i> </p>' +
'        </div>' +
'   </div>' +
    '</div>' +
    '<div class="row-Seperator-Proj"></div>' +
'<div class="row">' +
'   <div class="col-sm-5">' +
'       <img class="project-img" src="media/sudokuIcon.png" alt="JShellLogo">' +
'   </div>' +
'   <div class="col-sm-7">' +
'        <div class="d-flex flex-column align-content-center card-body item-text">' +
'            <h5 class="card-title">Hyper Sudoku Solver</h5>' +
'            <p class="card-text">Quick Python Algorithm designed to solve hyper Sudoku boards in the most efficent time possible by using dynamic programming to back track and find the best possible solutions<br><br><br></p>' +
'            <a href="https://github.com/Muizz24/HyperSudokuSolver" class="btn btn-primary">Github Page</a>' +
'            <p class="card-text"><b>Tools, Techniques, and Languages Used:</b> <i>Python, Dynamic Programming</i> </p>' +
'        </div>' +
'   </div>' +
'</div>';

var webDevContent = '<div class="collapse projectsListCollapse single-doBlock">' +
'<div class="row">' +
'   <div class="col-sm-5">' +
'       <img class="project-img" src="media/webGalleryIcon.png" alt="Web-GalleryLogo">' +
'   </div>' +
'   <div class="col-sm-7">' +
'        <div class="d-flex flex-column align-content-center card-body item-text">' +
'            <h5 class="card-title">Web Gallery</h5>' +
'            <p class="card-text">Localized gallery system capable of running a website that can upload images, store comments for those images, and allow users to own their own galleries. Similiar to how Instagram functions, users are allowed to view other user galleries, delete their own images or comments on their images, and make accounts. All code follows a REST API and communicates through the DOM with clean HTML and CSS while storing user data, images, and comments through a nedbeans database.<br><br><br></p>' +
'            <a href="https://github.com/Muizz24/Web-Gallery" class="btn btn-primary">Github Page</a>' +
'            <p class="card-text"><b>Tools, Techniques, and Languages Used:</b> <i>Nedbeans, REST, DOM, HTML, CSS, Javascript, Node.js, nodemon, express.js, crypt. </i> </p>' +
'        </div>' +
'   </div>' +
    '</div>' +
    '<div class="row-Seperator-Proj"></div>' +
'<div class="row">' +
'   <div class="col-sm-5">' +
'       <img class="project-img" src="media/chatbotIcon.png" alt="Web-GalleryLogo">' +
'   </div>' +
'   <div class="col-sm-7">' +
'        <div class="d-flex flex-column align-content-center card-body item-text">' +
'            <h5 class="card-title">DFI ChatBot</h5>' +
'            <p class="card-text">Developed a Chatbot for DFI to respond to the FAQ of clients and to engage in conversation. Bot parses and learns messages sent to it through IBM Watson and returns a proper reply. If a response cannot be understood, users with access to the chatbot can check and give the chatbot answers to learn.<br><br><br></p>' +
'            <a href="https://www.youtube.com/watch?v=1O1feSI_Nao&ab_channel=Monipoly100" class="btn btn-primary">Chatbot Demo</a>' +
'            <p class="card-text"><b>Tools, Techniques, and Languages Used:</b> <i>MongoDB, React, Spring MVC, Maven, Java, Javascript, HTML and CSS, REST, JUnit</i> </p>' +
'        </div>' +
'   </div>' +

'</div>';

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
    document.getElementById("projTitleText").innerHTML = "FullStack Development";
  }, function() {
    if (defaultTitle === ""){

    } else {
      document.getElementById("projTitleText").innerHTML = defaultTitle;
    }
  }
);

$("#WebDevIconProjs").click(
  function() {
    defaultTitle = "FullStack Development";
    document.getElementById("projTitleText").innerHTML = defaultTitle;
    document.getElementById("ProjectListInfo").innerHTML = webDevContent;
    $('.projectsListCollapse').collapse('show');
  }
);