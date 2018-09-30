function takeANumber(currentLine, newPerson) {
    currentLine.push(newPerson)
    return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(line) {
    if (line.length > 0) {
        return `Currently serving Steven ${line.shift()}.`
    } else {
        return "The line is currently empty."
    }
}
