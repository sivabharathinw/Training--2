void main(){
  //normal rec are accessed by their index
  print("normal records");
  var user=("bharathi",21,true);
  print(user.$1);
  print(user.$2);
  print("knowing flutter: ${user.$3}");

    //named record accessed by its name
print("Named records");
  var student=(name:"siva",year:3,isPlaced:true,maritalStatus:"single");
  print("Name is ${student.name}");
  print("Year is ${student.year}");
  print("Is placed: ${student.isPlaced}");
  print("Marital status: ${student.maritalStatus}");
}