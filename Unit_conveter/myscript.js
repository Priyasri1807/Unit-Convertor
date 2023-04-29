function convert() {
    const inputValue = document.getElementById("inputValue").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    let result;
    if (fromUnit === "meter") {
      if (toUnit === "kilometer") {
        result = inputValue / 1000;
      } else if (toUnit === "mile") {
        result = inputValue / 1609.34;
      }else if (toUnit === "centimeter") {
        result= inputValue / 100;
      } else if (toUnit === "inches") {
        result = inputValue * 39.370;
      } else if (toUnit === "yards") {
        result = inputValue * 1.0936;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "kilometer") {
      if (toUnit === "meter") {
        result = inputValue * 1000;
      } else if (toUnit === "mile") {
        result = inputValue / 1.60934;
      } else if (toUnit === "centimeter") {
        result = inputValue * 100000;
      } else if (toUnit === "inches") {
        result = inputValue * 39370;
      } else if (toUnit === "yards") {
        result = inputValue * 1093.6;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "mile") {
      if (toUnit === "meter") {
        result = inputValue * 1609.34;
      } else if (toUnit === "kilometer") {
        result = inputValue * 1.60934;
      } else if (toUnit === "centimeter") {
        result = inputValue /0.0000062137; 
      } else if (toUnit === "inches") {
        result = inputValue * 63360;
      } else if (toUnit === "yards") {
        result = inputValue * 1760;
      } else {
        result = inputValue;
      }
    } else if (fromUnit === "centimeter") {
    if (toUnit === "meter") {
      result = inputValue / 100;
    } else if (toUnit === "kilometer") {
      result = inputValue / 100000;
    } else if (toUnit === "miles") {
      result = inputValue /0.0000062137; 
    } else if (toUnit === "inches") {
      result = inputValue * 0.39370;
    } else if (toUnit === "yards") {
      result = inputValue * 0.010936;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "inches") {
    if (toUnit === "meter") {
      result = inputValue / 39.370;
    } else if (toUnit === "kilometer") {
      result = inputValue / 39370;
    } else if (toUnit === "centimeter") {
      result = inputValue / 0.39370; 
    } else if (toUnit === "miles") {
      result = inputValue * 0.000015783;
    } else if (toUnit === "yards") {
      result = inputValue * 0.027778;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "yard") {
    if (toUnit === "meter") {
      result = inputValue / 1.0936; 
    } else if (toUnit === "kilometer") {
      result = inputValue / 1093.6;
    } else if (toUnit === "centimeter") {
      result = inputValue /0.010936; 
    } else if (toUnit === "miles") {
      result = inputValue * 0.00056818;
    } else if (toUnit === "inches") {
      result = inputValue * 36;
    } else {
      result = inputValue;
    }
  }
    
  
    document.getElementById("result").innerHTML = result + " " + toUnit;
  }
  
  