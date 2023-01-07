let left = null, right = null, operator = null
let result = false;

function save() {
    const inp = document.getElementById("top-input");
    let value = ""
    if (left === null) return;
    value += left + " "
    inp.value = value

    if (operator === null) return;
    value += operator + " "
    inp.value = value

    if (right === null) return;
    value += right + " "
    inp.value = value

    if (res) {
        let answer = 0
        switch (operator) {
            case "+":
                answer = parseInt(left) + parseInt(right)
                break;
            case "-":
                answer = parseInt(left) - parseInt(right)
                break;
            case "x":
                answer = parseInt(left) * parseInt(right)
                break;
            case "/":
                answer = parseInt(left) / parseInt(right)
                break;

        }
        value += "= " + answer
        inp.value = value
    }


}

function inputNum(num) {
    if (operator === null) {
        if (left === null) {
            left = `${num}`
        } else {
            if (num === 0 && parseInt(left) === 0) return;

            left += `${num}`
        }
    } else {

        if (right === null) {
            right = `${num}`
        } else {
            if (num === 0 && parseInt(right) === 0) return;
            right = +`${num}`
        }
    }
    save()
}