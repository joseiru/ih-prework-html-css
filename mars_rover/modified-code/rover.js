var myRover = {
  position: [0,0], 
  direction: 'N'
};

var myCommand = "fffrbbblfggfsdfasfffrbblffff";

var obstacles = [
  [1,1],
  [1,5]
];

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      checkPositionOutOfLimits(rover, 0);
      break;
    case 'E':
      rover.position[1]++;
      checkPositionOutOfLimits(rover, 1);
      break;
    case 'S':
      rover.position[0]--;
      checkPositionOutOfLimits(rover, 0);
      break;
    case 'W':
      rover.position[1]--;
      checkPositionOutOfLimits(rover, 1);
      break;
  };
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      checkPositionOutOfLimits(rover, 0);
      break;
    case 'E':
      rover.position[1]--;
      checkPositionOutOfLimits(rover, 1);
      break;
    case 'S':
      rover.position[0]++;
      checkPositionOutOfLimits(rover, 0);
      break;
    case 'W':
      rover.position[1]++;
      checkPositionOutOfLimits(rover, 1);
      break;
  }; 
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };

  console.log("New Rover Direction: [" + rover.direction + "]")
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };

  console.log("New Rover Direction: [" + rover.direction + "]")
}

function sendCommand(command, rover) {
  for (var i=0; i<command.length; i++) {
    switch(command.charAt(i)) {
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBackward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log("Command Error");
    }
    if (positionIsObstacle(rover)) {
      break;
    }
  }
}

function checkPositionOutOfLimits(rover, coordinate) {
  switch(rover.position[coordinate]) {
    case 10:
      rover.position[coordinate] = 0;
      break;
    case -1:
      rover.position[coordinate] = 9;
      break;
  }
}

function positionIsObstacle(rover) {
  for (var i=0; i<obstacles.length; i++) {
    if (rover.position[0] === obstacles[i][0] && rover.position[1] === obstacles[i][1]) {
      console.log("Obstacle: [" + rover.position[0] + ", " + rover.position[1] + "]");
      return true;
    }
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  return false;
}

sendCommand(myCommand, myRover);





