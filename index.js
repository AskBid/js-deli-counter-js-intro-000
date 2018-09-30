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
