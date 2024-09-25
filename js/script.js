var header = document.getElementById("header");
var headerContent = document.getElementById("content-header");

function handleScroll() {
    var scroll = window.scrollY;
    if (scroll > 20) {
      header.style.height = "5%";
      headerContent.style.transform = "scale(0.8)";
    } else {
      header.style.height = "8%";
      headerContent.style.transform = "scale(1)";
    }
  }

  

const mediaQuery = window.matchMedia('(min-width: 1300px)');

function handleMediaQueryChange(e) {
    if (e.matches) {
    window.addEventListener('scroll', handleScroll);
    } else {
    window.removeEventListener('scroll', handleScroll);
    header.style.height = "5%";
    }
}





mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);