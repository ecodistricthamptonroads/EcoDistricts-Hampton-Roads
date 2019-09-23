
Project for Junior Design

Project Workflow

For each Issue:

1. Create New Branch

git checkout -b <IssueName>

2. Do code changes
3. Checkout master and see if merge works

git checkout master
git pull

4. Merge your branch into master

git merge <IssueName>

5. Make sure master works once merged

npm run dev

6. Checkout your branch again

git checkout <IssueName>

7. Push to your remote branch

git push origin <IssueName>

8. Make a pull request on GitHub

Click the 'new pull request' button when you are on your branch on GitHub

9. Have someone else review it

After an issue has been merged into master, move the issue in ZenHub


Troubleshooting:

If you run into npm errors, delete the package-lock.json file and run 'npm install' again.

If master is broken, look at commit history and talk to whoever commited last.