## Introduction and Premise

Hey Jalon, let's use this repository as a home base for practice problems. I'll create folders with instructions inside, similar to how a code sample from a company may look. I'll have you create your solutions on a branch of this repository, push that branch up, and open a PR so I can provide feedback on your code easily. If any of this confuses you, don't worry! I'll write some instructions.

As for the problems: try your absolute best to follow directions. Some of the instructions will be a little strange - that's on purpose! One of the things we look for in code samples is the ability to follow instructions.

### Cloning the repo

I know you have git setup, since you've been working on projects on GitHub for your class. I'm not positive they have taught you cloning down an existing repo - so if they havent just hit the "Code" button part way up this page and copy the url (`https://github.com/jalontuttle/Work-Day-Scheduler.git`). Then, run the following command in a terminal to clone the repo `git clone https://github.com/jalontuttle/Work-Day-Scheduler.git`.

### Creating a branch

When you clone the repo, you will be on the Main branch. I went ahead and locked Main so you won't be able to push directly to it (that's incredibly common in the real world, we don't want random people being able to push code to Main and break it!). To be able to get code into the main branch, you'll need to create a branch like this:

`git checkout -b jalon-branch-name`

Note the `-b` here, that means "create a new branch". If you were switching to a branch you already made, then you would leave that out.

### Committing and pushing changes

I am pretty certain you already know how to do this, but just in case you don't, you'll want to make changes while on your new branch, then add them to a commit:

```
git add .
git commit -m "a message that describes the work done in the commit"
git push
```

you may notice the first time you push that you'll get an error along the lines of

```
fatal: The current branch jalon-branch-name has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin jalon-branch-name
```

just follow the directions and run the command it recommends:
`git push --set-upstream origin jalon-branch-name`

### Putting in your Pull Request

Now that your code has been pushed up, it will exist on github, but not on the main branch. To get it into main, you'll need to put in a pull request. In GitHub, you should see a big "Compare & pull request" button. If it isn't there, then you'll have to go to the "Pull Requests" tab and click "New Pull Request". Fill out the form, selecting `main` as the base and `qw-test` as the compare. Then click "Create Pull Request". This will create a nice area for me read all your code, make comments, etc.
