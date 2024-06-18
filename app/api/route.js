const fs = require('fs');
export async function GET(request){
  const data = fs.readFileSync('alldata/player.json','utf-8')
  console.log(data);
  return new Response(data)


}



