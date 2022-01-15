console.log("hi im umum2.0");
var first_name="um";
console.log(first_name);
var last_name="rico";
console.log(last_name);
var full_name=first_name.concat(last_name);
console.log(full_name);
var length_full_name=full_name.length;
console.log(length_full_name);
var name_string="i am rico sentraces";
console.log(name_string);
var replace_name=name_string.replace("rico","wendys");
console.log(replace_name);
var capital_name="BOB";
console.log(capital_name);
var lowercase_name=capital_name.toLowerCase();
console.log(lowercase_name);
var small_name="dogman";
console.log(small_name);
var uppercase_name=small_name.toUpperCase();
console.log(uppercase_name);
var square_root=Math.sqrt(9);
console.log(square_root);
var max_num=Math.max(1,11);
console.log(max_num);
var minimum_num=Math.min(2,22);
console.log(minimum_num);
var power_num=Math.pow(2,3);
console.log(power_num);
var fruit=["orange","apple","peach","dragon fruit"];
console.log(fruit);
var first_elem = fruit[0];
console.log(first_elem);
var second_elem = fruit[1];
console.log(second_elem);
var third_elem = fruit[2];
console.log(third_elem);
var fourth_elem = fruit[3];
console.log(fourth_elem);

var length_array = fruit.length;
console.log(length_array);

var array_value = "";

for (var i = 0; i<length_array; i++){
console.log(fruit[i]);
 array_value = array_value +fruit[i] +"<br";
}
document.getElementById("myarray").innerHTML = array_value;

fruit.push("watermelon")
console.log(fruit);
var alphabets = ["a","z","d", "e"];
console.log(alphabets);
var sort_alpha = alphabets.sort();
console.log(sort_alpha);

var reverse_alpha = alphabets.reverse();
console.log(reverse_alpha);