let TotalMemory = 16000;
let cpu = [];
let totalES = 2;
let totalDisc = 2;

export const ValidatePriority = (object) => {
  if (object.priority === 0) RealTime();
};

export const ValidateMP = (array) => {
  let lessMemory = 0;
  for (let i = 0; i < array.length; i++) {
    lessMemory += lessMemory + parseInt(array[i].mb);
  }
  return (TotalMemory -= lessMemory);
};

export const Time = (object) => {
  let time = new Date();
  let initTime = object.arrivalTime;
  for (let i = 0; i < object.processorTime; i++) {
    let entryTime = time.getSeconds();
  }
};

export const ValidateES = (object) => {
  if (object.es === 1) {
    return (totalES -= 1);
  }
};

export const ValidateDisc = (object) => {
  if (object.disc === 1) totalDisc -= 1;
};

export const RealTime = (inRealTime) => {};

export const feedback = (inObject) => {};

export const MakeObjects = (object, array, waitArrayReal, waitArray) => {
  const arrayOfObjects = [];
  for (let i = 0; i < array.length; i += 6) {
    object.id = [i / 6];
    object.arrivalTime = array[i];
    object.priority = array[i + 1];
    object.processorTime = array[i + 2];
    object.mb = array[i + 3];
    object.es = array[i + 4];
    object.disc = array[i + 5];
    ValidateES(JSON.parse(JSON.stringify(object)));
    ValidateDisc(JSON.parse(JSON.stringify(object)));
    if (ValidateMP(array) !== 0) {
      if (totalES > 0 && totalDisc > 0) {
        if (arrayOfObjects.length < 4)
          arrayOfObjects.push(JSON.parse(JSON.stringify(object)));
      } else if (object.priority === 0)
        waitArrayReal.push(JSON.parse(JSON.stringify(object)));
      else waitArray.push(JSON.parse(JSON.stringify(object)));
    }
  }

  return arrayOfObjects;
};

export const WaitRow = (actualProcess, array) => {
  let number = array.length - actualProcess.length;
  for (let i = 0; i < number; i++) {}
};

export const readTextFile = (file, _callback) => {
  const rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        const allText = rawFile.responseText;
        const finalArray = allText.replace(/\n/gi, ",").split(",");
        _callback(finalArray);
      }
    }
  };
  rawFile.send(null);
};
