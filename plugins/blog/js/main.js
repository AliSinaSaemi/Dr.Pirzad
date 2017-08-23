/*=======================

        Global
 
=======================*/
$(window).click(function (e) {
  e.preventDefault();
});

/*=======================

      Sidenav show
 
=======================*/

function openNav() {
  document.getElementById("cssmenu").style.width = "100%";
  document.getElementById("cssmenu").style.opacity = "1";
}

function closeNav() {
  document.getElementById("cssmenu").style.width = "0";
  document.getElementById("cssmenu").style.opacity = "0";
}