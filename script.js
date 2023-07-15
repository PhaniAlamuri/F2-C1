/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80, profession:"developer" },
    { id: 2, name: "jack", age: "20", marks: 85, profession:"developer"},
    { id: 3, name: "karen", age: "19", marks: 35, profession:"admin" },
  ];
  
  function PrintStudentswithMap() {
    let stdWithProffessionDev = arr.map((std) => {
      if(std.profession === "developer"){
        return std;
      } else {
        return;
      }
    })
    console.log(stdWithProffessionDev);
  }
  
  function PrintStudentsbyForEach() {
    let stdWithProffessionDev = arr.forEach((std) => {
      if(std.profession === "developer"){
        console.log(std);
      }
    })
  }
  
  function addData() {
    let std = {id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(std)
    console.log(arr);
  }
  
  function removeFailedStudent() {
    let removedArr = arr.filter((std) => {
      return std.profession != "admin"
    })
    arr = removedArr;
    console.log(arr);
  }
  
  function concatenateArray() {
    let arr2 = [
      { id: 4, name: "manasi", age: "28", marks: 50, profession:"designer" },
      { id: 5, name: "shubham", age: "21", marks: 65, profession:"activist"},
      { id: 6, name: "lokesh", age: "29", marks: 36, profession:"cook" },
    ];
  
    let newContatinatedArray = arr.concat(arr2);
    
    console.log(newContatinatedArray);
  }
