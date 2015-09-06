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

function noColorDown() {
  while (getColor() != "red") {
    down();
    getColor();
  }  
  if (getColor() == "red") {
    right();
    right();
    getColor();
  }
}

function noColorUp() {
while (getColor() != "red") {
    up();
    getColor();
  }  
  if (getColor() == "red") {
    right();
    right();
    getColor();
  }
}
  

getColor();
noColorDown();
noColorUp();
noColorDown();
noColorUp();

while (getColor() != "red") {
    down();
    getColor();
  }  
  if (getColor() == "red") {
    right();
}
