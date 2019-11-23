# Release/Patch Notes

Release notes follow 0.X where X is the Sprint Number. 1.0 will be the final product handed off to the client.

# Patch 0.4 (11/10/19)

## New Software Features

### Backend/Permanent Storage

1. Permanent storage for most information

### Hosting

1. Website can be accessed by anyone by navigating to ip address (domain name yet to be finalized)

## Bug Fixes

1. Permanent Storage

## Known Bugs/Defects

1. Refreshing page logout out admin
2. Issues changing 'Recognizing Residents Tab'
3. Search functionality in News/Jobs Opportunities

# Patch 0.3 (10/20/19)

## New Software Features

### Backend/Permanent Storage

1. Permanent Storage for some information (News/Jobs)

## Bug Fixes

1. Some permanent storage 

## Known Bugs/Defects

1. Refreshing page logout out admin
2. No permanent storage for some features
3. Issues changing 'Recognizing Residents Tab'
4. Search functionality in News/Jobs Opportunities

# Patch 0.2 (9/29/19)

## New Software Features

### Jobs/Educational Opportunities (Admin and User)

1. Adding Jobs (Admin)
2. Removing/Editing Jobs (Admin)
3. View (Admin/User)

### News (Admin and User)

1. User can view news stories (new page)
2. Admins can create new story

### Surveys (Admin and User)
1. Add/Remove Survey (Admin)
2. Take Survey (User)

### Recognizing Residents Tab
1. Nominate resident in surveys
2. Resident of the month section
3. Honoring our elders section
4. Retired/Phase 4 residents

### Projects under way
1. Lists of projects currently being done by EcoDistricts
2. Search

## Bug Fixes 

1. Fixing Tab Links

## Known Bugs/Defects

1. Refreshing page logout out admin
2. No permanent storage (backend yet to be completed)
3. Issues changing 'Recognizing Residents Tab'
4. Search functionality in News/Jobs Opportunities

# Patch 0.1 (9/8/19)

## New Software Features

### Functional UI

1. Front page and tabs
2. Basic view for each tab
3. Homepage “Carousel” of Pictures
4. Summary statement

### Reporting Issues 

1. Admin and User views
2. User able to create a new issue 
3. Admin able to see all issues
4. Admin able to delete issue

### Admin Login

1. Hardcoded admin login
2. Logout

## Bug Fixes

N/A (first release)

## Known Bugs/Defects

1. Refreshing page logout out admin
2. No permanent storage (backend yet to be completed)
3. Issue with tab links

# Install Guide

## Pre-Requisites

### NodeJS

Must have NodeJS (>= v8) installed (https://nodejs.org/en/download/)

### NPM

Must have NPM (>= v6) installed. Installing NodeJS should install NPM as well.

### MongoDB

Must have MongoDB  (>= 4.0) installed (https://docs.mongodb.com/manual/administration/install-community/)

Make sure to start the MongoDB backend by following the instructions below the MongoDB installation guide.

### Operating System

Will work on MacOS, Windows, and Linux distros (Ubuntu, etc...)

## Dependent Libraries

Running the command 'npm install' in the repository will download all dependent libraries needed to run the website.

## Download Instructions for Development

### Cloning Repository

1. Open a terminal/command prompt and navigate to the directory that you want to create the repository. 
2. Enter 'git clone https://github.com/wzheng67/EcoDistricts-Hampton-Roads.git'
3. Enter the directory (cd EcoDistricts-Hampton-Roads)

### Using Zip File

1. Navigate to https://github.com/wzheng67/EcoDistricts-Hampton-Roads
2. Download Zip  by clicking on the 'Clone or Download' button and then click 'Download ZIP'
3. Navigate to the directory that you want to create the folder unzip the downloaded file
4. Enter the directory (cd EcoDistricts-Hampton-Roads)

## Build Instructions

### Production (on Local Machine)

Enter 'npm run build' in terminal

### Development (on Local Machine)

To run frontend only, enter 'npm run frontend' in terminal

To run backend only, enter 'npm run backend' in terminal

To run both, enter 'npm run dev' in terminal

## Updating Software

1. Push code to Github repository 

### On AWS/Production

2. Pull code, using 'git pull'

## Run Instructions

### Production (in AWS Terminal or SSH into AWS Host)

Once in the AWS terminal, enter 'npm run build'

## Troubleshooting Development

### Merge Conflicts

Occurs when someone is pushing code to a repository that has changed (i.e. Billy and Caleb download the code and both makes changes to the same file. Caleb pushes his changes. Then Billy pushes. There will be a conflict because the code Billy is pushing has been changed by Caleb and Git does not know what code to keep.)

To fix, look at list of displayed conflicts and correct each individually. Create another commit and push.

## Troubleshooting Installation

### NPM Install Error

Make sure latest versions of NodeJS and NPM are installed

If the latest versions have been installed, check to make sure there is enough RAM. If on an AWS terminal with low RAM, create a swap file to use storage space as RAM space (https://aws.amazon.com/premiumsupport/knowledge-center/ec2-memory-swap-file/)  

### Issue while Building - NPM

Make sure node modules have been installed (npm install)

### Issue while Building - Port already in use

Make sure no other application is using the 3000/8080 ports. If they are, close them or change port numbers in webpack.js

