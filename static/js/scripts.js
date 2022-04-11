window.addEventListener('DOMContentLoaded', (event) => {
  // Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74
    })
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  )
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })

  $(function () {
    // run the currently selected effect
    function runEffect () {
      // get effect type from
      const selectedEffect = $('#effectTypes').val()

      // Most effect types need no options passed by default
      let options = {}
      // some effects have required parameters
      if (selectedEffect === 'scale') {
        options = { percent: 50 }
      } else if (selectedEffect === 'transfer') {
        options = { to: '#button', className: 'ui-effects-transfer' }
      } else if (selectedEffect === 'size') {
        options = { to: { width: 200, height: 60 } }
      }

      // Run the effect
      $('#effect').effect(selectedEffect, options, 500, callback)
    };

    // Callback function to bring a hidden box back
    function callback () {
      setTimeout(function () {
        $('#effect').removeAttr('style').hide().fadeIn()
      }, 1000)
    };

    // Set effect from select menu value
    $('#button').on('click', function () {
      runEffect()
      return false
    })
  })
})
