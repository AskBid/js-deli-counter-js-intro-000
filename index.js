function takeANumber(currentLine, newPerson) {
    currentLine.push(newPerson)
    return `Welcome, ${newPerson}. You are number ${currentLine.length + 1} in line.`
}
