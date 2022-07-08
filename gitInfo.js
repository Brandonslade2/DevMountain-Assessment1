/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

var gitDefinition = `git is a program that is used to track changes of a programming file. It can be used to obtain source code from users connected to each other to share`

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

var gitHubDefinition = 'GitHub is a website that serves as a ‘cloud’ method of Git. Users can share source code files through this website through various means such as repositories. Users can communicate and view other profiles using this platform'

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

var gitInitDefinition = `git Init is a command used to create a new git repository in the current directory`

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

var gitCloneDefinition = `git clone is a command used to create a copy of a repository into another directory to the specified location in the arguments.`

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

var gitStatusDefinition = `git status shows the state of a working repository in the current directory. It will also display changes and files being tracked.`

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

var gitAddDefinition = `git add will add files to the working repository in the directory as specified in the arguments`
var gitAddCode = `git add .`

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

var gitCommitDefinition = 'git committ creates a snapshot of the files that have been added to the repository of any changes.'
var gitCommitCode = `git commit -am "initial commit"`

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

var gitPushDefinition = `git push is a command that copies the files tracked into the origin location. As a result, these files are stored in the repository for review.`