"use client";


import { NavBar } from "@repo/ui";
import { inter } from "../fonts";
import { poppins } from "../fonts";
import { useState } from "react";



function SignInForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="mt-7 flex flex-col">

        <div className="flex flex-col gap-2">
          <span className={`${inter.className} font-thin text-sm`}>Your email address</span>
          <input
            className="mt-2 border border-gray-400 p-1 rounded-md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className={`${inter.className} font-thin text-sm mt-10`}>Password</span>
          <input
            className="mt-2 border border-gray-400 p-1 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>

        <div className="mt-14">
          <button className="border border-gray-400 bg-[#FFE55C] rounded-md p-2 w-full">Sign in</button>
        </div>

        <div className="flex gap-2 mt-7 items-center justify-center">
          <div className="border border-slate-300 flex-1"></div>
          <span className="text-md">Or sign in with</span>
          <div className="border border-slate-300 flex-1"></div>
        </div>

        <div>
          <button className="rounded-md bg-[#EEF0F2] w-full mt-7 p-2 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            <span>Google</span>
          </button>
        </div>
        <div className="mt-5 flex justify-center">
          <span className="font-thin text-blue-700 cursor-pointer">I forgot my passsword</span>
        </div>
      </div>
    </>
  )
}


function CreateAccountForm() {

  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function handleSignup() {
    try {
      const response = await fetch("http://localhost:7001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
      const data = await response.json();

      if (!data.success) {
        alert(data.error);
        return;

      }

      localStorage.setItem("token", data.token);
      alert("Account created");


    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <span className={`${inter.className} font-thin text-sm mt-7`}>Country / Region of residence</span>
          <input
            className="mt-2 border border-gray-400 border-radius-md p-1 rounded-md w-full"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className={`${inter.className} font-thin text-sm mt-10`}>Your email address</span>
          <input
            className="border border-gray-400 border-radius-md p-1 rounded-md w-full"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className={`${inter.className} font-thin text-sm mt-10`}>Password</span>
          <input
            className="border border-gray-400 border-radius-md p-1 rounded-md w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>

        <div className="mt-5">
          <ul className="list-[circle]">
            <li className="text-sm text-gray-600 ml-5">Between 8-15 characters</li>
            <li className="text-sm text-gray-600 ml-5">At least one upper and one lower case letter</li>
            <li className="text-sm text-gray-600 ml-5">At least one number</li>
            <li className="text-sm text-gray-600 ml-5">At least one special character</li>
          </ul>
        </div>

        <div className="mt-8">
          <button onClick={handleSignup} className="border border-gray-400 w-full p-2 bg-[#FFE55C] rounded-md">Resgister</button>
        </div>

        <div className="mt-6 flex gap-4 items-center justify-center">
          <div className="border flex-1 border-slate-300"></div>
          <span className="text-md">Or create an account with</span>
          <div className="border  flex-1 border-slate-300"></div>
        </div>

        <div>
          <button className="rounded-md bg-[#EEF0F2] w-full mt-7 p-2 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            <span>Google</span>
          </button>
        </div>

      </div>

    </>
  )
}

export default function Login() {


  const [activeTab, setActiveTab] = useState<"signin" | "createAccount">("signin");


  return (
    <div className="relative min-h-screen bg-slate-50">
      <NavBar />
      <div className="flex flex-col  mt-5 max-w-md mx-auto">
        <div className="mx-auto -translate-x-1/4">
          <span className={`${poppins.className} text-3xl font-semibold`}>
            Welcome to Exness
          </span>
        </div>
        <div className="flex mt-10 max-w-xl mx-auto w-full">

          <div className={`flex-1 border-b-2 pb-4 ${activeTab === "signin" ? "border-black" : "border-gray-200"}`}>

            <button onClick={() => setActiveTab("signin")}
              className={` text-xl font-thin ${inter.className} cursor-pointer w-full 
            `}
            >Sign in</button>

          </div>


          <div className={`flex-1 border-b-2 pb-4 ${activeTab === "createAccount" ? "border-black" : "border-gray-200"}`}>

            <button onClick={() => setActiveTab("createAccount")}
              className={` text-xl font-thin ${inter.className} cursor-pointer w-full 
            `}
            >Create an account</button>

          </div>



        </div>
        {activeTab === "signin" ? <SignInForm /> : <CreateAccountForm />}



      </div>

      <div className="w-2/5 text-sm text-gray-600 space-y-1 mt-20 ml-[20rem]">
        <p>
          Vanvest Limited is registered and regulated by the Financial Services Commission of the Republic of Vanuatu under registration number 700276 and has its registered office at Law Partners House, Kumul Highway, Port Vila, Vanuatu.
        </p>

        <p>
          This website is operated by Vanvest Limited.
        </p>
        {/* <div className="flex justify-start">

      </div> */}
        <p>
          The entity above is duly authorized to operate under the Exness brand and trademarks.
        </p>

        <p>
          Risk Warning: Online Forex/CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Under no circumstances shall Exness have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any financial activity. Learn more
        </p>

        <p>
          The entity above do not offer services to residents of certain jurisdictions including the USA, Canada, Iran, North Korea, Europe, the United Kingdom and others.
        </p>

        <p>
          The information on this website does not constitute investment advice or a recommendation or a solicitation to engage in any investment activity.
        </p>

        <p>
          The information on this website may only be copied with the express written permission of Exness.
        </p>

        <p>
          Exness complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the PCI DSS requirements for our business model.
        </p>
      </div>



    </div>
  );
}

