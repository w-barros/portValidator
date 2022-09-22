function isValidPort(port: string): boolean {
  return (parseInt(port) > 0 && parseInt(port) <= 65535)
}

function isValidPortRange(range: string): boolean {
  if (range.split("-").length != 2) {
    return false
  }

  let rangeStart = range.split("-")[0]
  let rangeEnd = range.split("-")[1]


  // Valid port check on both ends
  if (!isValidPort(rangeStart) || !isValidPort(rangeEnd)) {
    return false
  }

  // Valid range check - start must be less than end
  if (rangeStart >= rangeEnd) {
    return false
  }

  return true
}

function validatePorts(userInput: string): boolean {

  // Invalid combination check
  if (userInput.includes("- ") || userInput.includes(" -") || userInput.endsWith("-") || userInput.trim().length === 0) {
    return false
  }

  // Input is exactly "any" case - is allowed
  if (userInput === "any") {
    return true
  }

  // Check if contains text or is empty string - not allowed
  let letters = /[a-zA-Z]/
  if (letters.test(userInput) || userInput.trim().length === 0) {
    return false
  }

  // Input contains multiple ports/ranges case
  if (userInput.includes(" ")) {

    let isInvalidInput;
    let currentPortList: string[] = [];
    let inputAsList = userInput.split(" ")

    inputAsList.forEach(element => {

      // Element is a port range case - check if it is a valid range and not repeated
      if (element.includes("-")) {
        if (!isValidPortRange(element)) {
          isInvalidInput = true;
        } else {
          currentPortList.includes(element) ? isInvalidInput = true : currentPortList.push(element)
        }
      }

      // Element is a single port case
      else if (!isValidPort(element)) {
        isInvalidInput = true;
      } else {
        currentPortList.includes(element) ? isInvalidInput = true : currentPortList.push(element)
      }
      return true
    });
    if (isInvalidInput) {
      return false
    }

    // Input is a single port or single range case (no " ")
  } else {

    // Single range case
    if (userInput.includes("-")) {
      if (!isValidPortRange(userInput)) {
        return false
      }
    }

    // Single port case
    return isValidPort(userInput)
  }
  return true
}

export {validatePorts}
export {isValidPort}
export {isValidPortRange}