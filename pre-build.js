var fs = require('fs');
var str = `
export const environment = {
    production: true,
};
`;
fs.writeFile("./src/environments/environment.prod.ts", str, function(err) {
   if(err) {
      return console.log(err);
   }
    console.log("The file was saved!");
});