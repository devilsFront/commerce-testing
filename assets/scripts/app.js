if (document.querySelector('[data-element= "header"]')) {
  setTimeout(headerInit,0)
}

const pathStatics = '/statics'
const pathImg = `${pathStatics}/img/`

function headerInit() {

  const headerBurger = document.querySelector('[data-element= "header__burger"]')
  const header = document.querySelector('[data-element= "header"]')
  const headerLogo = header.querySelector('[data-element= "header__logo-image"]')
  const headerMobileLogo = header.querySelector('[data-element= "header__logo-source"]')

  headerBurger.addEventListener('click', toggleMenu)

  function toggleMenu() {
    header.classList.toggle('mobile-menu_active')
    header.classList.remove('header_white')
    headerLogo.src = `${pathImg}header/logo.svg`
    headerMobileLogo.srcset = `${pathImg}header/mobile-logo.svg`
    if (headerWhite) {
      header.classList.add('header_fixed')
      changeMenuPosition()
    }
    else {
      changeMenuColor()
    }
  }

  window.addEventListener('resize', resizeWindow)

  function resizeWindow() {
    if ((document.documentElement.clientWidth>900) && (header.classList.contains('mobile-menu_active'))) {
      header.classList.remove('mobile-menu_active')
      if (headerWhite) {
        header.classList.add('header_fixed')
        changeMenuPosition()
      }
      else {
        changeMenuColor()
      }
    }
  }

  let headerWhite

  if (header.classList.contains('header_white')) {
    window.addEventListener('scroll', changeMenuPosition)
    headerWhite = true
  } else {
    window.addEventListener('scroll', changeMenuColor)
    headerWhite = false
    changeMenuColor()
  }

  function changeMenuPosition() {
    if (!(header.classList.contains('mobile-menu_active'))) {
      if (pageYOffset > 0) {
        header.classList.add('header_white', 'header_fixed')
        headerLogo.src = `${pathImg}header/logo-black.svg`
        headerMobileLogo.srcset = `${pathImg}header/mobile-logo-black.svg`
      } else {
        headerLogo.src = `${pathImg}header/logo-black.svg`
        headerMobileLogo.srcset = `${pathImg}header/mobile-logo-black.svg`
        header.classList.remove('header_fixed')
        header.classList.add('header_white')
      }
    }
  }

  function changeMenuColor() {
    if (!(header.classList.contains('mobile-menu_active'))) {
      if (pageYOffset > 0) {
        header.classList.add('header_white')
        headerLogo.src = `${pathImg}header/logo-black.svg`
        headerMobileLogo.srcset = `${pathImg}header/mobile-logo-black.svg`
      } else {
        header.classList.remove('header_white')
        headerLogo.src = `${pathImg}header/logo.svg`
        headerMobileLogo.srcset = `${pathImg}header/mobile-logo.svg`
      }
    }
  }

  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [53.199999, 50.122031],
      zoom: 7
    });
  }
}

