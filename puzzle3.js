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
    repeatDown(3);
    right();
    right();
    setColor("yellow");
  }
  if (getColor() == "red") {
    repeatDown(3);
    right();
    right();
    setColor("red");
  }
  if (getColor() == "blue") {
    repeatDown(3);
    right();
    right();
    setColor("blue");
  }
  if (getColor() == "green") {
    repeatDown(3);
    right();
    right();
    setColor("green");
  }
}

repeatDown(2);
getColor();
color();
right();
right();
up();
