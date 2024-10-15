# dynamic-staff-directory

# TODO
1. Set Up Project Environment
- [X] Initialize React project with Tailwind CSS w/ Vite
- [X] Create project structure and file organization
- [X] Install necessary dependencies
- [X] Set up mock employee database (JavaScript array)
2. Backend/Database Setup
- [X] Implement mock database function to retrieve employee data
- [X] Simulate 1-second delay for API calls
- [X] Create a server-side function for querying employees with pagination (using startCursor and count)
3. Frontend Development
- [X] Design the employee card component using Tailwind CSS
- [X] Design the "Load More" button and loading spinner
- [X] Display the first 20 employees using server-side rendering (getServerSideProps)
- [ ] Implement random background colors for each employee tag
- [X] Fetch more employees when "Load More" button is clicked (server action)
4. Functionality Implementation
- [X] Implement state management for employee data (using React useState)
- [X] Set up a "Load More" feature that fetches 12 employees on each click
- [X] Update the button to show "all loaded" when all 100 employees are fetched
- [X] Ensure smooth transitions and loading state when fetching new data
5. Server Action and API Integration
- [ ] Write server-side action to handle employee data fetching using use-server
- [ ] Create client-side request logic for fetching new employees from the server
- [X] Test the delay and response from the fake database
6. Testing & Debugging
- [ ] Ensure server-side rendering loads the initial 20 employees correctly
- [X] Test the "Load More" button for loading new employees properly
- [X] Check for responsiveness and UI bugs
- [X] Test edge cases (like what happens if fewer than 12 employees are left to load)
7. Styling and UI Improvements
- [ ] Add responsive styles for mobile and tablet views
- [ ] Optimize the design for user experience (UX)
- [ ] Add hover effects and button states for better UI feedback
- [ ] Implement custom fonts or additional styles if needed
8. Deployment and Optimization
- [X] Set up the deployment environment (Vercel or Netlify for Next.js)
- [ ] Ensure SEO optimization for server-side rendered pages
- [ ] Test the final version of the project in production mode
- [ ] Deploy project and get a live URL for your resume
9. Final Review
- [ ] Review the project for any missing features or improvements
- [ ] Write a brief description and create a README file for the project

