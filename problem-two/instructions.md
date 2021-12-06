## Welcome

This is problem statement two. You can write the solution in any language you'd like.

## Goal

Create an application which can be run via the command line. Name your solution `my-solution.js`.

The goal of the application is to build up a 3 person party of adventurers to go on a quest. Each party _must_ contain one healer, one tank, and one dps. Each party member should have a name, health (a number), and one of three properties: shield amount (a number) for the tank, damage amount (a number) for the dps, and heal amount (a number) for the healer.

The application should ask the user for the adventurer's name, health, and then class. Once the class is input, the application should ask for the appropraite value depending on the chosen class.

Once all three party members have been added, the application should print the party. An example run of the application may look like this:

```
> node my-solution.js

> Enter party member name: Quinton
> Enter Quinton's health: 100
> Is the party member a healer, tank, or dps? Tank
> Enter Quinton's shield amount: 3
> Added Quinton to the party!
> Enter party member name: Sarah
> Enter Sarah's health: 30
> Is the party member a Healer, Tank, or Dps? Healer
> Enter Sarah's heal amount: 20
> Added Sarah to the party!
> Enter party member name: Theo
> Enter Theo's health: 50
> Is the party member a Healer, Tank, or Dps? Dps
> Enter Theo's damage amount: 20
> Added Theo to the party!

The party is ready:
Tank: Quinton, 100 health, 3 shield
Healer: Sarah, 30 health, 20 healing
Dps: Theo, 50 health, 20 damage
```

## Notes

We want this application to be as close to "production" code as we can. Imagine you were tasked with adding functionality to your code after you wrote it, and theoretically we wanted to build an entire game with this code being used as a starting point. As an example, this could easily be written as one large function - I'd recommend not doing that as it may make it harder to expand later. That's just one example, try to apply this logic throughout your entire development process of this example.

Generally speaking with code samples, how long it takes is not usually considered. Use this to your advantage and take your time. Feel free to step away from the computer after reading the prompt and think about your solution before writing code. Write it out on paper/whiteboard or whatever helps. That being said, I would appreciate it if you kept track of a general timeline of how long your solution took so we can discuss it in our mentorship sessions.

If you think this is too hard or will take too long, let me know. I don't want you spending too long on it if it feels overwhelming. You are also allowed/encouraged to ask questions when something from the instructions is unclear to you; however, do realize that I left some "decisions" in there for you to make on purpose.
