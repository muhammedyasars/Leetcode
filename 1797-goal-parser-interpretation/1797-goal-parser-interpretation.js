/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result=[]
    for(let i=0;i<command.length;i++){
        if(command[i]=="G"||command[i]=="a"||command[i]=='l'){
              result.push(command[i])
        }else if(command[i]=="("&&command[i+1]==')'){
            result.push("o")
        }
    }
    return result.join('')
};