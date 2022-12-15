import React from 'react'

const TodoList = () => {
  return (
    <div class="bg-gray-500">
<nav class="flex flex-wrap items-center justify-between p-12 ">
    <div class="w-auto lg:order-2 lg:w-1/5 lg:text-center">
        <a class="text-xl font-semibold text-gray-800 font-heading" href="#">
            TODO LIST
        </a>
    </div>
    <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>
                    Menu
                </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                </path>
            </svg>
        </button>
    </div>
    <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
        <a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="/">
            Home
        </a>
        <a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="https://github.com/jatinfoujdar">
           Code 
        </a>
        <a class="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
            Galery
        </a>
    </div>
    <div class="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
        <a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="https://www.linkedin.com/in/jatin-foujdar-066314247">
            Linkdin
        </a>
        <a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="https://github.com/jatinfoujdar">
           Github
        </a>
        <a class="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="https://jatinfoujdar32.netlify.app/">
            Portfolio
        </a>
    </div>
</nav>

<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans ">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
            <div class="flex mt-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
                <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>
        </div>
        <div>
            <div class="flex mb-4 items-center">
                <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
          	<div class="flex mb-4 items-center">
                <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
        </div>
    </div>
</div>
</div>
 
  )
}

export default TodoList