import React from "react";
import axios from "axios";
import { useState } from 'react';
import {useNavigate , Link} from "react-router-dom";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        return;
      }
      console.log(name);
      const response = await axios.post("http://localhost:", {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        localStorage.setItem("id", response.data._id);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return ( 
    <div class="bg-gray-700">
    <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
    <div class="mx-auto h-full sm:w-max">
      <div class="m-auto  py-12">
        <div class="space-y-4">
          <a href="">
            
            <img src="images/logo.svg" class="w-40 hidden dark:block" alt="tailus logo" />
          </a>
        </div>
      <div class="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
        <h3 class="text-2xl font-semibold text-gray-700 dark:text-white">Register your account</h3>
        <div class="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
          <button
            class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
          >
            <div class="w-max mx-auto flex items-center justify-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5"
                viewBox="0 0 16 16"
              >
               <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg> 
              <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
                >With Google</span
              >
            </div>
          </button>
          <button
            class="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
          >
            <div class="w-max mx-auto flex items-center justify-center space-x-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <span class="block w-max text-sm font-semibold tracking-wide text-white"
                >With Github</span
              >
            </div>
          </button>
        </div>
        
  
        <form action="" class="mt-10 space-y-8 dark:text-white">
        <div>
            <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input id="" type="name" placeholder="Enter your name" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" value={name} onChange={(e) =>setName(e.target.value)}/>
            </div>
          </div>
          <div>
            <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input id="" type="email" placeholder="Enetr your email" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            </div>
          </div>
          <div>
            <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input id="" type=" password" placeholder="Enter your password" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"  value={password} onChange={(e) =>setPassword(e.target.value)}/>
            </div>
          </div>
  
          <div class="flex flex-col items-end">
            <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
              <input id="" type="password" placeholder="Confirm your password" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"  value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}/>
            </div>
            
            <button type="reset" class="-mr-3 w-max p-3">
              <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">Forgot password ?</span>
            </button>
          </div>
  
          <div>
            <button
              class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800" 
            >
              <span class="text-base font-semibold text-white dark:text-gray-900" type="submit" onClick={(e)=> addUser(e)}>Register</span>
            </button>
           <Link to="/login"><button class="text-sm hover:text-sky-900 dark:hover:text-gray-300">Login </button></Link>
          </div>
          {error ? <p style={{color:"red"}}>User already Exist</p>:""}
        </form>
       
      </div>
        <div class="border-t pt-12 text-gray-500 dark:border-gray-800">
          <div class="space-x-4 text-center">
          
            <a href="#" class="text-sm hover:text-sky-900 dark:hover:text-gray-300">Contact</a>
            <a href="#" class="text-sm hover:text-sky-900 dark:hover:text-gray-300">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>                
                                    

  )
}

export default Signup