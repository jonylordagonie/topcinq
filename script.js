$(function () {
  var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,

    init = function () {
      bindEvents();
      if (validIndex(openedIndex)) {
        animateItem($mainMenuItems.eq(openedIndex), true, 500);
      }
    },

    bindEvents = function () {
      $mainMenuItems.children(".images").on("click", function () {
        var newIndex = $(this).parent().index();

        AnimateTheItem(newIndex);
      });

      $(".button").hover(
        function () {
          $(this).addClass("hovered");
        },
        function () {
          $(this).removeClass("hovered");
        })
      
      $(".button").on("click", function () {
        var newIndex = $(this).index();
        AnimateTheItem(newIndex);
      })

    },

    validIndex = function (indexToCheck) {
      return indexToCheck >= 0 && indexToCheck < totalMainMenuItems;
    },

    animateItem = function ($item, toOpen, speed) {
      var $colorImage = $item.find(".color"),
        itemParam = toOpen ? { width: "420px" } : { width: "140px" },
        colorImageParam = toOpen ? { left: "0px" } : { left: "140px" };

      $colorImage.animate(colorImageParam, speed);
      $item.animate(itemParam, speed);
    },

    AnimateTheItem = function (IndexToAnimate) {
      if (openedIndex === IndexToAnimate) {
        animateItem($mainMenuItems.eq(IndexToAnimate), false, 250);
        openedIndex = -1;
      } else {
        if (validIndex(IndexToAnimate)) {
          animateItem($mainMenuItems.eq(openedIndex), false, 250);
          openedIndex = IndexToAnimate;
          animateItem($mainMenuItems.eq(openedIndex), true, 250);
        }
      }
    };
  init();
});