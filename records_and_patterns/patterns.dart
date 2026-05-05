//patterns are the way to extract,check and  matach the data from the records
//simply destruct the records
void main() {
  var users = ("bharathi", 22, "Student", "madurai");
  print(" PATTERNS FOR UNNAMED RECORDS");
  var (name, age, qualification, address)=users;
  print(name);
  print(age);
  print(qualification);
  print(address);


  print("PATTERNS FOR NAMED RECORDS");
  var clothTypes = (typeName:"cotton", price:2000, color:"blue");
  var (:typeName, :price, :color)=clothTypes;

  print(typeName);
  print(price);
  print(color);

//pattern matching
  //laptp and ts avlble is true then only it shows the availblity
  var product = (
  name: "Laptop",
  available: true
  );

  if (product case (name: "Laptop", available: true)) {
    print("Product available");
  }


  //pattern matching and extract
  var flutterPackage = (name: "provider", version:3.5);
  //it checks the name field ,if it is matchs then it extracts the version field
  if (flutterPackage case (name:"provider", :var version)){
    print(version);
  }
  else{
    print("no packages are found");
  }
}











