# Travel4Passion MERN Social Media Project

A MERN stack based project on social media application that enable user share their travel experience. It also enable users connect to friends, family and network with other friends of similar travel experience.  It is a responsive application with React at the frontend and MongoDB,  Express,  Node.Js at the backend. 


## Features

- Register and Login users
    - Posts
- Posts include text(caption) and image(s).
    - Like posts
    - Comment on posts
      - View all comments on a post
      - Deleting Comment
- Messaging
    - Realtime Messaging
- Search for users by name and location 
- Profile page shows user details and posts with following and followers menu.
    - Follow / Unfollow Users if profile page
- Edit Profile
    - Change profile picture
    - Change email - password - name
    - Add your own bio
- Password is stored in database in encrypted format 


## Userstories

### 1. Menu Toolbar

#### Narrative:
- **As a** user through a web browser 
- **I want** to be able to use the menu toolbar
- **So that** I can navigate to other pages on the travel app

**Acceptance Criteria: (Presented as scenarios below)**

**Scenario 1:**Profile Button
**Given** there is a menu toolbar with a profile button
**When** I click on the profile button
**Then** I should see my profile page

**Scenario 2:**Search Button
**Given** there is a menu toolbar with a search button
**When** I click on the search button
**Then** I should see the search page

**Scenario 3:**Create Button
**Given** there is a menu toolbar with a create button
**When** I click on the create button
**Then** I should see the ‘create’ page

### 2. Menu HomePage

Narrative:
- **As a** unregistered user through a web browser 
- **I want** to be able to register
- **So that** I can navigate as a registered user through the travel app

**Acceptance Criteria: (Presented as scenarios below)**

**Scenario 1:**Register Button
**Given** that I am on the Menu-HomePage
**AND** there is a register button
**When** I click on the register button
**Then** I should see the Register Page

**Scenario 2:**Sign in Button
**Given** that I am on the Menu-HomePage
**AND** there is a sign in button
**When** I click on the sign in button
**Then** I should see the sign in page

**Scenario 3:**About link
**Given** that I am on the Menu-HomePage
**AND** there is an About link
**When** I click on the about link
**Then** I should see the information about the application on my screen

**Scenario 4:** Closing the About link
**Given** I can see the information about the app
**When** I click on the close button
**Then** I should see the original Menu HomePage
  
### 3. Registration

Narrative:
- **As a** unregistered user through a web browser 
- **I want** to be able to register
- **So that** I can navigate as a registered user through the travel app

**Acceptance Criteria: (Presented as scenarios below)**

**Scenario 1:**Register Button
**Given** that I am on the Menu-HomePage
**AND** there is a register button
**When** I click on the register button
**Then** I should see the RegistrationPage


**Scenario 2:**Registration page
**Given** that I have entered the requested details. 
**When** I click on the submit button.
**Then** I should receive a message confirming that I have been registered.



### 4. Create a New Post

Narrative:
- **Whilst logged in to** my user profile 
- **I want** to be able to create a new post
- **So that** I can share my travel experiences on the the travel app

**Acceptance Criteria: (Presented as scenarios below)**

**Scenario 1:**Create a New Post Button
**Given** that I am on my profile Page
**When** I click on the create a new post button
**Then** I should see a new window pop up to add text and images.


**Scenario 2 :**Create a New Post Button
**Given** that I am in a pop up window
**When** I click on the submit button
**Then** I should see a message to confirm if the post is to be created now or scheduled for another time..

**Scenario 3 :**Create a New Post Button
**Given** that I have created a new post
**When** I click on the submit button
**Then** I should see a message to confirm if the post is to be created now or scheduled for another time..

**Scenario 4 :**Create a New Post Button
**Given** that I have created a new post
**When** I click on the create now button
**Then** I should see a new post has been created..

**Scenario 5 :**Create a New Post Button
**Given** that I have created a new post
**When** I click on the schedule later button
**Then** I should receive a message that the post has been scheduled with the date and time...



### 5. User Sign in Page

Narrative:
- **Whilst logged into** my user profile 
- **I want** to be able to view my user page 
- **So that** I can update my travel experiences on the travel app

**Acceptance Criteria: (Presented as scenarios below)**

**Scenario 1:** Edit to update user profile
**Given** that I am on my profile Page
**When** I click on the update button
**Then** I should see a new window pop up to update the new feed.

**Scenario 2 :**forgot password
**Given** that I signed on to my page
**When** I enter password to access my page twice error message popped up
**Then** I should see a forgotten password option to change my old password..

**Scenario 3 :**Change password
**Given** that I have have forgotten my password
**When** I click on the change password button or link
**Then** I should see a message on the change password page confirming that I can change my password ..

**Scenario 4 :**Create new password
**Given** that I have created a new password
**When** I click on the new password button
**Then** I should be able to access my profile page...

**Scenario 5 :**Sign in with username or Email
**Given** that I have sign in with my username
**When** I click on the sign in button 
**Then** I should see my profile page...

**Scenario 6 :**Sign in with Email
**Given** that I have sign in with my email
**When** I click on the sign in button 
**Then** I should see my profile page…

**Scenario 7 :**Sign out page with sign out button
**Given** that I have access the sign out page
**When** I click on the sign out button
**Then** I should receive a message ‘thank you for visiting Passion4Travel app…’


## 6. Wireframes
### Landing Page, SignIn and Register Page Wireframes
![image](https://user-images.githubusercontent.com/111147873/217080705-e55c4133-1294-47f7-8ee1-6363eac5a6be.png)

###  User Dashboard Wireframe
![Wireframe - User HomePage](https://user-images.githubusercontent.com/111147873/217080934-ad06b787-9026-4fd7-b0f6-b2f6b625c82c.jpg)

### Search Wireframe
![Wireframe - Search](https://user-images.githubusercontent.com/111147873/217080930-0569af98-0f6e-482d-aacd-d7cccb9caccd.png)

### Create Wireframe
![Wireframe -Create](https://user-images.githubusercontent.com/111147873/217080938-cfcf5368-ff28-429a-829f-83040455e706.png)

### Profile Page Wireframe
![Wireframe - Profile Page](https://user-images.githubusercontent.com/111147873/217080921-3cd509df-a2b3-4119-95e1-1cd209eaa932.png)

### Edit Profile Wireframe
![Wireframe -Edit Profile Page](https://user-images.githubusercontent.com/111147873/217080939-40ba0204-d3b7-49a5-8cd9-4f7b5a07ef16.png)

## 7. References:
https://www.w3schools.com/react/react_usestate.asp

## Session Notes/ Recorded sessions

## 8. Deployment: to be commission in the next Phase of the Project

## 9. Acknowledgement

## ALL TAs of CBF, Clare and Mariam

