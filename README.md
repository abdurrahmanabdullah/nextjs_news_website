This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!--  next js inmportant note  -->

Install Tailwind CSS IntelliSense from the Extensions marketplace.

Restart VS Code after installing.

👉 Link: Tailwind CSS IntelliSense
comment =?cnt +/
///use Shadcn

for image download=>https://unsplash.com/
create next js project =>npx create-next-app@latest
folder structure => layout.js(structure ) and page.js (Content) ||page.js is root file

use hook ,use korle client component e convert korte hobe must
kono function or event ,button related,client interactive dorkar then client e convert korte hobe

<!-- git all important note  -->

// get all git branch
git branch -a
/// get remote git hub location /address
git remote -v
///Remove the Old Remote
git remote remove origin

//add the new remote
git remote add origin https://github.com/akibur-rahman-wix-buddy/barlew_app.git

//Fetch All Remote Branches
git fetch origin
then git add .
//change branch
git checkout -b abdullah origin/Abdullah

git clone -b abdullah --single-branch https://github.com/akibur-rahman-wix-buddy/barlew_app.git

<!-- type script important note  -->

js=>let x=20
tsc=>let x:number=20; before run time we can control type and handle error
tsc index.ts->indx.js->node index.js
///when compile ts then in cmd write =>tsc index.ts --watch //for watch flag it automatically compile in js so no need to repetedly compile after compile write node index.js

function addNumber(num1:number,num2:number){
console.log(num1+num2);}
addNumbers(20,30);
addNumbers(20,"33");//33 errror show korbe bcz it is string but i define number

///=============
let userId :number;
let firstName :string;

userId=101;
userName="Abdullah"
///==================
let userId :string | number | boolean;
userId="102";
userId=101;
userId=true;

///=================
let userName :string [];
let userName :Array<string>;
userName=["anis","abdullah","robi"];
console.log(userName[0]);
////------
let multipleTypes:(string | number)[];
multipleTypes=[1,"name"];

////=============
mixed data -key,value
let user:[number,string];
user=[101,"abdullah"];
console.log(user);
