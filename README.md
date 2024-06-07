# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Links

- Solution URL: [github](https://github.com/ifaronti/AudioPhile-Guru-Project/tree/main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
This is a huge step for me in programming so I took my time learning the ropes. I made an error in the frontend dev by not looking at all the designs in the figma file. I was selecting a page design then flowing with that until I realized how much of the big picture could use reuseable components and so there goes my innitial start up of the project; all trashed(especially the css).

After my war with the design figma was won, I went down the rabit hole where no rabits can survive:

  - I gathered the packages I needed for the backend, innitialized my repo locally, innit my folder and got the start up packages.
  - I manually entered all the packages I needed in my package.json file with entering their versions as well then hit npm install -S while entering the devdependences as they should be

  - I grabbed my database connect string, determined all the routes needed, created a controller folder and controller files for the routes, created a route folder and route files for the router.

  - I connected to my database hiding my connect string in .env file and adding it to my gitgnore. tested my routes were working and went to work on writing the codes for the controllers.
  
  - Then I uploaded the products to database using a Schema but with a condition of {strict:false}; one time operation

  - After all my routes were live and my database connection/API routes was tested with postman, I decided the backend needed to be tested with frontend so I ran the API on local server.

  Frontend:

  - Fronted was same ol for me so after the innitial error of not looking all design images, I went from page to page writing the codes for each page were necessary and importing reusable component for the pages where necessary. I innitially had a global component that transferred data to child components but there were some cases where the child components need to make the API calls themselves to avoid errors in case users refresh pages. Basically, the reason my code base became big was because I factoring in user refreshing pages and everything in redux will be cleared, I thought about using redux-persist but I decided against it so I could practice persisting data with API calls instead.

  - once I designed all the pages and gathered their datas, I moved to write the cart logic, and checkout logic. I'm still trying to switch to mobile first workflow but I'm really used to desktop first. after all logic, I did the mobile layout. 

  - after I finished the frontend, it was time to deploy my server/API to serverless service lambda through claudiajs. I got lazy with claudiaJS and didn't read the doc. This took two days of my time for something as simple as --runtime nodejs20.x and --set-env (my environment variables)... *facepalm* #disappointedInLazySelf. Even the lambda set up to create a user for claudjs to use as access, I didn't want to read the aws instructions, I just wanted the enter two lines of codes and boom(NEVER AGAIN!! WILL I NOT READ DOCS). The set up super easy after I actually read the docs for aws IAM and claudiaJS.

  - Once the laziness cost me 4-5 days of agonizing self kicking, I finally deployed my API to lambda

  - After API deployment, I returned to my frontend code base, changed the axios.method urls to my API endpoints', refactored some of codes, and finished by adding framer-motion scroll effects to my components. 

  - Even as I type this, I'm still going to check for how I'm going to better my code base and improve many things.

### Built with
- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/)
- Flexbox
- CSS Grid
- [Express.js](expressjs.com)
- [Node.js](https://nodejs.org)
- [React-Router](https://reactrouter.com)
- [redux](https://react-redux.js.org)
- [React](https://reactjs.org/) - JS library
- [material-ui](https://mui.com/material-ui/)
- [framer-motion](https://framermotion.framer.website)
- [clauda.js](claudiajs.com)
- [aws Lambda](aws.amazon.com)
- [mongoDB](mongodb.com)
- [mongoose](mongoosejs.com)
- [axios](https://axios-http.com)
- [nodemon](https://nodemon.io)

### What I learned
I learned express.js API deployment to serverless service(lambda), I practiced use of framer-motion.

### Continued development
With this project, I have officially welcomed myself to the fullstack community. I will continue practicing fullstack application devs, getting better with aws(there's so much to learn about the service). 

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [stackoverflow](https://stackoverflow.com) - I always check stackoverflow to see if there are better ways to do whatever I'm doing or for help if I'm stuck. I didn't feel stuck throughout this project though the API deployment was crazy. Also, I was having issues with axios.delete but then I got help from stackoverflow to wrap the request body in an object (axios.delete(url, {data:{...req.body}})) I had it like axios.delete(url, {...req.body})

## Author
- Ifarontimi Akeem And All My Names
- Frontend Mentor - [@ifaronti](https://www.frontendmentor.io/profile/ifaronti)

## Acknowledgments
Thanks to Frontend Mentor, freeCodeCamp and John Smilga. A special thanks especially to John Smilga for his tutorial on node/express. That was very comprehensive. I felt confident enough to practice backend coding after watching the two parts of the freeCodeCamp tutor's videos. I added my understanding to it and my confidence level in backend is through the roof thanks to the above mentioned people/entities.
