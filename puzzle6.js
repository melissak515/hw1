// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match

function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}

function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

right();
getColor();
if (getColor() == "red") {
  repeatUp(3);
  getColor();
  if (getColor() != "red") {
    right();
    up();
  } else {
    left();
    up(); 
  }
} else {
  repeatDown(3);
  getColor();
  if (getColor() != "red") {
    right();
    down();
  } else {
    left();
    down();
  }
}
