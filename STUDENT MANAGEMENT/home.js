
function student(n,c,u,i,b){
    this.name = n;
    this.courses = c;
    this.unit = u;
    this.image = i;
    this.batch = b;
}



function storeData(e){
    e.preventDefault();
    let form =  document.getElementById("student-data");
    let name = form.name.value;
    let courses = form.courses.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s1= new student(name,courses,unit,image,batch)

    let data= JSON.parse(localStorage.getItem('students')) || [];

    data.push(s1);

    localStorage.setItem('students',JSON.stringify(data));

    console.log(s1);
}

function calculate() {
    let data = JSON.parse(localStorage.getItem('students')) || [];

    let obj= {};
    
for(let i=0; i<data.length; i++)
{
    if(!obj[data[i].batch])
    {
        obj[data[i].batch]=0;
    }
}

for(let i=0; i<data.length; i++)
{
    obj[data[i].batch]++;
}
  console.log(obj);
}

calculate();
