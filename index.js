// Helper function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // Main function to use the helper function
  function calculateArea() {
    const length = parseFloat(prompt("Enter the length of the rectangle:"));
    const width = parseFloat(prompt("Enter the width of the rectangle:"));
  
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      console.log("Invalid input. Please enter valid numbers greater than zero.");
      return;
    }
  
    const area = calculateRectangleArea(length, width);
    console.log(`The area of the rectangle is: ${area}`);
  }
  
  // Call the main function
  calculateArea();