void main(){
  print("The employee details");
 var emp=getEmployee();
print("Name of the employee is ${emp.name}");
print("Age of the employee is ${emp.age}");
print("Salary of the employee is ${emp.salary}");
print("Is the employee permanent? ${emp.isPermanant}");
}
({String name,int age,double salary,bool isPermanant}) getEmployee(){
  return (
  name:"siva",
  age :22,
  salary:2000.00,
  isPermanant:false
  );
}


