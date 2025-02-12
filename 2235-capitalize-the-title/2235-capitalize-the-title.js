/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let res = title.split(' ').map(a => a.toLowerCase());
    let result = [];

    for (let i = 0; i < res.length; i++) {
        let word = res[i];
        
        if(word.length>2){
           result.push( word.charAt(0).toUpperCase() + word.slice(1))
        }else{
            result.push( word)
        };
        
    }

    return result.join(' '); 
};
