// Create the addNumbers function here.
var two = 9028302;
var three = 2443045;
var five = two + three;
console.log(five);

// First attempt, this is what we got...
var tacoCat = {
  taco: 'taco',
  cat: 'cat',

  fullName: function () {
  return this.taco + ' ' + this.cat;
  }

}
console.log(tacoCat.fullName());

// With string concat() method.
var taco = "Taco ";
var cat = "Cat...";
var res = taco.concat(cat);
console.log(res);

// Now with a funtion, like the instructions intended.
function stringConcat() {
 var tacoCat = taco + ' ' + cat;

 alert(tacoCat);
}
stringConcat();
