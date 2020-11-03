# Take-Home Exercise for Sezzle

Deployed live on [Heroku](https://pacific-oasis-27459.herokuapp.com/).

## Objectives

"Create a web app using any language which logs calculations as they happen and shares those calculations with everyone connected to the app.

For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4".This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest. The calculator only needs to implement basic arithmetic operations, although you can add other math functions if you would like to impress. But don't forget to meet the basic requirements of the exercise first!

The app must be hosted and deployed to be publicly accessible to engineers at Sezzle so that we can grade the project. The deliverables include both the deployed application and the source code hosted at a site like Github."


## Approach

I chose to use React with functional components since it's been a while since I've coded a full stack app in React and I've never really explored using functional components in the same way I've used class components. At the beginning of the project I thought this would be a great use case for WebSockets (which I've also been wanting to give a try) because I know they can be used for real-time unsolicited updates when there's new information in lieu of constant requests to the database. I was looking at [this tutorial](https://www.pluralsight.com/guides/using-web-sockets-in-your-reactredux-app) that uses Redux with websockets, so I set up redux and sagas. 

However, the socket.io implementation felt more time consuming and complicated than the time I gave myself for this project, so I opted to send a GET request for history every second from the app. This doesn't feel ideal and is not technically an immediate update every time a user runs a calculation, but seems acceptable for the scope and use cases of this project, where no user needs the result of a calculation in order to run their own.

Once I had the app performing the necessary tasks of running, storing, and displaying calculations, I had some fun with styling. I recycled a lot of the code for the calculator display from [this school project](https://github.com/haley-r/server-side-calculator-jquery).


## How to Run

 Download the code, then:

    npm install
    npm run server
    npm run client

Navigate to http://localhost:3000 to view the app in the browser.


## How to Use

Use the calculator interface like a physical calculator. The display will only show the first number, second number, or answer at any given time. Once the calculation is run with the 'equals' button, it will be stored to the database and viewable by all users of the app. If you would like to use an answer for your next calculation, you can select an operator after completing the calculation and the last answer will become the first number of the current calculation.


## Technologies Used

- React.js
- node
- express
- postgreSQL
- redux/sagas
- axios
- CSS


## What Went Well

Though it took much longer than expected, I'm pleased with how much I learned about functional components and WebSockets (even though I didn't use the latter in the end). This was a great all-around refresher exercise for full-stack React apps and I'm looking forward to revisiting app ideas with new information. It also gave me a lot to think about when it comes to making decisions about when to use certain kinds of technologies vs. when simpler would do the job just fine.


## Areas for Improvement

I think the code could be a little cleaner overall/moved into modules, and that adding Redux and Sagas wasn't really necessary for this project.The CSS was fast and messy (though it wasn't the focus of the project) and the class names and IDs in the JSX are probably overboard.

I didn't concern myself too much with mathematical accuracy for this exercise, and truncated numbers in arbitrary ways so it wouldn't get too messy. There's definitely a better way!

The biggest area for improvement is sticking to a timeline/scoping the project. Part of what took me so long was being ambitious with using this exercise as a reason to learn and brush up on skills I've been meaning to anyways (which I would definitely do again, to some extent), but more research ahead of time might have swayed me a different way and saved a lot of time and kept the project simpler.


## Next Steps / Ideas for Continuation of Concepts Used

I would love to learn more about WebSockets and updating without sending requests all the time. Even locally it seemed to slow things down.

It would also be fun to try to mark different users' calculations with different colors, or somehow be able to convey which results in the history are one's own without having to do complicated auth or usernames. This seems like something WebSockets could help with as well.


