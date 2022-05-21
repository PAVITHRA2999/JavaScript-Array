var array = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];
for (i = 0; i < array.length; i++) {
  var li = document.createElement("li");
  var text = document.createTextNode(array[i]);
  li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
}