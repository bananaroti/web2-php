var Body = {
  setBackgroundColor: function (color) {
    // document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
  setColor: function (color) {
    // document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
};

var Links = {
  setLinksColor: function (color) {
    // var links = document.querySelectorAll("a");
    // var i = 0;
    // while (i < links.length) {
    //   links[i].style.color = color;
    //   i += 1;
    // }
    $("a").css("color", color);
  },
};

function daynightHandler(self) {
  var target = document.querySelector("body");

  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";

    Links.setLinksColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";

    Links.setLinksColor("blue");
  }
}
