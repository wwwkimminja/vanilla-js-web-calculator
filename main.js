let left = null, right = null, operator = null
let result = false;
let answer = null

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

    if (result) {

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
            else if (num !== 0 && parseInt(left) === 0) left = `${num}`
            else left += `${num}`

        }
    } else {
        if (right === null) {
            right = `${num}`
        } else if (result || answer) {
            return;
        }
        else {
            if (num === 0 && parseInt(right) === 0) return;
            right += `${num}`
        }
    }
    save()
}

function inputOperator(op) {

    if (left === null && op === "-") {
        left = "-"
        save()
        return;
    }

    if (left === "-" && op === "-") {
        return;

    }

    if (op === "-" && operator !== null && right === null) {
        right = "-";
        save()
        return;
    }


    operator = op
    save()

}

function inputEqual() {
    if (left === null || right === null || !operator) return;
    if (result) {
        left = answer
        right = null
        operator = null
        answer = null
        result = false

    } else {
        result = true
    }

    save()
}