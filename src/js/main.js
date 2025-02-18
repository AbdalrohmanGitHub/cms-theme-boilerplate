(function () {
  // Polyfill for NodeList.prototype.forEach() in IE
   if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // Variables
  var nav = document.querySelector('.header__navigation');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var allElements = document.querySelectorAll(
    '.header--element, .header--toggle'
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    nav.classList.toggle('open');
    navToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    search.classList.toggle('open');
    searchToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });

    closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function(item){
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {

      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener('click', toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }

    }
  });
  
  

  
  
  
  
    var callback, firstLanguageSwitcherItem = document.querySelector(".header__language-switcher .lang_list_class li:first-child"), languageSwitcherList = document.querySelector(".header__language-switcher .lang_list_class"), LangSwitcher = (document.querySelector(".header__navigation"),
    document.querySelector(".header__language-switcher")); allToggles = (document.querySelector(".header__search"),
    document.querySelectorAll(".header--toggle")); langToggle = (document.querySelector(".header__navigation--toggle"),
    document.querySelector(".header__language-switcher--toggle")); closeToggle = (document.querySelector(".header__search--toggle"),
    document.querySelector(".header__close--toggle"));
    document.querySelectorAll(".header--element, .header--toggle");
    function showFocusOutline() {
        document.body.classList.add("enable-focus-styles"),
        document.body.classList.remove("disable-focus-styles")
    }
    function hideFocusOutline() {
        document.body.classList.add("disable-focus-styles"),
        document.body.classList.remove("enable-focus-styles")
    }
    function hoverLanguageSwitcher() {
        languageSwitcherList.classList.add("first-active")
    }
    function unhoverLanguageSwitcher() {
        languageSwitcherList.classList.remove("first-active")
    }
    function toggleLang() {
        allToggles.forEach((function(toggle) {
            toggle.classList.toggle("hide")
        }
        ));
        LangSwitcher.classList.toggle("open"),
        langToggle.classList.toggle("open"),
        closeToggle.classList.toggle("show")
    }
    $(".active-branch").each((function() {
        $(this).parent("li").addClass("active-branch")
    }
    ));
    callback = function() {
        document.body && (document.body.addEventListener("keydown", showFocusOutline),
        document.body.addEventListener("mousemove", hideFocusOutline),
        document.body.addEventListener("mousedown", hideFocusOutline),
        document.body.addEventListener("mouseup", hideFocusOutline),
        LangSwitcher && (firstLanguageSwitcherItem.addEventListener("mouseover", hoverLanguageSwitcher),
        firstLanguageSwitcherItem.addEventListener("mouseout", unhoverLanguageSwitcher),
        langToggle.addEventListener("click", toggleLang)))
    }
    ,
    ["interactive", "complete"].indexOf(document.readyState) >= 0 ? callback() : document.addEventListener("DOMContentLoaded", callback)
})();



  $('.mobile-trigger').click(function(){
    $('body').toggleClass('mobile-open'); 
  });
  
  


    $('.overlay').click(function(){
      $('body').removeClass('mobile-open'); 
    });

    $('.close-menu').click(function(){
      $('body').removeClass('mobile-open'); 
    });