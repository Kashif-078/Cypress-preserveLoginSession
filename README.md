# Cypress-preserveLoginSession
This code offers a solution for preserving a login session, allowing users to perform additional test cases without having to log in repeatedly. By setting up a session using Cypress, the code intercepts the login page request, fills in the login credentials, and asserts a successful login. Once authenticated, the session remains active, enabling users to execute subsequent test cases within the authenticated state. This approach ensures efficiency and avoids redundant login steps, enhancing the testing process for a seamless user experience.

**This code represents a test scenario for preserving a login session using Cypress. The code performs the following actions:**

The `before` hook is used to set up the login session. It starts by using `cy.session` to create a named session called "My loginSession". Within the session, it intercepts the network request to the login page using `cy.intercept` and assigns it an alias named "loginPage". Then, it visits the login page and waits for the intercepted request to complete.

Once on the login page, the code fills in the email and password fields using `cy.get` and `cy.type`. **Please note that you should change the email and password in the code to match the credentials of your project.** It then locates the login button and clicks on it using `cy.get` and `cy.click`.

After logging in, the code contains assertions to verify that the login was successful. It checks the URL to ensure it contains "/dashboard", indicating a successful login. It also verifies the presence of an alert icon and checks the text of the alert message. Finally, it clicks on a specific element with the class "fa" using `cy.get` and `cy.click`.

The `it` block represents a placeholder for a test case, allowing you to add your specific test logic and assertions within it.

**Note:** Before running the tests, make sure to change the email and password in the code to match the credentials of your project.

Overall, this code demonstrates how to set up a login session and perform actions within that session using Cypress. It showcases the use of intercepting network requests, visiting pages, filling form fields, clicking buttons, and asserting expected outcomes.

**To clone this repository and run it locally, follow these steps:**

Copy the repository's URL from the GitHub repository page.
Install Git on your machine if you haven't already.
Open a terminal or command prompt.
Navigate to the desired directory for cloning.
Run the command git clone <repository_url> (replace <repository_url> with the copied URL).
Navigate into the cloned repository's directory.
Install Cypress by running the command npm install cypress.
Once Cypress is installed, you can run the tests using either npx cypress run (CLI) or npx cypress open (Test Runner).
Now you have the repository cloned, Cypress installed, and you can run the tests locally.
