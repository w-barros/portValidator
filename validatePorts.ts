
function isValidPort(port:string): boolean {
    return (parseInt(port) > 0 && parseInt(port) <= 65535)
  }

function isValidPortRange(range:string): boolean {
    if (range.split("-").length != 2) {
      return false
    }

    let rangeStart = range.split("-")[0]
    let rangeEnd = range.split("-")[1]


    // valid port check
    if (!isValidPort(rangeStart) || !isValidPort(rangeEnd)) {
      return false
    }

    // valid range check
    if (rangeStart >= rangeEnd) {
      return false
    }

    return true
  }

function validatePorts(ports: string): boolean {

    // invalid combination check
    if (ports.includes("- ") || ports.includes(" -") || ports.endsWith("-") || ports.trim().length === 0) {
        return false
    }

    // "any" case
    if (ports === "any") {
      return true
    }

    // check if contains text
    let letters = /[a-zA-Z]/
    if (letters.test(ports) || ports.trim().length === 0) {
      return false
    }

    //multiple ports case
    if (ports.includes(" ")) {
      
      let portList = ports.split(" ")

      portList.forEach(port => {

        // port range case
        if (port.includes("-")) {
          if (!isValidPortRange(port)) {
            return false
          }
        }
        // single port case
        else if (!isValidPort(port)) {
          return false
        }

        return true

      });
    } else {
      // single range case
      if (ports.includes("-")) {
        if (!isValidPortRange(ports)) {
          return false
        }
      }

      // single port case
      return isValidPort(ports)
    }
    return true
  }

export {validatePorts}
export {isValidPort}
export {isValidPortRange}