function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length != 0) {
    for (var i=0; i < katzDeliLine.length; i++) {
      katzDeliLine.push(` ${i+1}. ${katzDeliLine}`)
    }
  return `The line is currently: ${katzDeliLine}`
  } else {
  return `The line is currently empty.`
  }
}
