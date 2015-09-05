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

function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

function color() {
  if (getColor() == "yellow") {
    down();
    setColor("yellow");
    right();
    right();
  }
  if (getColor() == "red") {
    down();
    setColor("red");
    right();
    right();
  }
  if (getColor() == "blue") {
    down();
    setColor("blue");
    right();
    right();
  }
  if (getColor() == "green") {
    down();
    setColor("green");
    right();
    right();
  }
}

right();
repeatDown(4);
getColor();
color();
up();
right();
color();
