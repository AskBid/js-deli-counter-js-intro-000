function takeANumber(currentLine, newPerson) {
    currentLine.push(newPerson)
    return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(line) {
    if (line.length > 0) {
        return `Currently serving ${line.shift()}.`
    } else {
        return "There is nobody waiting to be served!"
    }
}

function currentLine(line) {
    if (line.length > 0) {
        var i
        var list
        for (i = 0, i < line.length, i++) {
            // list.push(` ${i}. ${line[i]},`)
            list += ` ${i}. ${line[i]},`
        }
        return `Currently serving ${line.shift()}.`
    } else {
        return "The line is currently empty."
    }
}
