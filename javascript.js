// ORDER FORM //
function submit() {
  document.getElementById("ticketType").selected = 0;
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("toc").checked = false;
}

function btnReset() {
  alert("Form Resetted");
  reset();
}

function reset() {
  document.getElementById("Ticket").selected = 0;
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("terms").checked = false;
}

function submit() {
  var Ticket = document.getElementById("Ticket").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("Phone").value;
  var address = document.getElementById("address").value;
  var user = document.getElementById("terms");
  var addressLength = stringTotal(address);

  if (Ticket == "") {
    errors.innerHTML = "<label>" + "Ticket Type Must Be Chosen" + "</label>";
  } else if (name.length < 5) {
    errors.innerHTML =
      "<label>" + "Name Must Be Minimal 5 Character length" + "</label>";
  } else if (email.length < 5) {
    errors.innerHTML =
      "<label>" + "Email Must Be Valid and Contain @s" + "</label>";
  } else if (phone.length < 1) {
    errors.innerHTML = "<label>" + "Phone Number Cannot Be Empty" + "</label>";
  } else if (addressLength == 0) {
    errors.innerHTML =
      "<label>" + "Address must be minimal 5 Words" + "</label>";
  } else if (!user.checked) {
    errors.innerHTML =
      "<label>" + "User Agreement must be checked" + "</label>";
  } else {
    errors.innerHTML = " ";
    alert(
      "Ticket Type : " +
        Ticket +
        "\n" +
        "Name : " +
        name +
        "\n" +
        "Email : " +
        email +
        "\n" +
        "Phone Number : " +
        phone +
        "\n" +
        "Address: " +
        address
    );
    warning();
  }
}

function stringTotal(name) {
  var values = name.split(" ");
  if (values.length > 4) {
    return 1;
  } else {
    return 0;
  }
}

function warning() {
  var check = prompt(
    "Please input the name of the event: (for example: Doja Cat: 10 July 2020)"
  );
  if (check == null) {
  } else if (check == "") {
    alert("Thankyou for your purchase :D");
    reset();
  } else {
    alert(
      "Your order has been confirmed! Please Check Your Email, Thankyou for your purchase :D"
    );
    reset();
  }
}

// IMAGE SLIDER //
$(document).ready(function () {
  $(".next").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });

  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });
});

// GALLERY //
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
