/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
  title: "About Us"
}

const page = () => {

  return (
    <div className="max-w-3xl mx-auto p-6 rounded shadow mt-24">
   <h1 className="text-3xl font-semibold mb-6">About Us</h1>

   <p className="mb-4">Get Support When You Need It Most. Help is Just One Call or Click Away.</p>

   <p className="mb-4">Our counselors are here to listen without judgment and offer sound guidance to help you navigate life's challenges and milestones. Connect with understanding and experience to achieve new personal insights.</p>

   <h2 className="text-2xl font-semibold mb-4">Caring Support for All of Life's Transitions and Challenges</h2>
   <p className="mb-4">Relationship Troubles? We'll provide an outside perspective on how to communicate more effectively, or help you find the courage to say goodbye with grace.</p>
   <p className="mb-4">Career Setbacks? If you have been recently fired or are dealing with job instability, we can show you how to pick up the pieces, keep moving, and stand tall on your feet.</p>
   <p className="mb-4">Mental and Emotional Health Struggles? We will also explain what’s happening to you and how you can gain the strength to lead a happy and healthy life.</p>
   <p className="mb-4">Life Decisions? Unsure of what to do next? With difficult questions, we can help you determine your interests and goals.</p>
   <p className="mb-4">Do not know what to do in your life next? We can and will ask these brutal questions that will assist you in unpacking your passions and priorities. This could include Social distancing between meetings with your family and friends, never leaving the house: Take the First Step Today.</p>
   
   <p className="mb-4">Book an appointment immediately- chat with one of our expert counselors, call our office, or shoot us a call- we will be happy to hear from you. And comfortable in handling your questions. You don’t have to go through things alone!</p>

  <p>Developed by <span className='px-2 py-0.5 rounded-full bg-emerald-300/20 '>Dheeraj Dalbanjan</span></p>

    </div>
  )
}

export default page