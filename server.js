const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

// Function to return a cheerful day-specific message
function getDayMessage(day) {
  switch (day) {
    case 'Monday':
      return "Start your week with energy!";
    case 'Friday':
      return "The weekend is near!";
    case 'Sunday':
      return "Enjoy your Sunday!";
    default:
      return "Have a wonderful day!";
  }
}

// Define the GET endpoint for "/assistant/greet"
app.get('/assistant/greet', (req, res) => {
  // Retrieve the "name" query parameter, defaulting to "Stranger" if not provided
  const userName = req.query.name || 'Stranger';

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = new Date().getDay();
  const dayMessage = getDayMessage(daysOfWeek[currentDay]);

  // Construct the personalized greeting and day message
  const welcomeMessage = `Hello, ${userName}! Welcome to our assistant app!`;
  const dayMessageText = `Happy ${daysOfWeek[currentDay]}! ${dayMessage}`;

  // Send the response as JSON
  res.json({
    welcomeMessage,
    dayMessage: dayMessageText
  });
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
