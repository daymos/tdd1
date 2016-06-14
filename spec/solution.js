function add (string){


if(string == '') return 0

if(/^\d/.test(string)){
  rgx = /,|\n/
} else {
   initialMatch = string.match(/(?:\/\/\[)(.*?)(?=\]\n)/)[1]
   lengthToSlice = 5+initialMatch.length
   delimiters = initialMatch.split('][')
   rgx = new RegExp(delimiters.join('|'))
   string = string.slice(lengthToSlice)
}
    var negatives = []
    var out = string.split(rgx).reduce(function(a, b){
      [a, b] = [Number(a), Number(b)]
      if (b>1000) return a
      if(b<0){
        negatives.push(b)
      }
      else return a+b;
    },0)

    if(negatives.length > 0){
      return 'negatives not allowed '+ negatives
    }
    else{
      return out
    }
}
