let s1 = 'abcd'
let s2 = '1234'

let result = ""

if(s1.length === s2.length) {
	zigzagzip()
} else {
	console.log('String lengths do not match!')
}

function zigzagzip() {
	for (let i=0; i<=s1.length - 1; i++) {
  	if(i%2 == 0) {
    	result += s1[i];
    }
    else {
    	result += s2[i];
    }
  }
  
    console.log(result)
}
