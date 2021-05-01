const user_input = process.argv.slice(2);
digitsToWords(user_input);

function digitsToWords(arr){
    let answer = "";
    let words=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    for (let i=0; i<arr.length; i++){
        if (arr[i].toString().length === 1){
            answer+=words[arr[i]];
            answer+=(",");
        }

        else if(arr[i].toString().length > 1){
            let inside = arr[i].toString().split("");
            for( let k = 0; k<inside.length; k++){
                answer+=words[inside[k]];
            }
            answer+=",";
        }
    }
    let fixed_answer =answer.substring(0, answer.length-1);
    console.log(fixed_answer);
}