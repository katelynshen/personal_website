var list_of_images = [
  "./images/flower.png",
  "./images/nature_shot.png",
  "./images/siblings.png",
  "./images/IMG_6636_resized.JPG" ,
  ]

var mrandom = Math.floor(Math.random()*4)
var chosenstring = list_of_images[mrandom]
var element = document.getElementById("random")
element.src = chosenstring