const fs = require('fs');
export async function GET(request){

  let data = await fs.promises.readdir("alldata");   //read directory
  let myfile;
  let allblogs = [];
  
  for(let i=0;i<data.length;i++){     //loop to iterate through alldata
    const item = data[i];            // data[i] is filename and that is stored in item
    myfile = await fs.promises.readFile(('alldata/'+ item),'utf-8')  //file name is read with item related 
    console.log(myfile);
    
    allblogs.push(myfile)
  }
  return new Response(allblogs); 



  // const data = fs.readFileSync('alldata/Virat.json','utf-8')
  // console.log(data);
  // return new Response(data)

}



