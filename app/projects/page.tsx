
import React from 'react'
import LayoutContainer from '../components/LayoutContainer'
import { Inter } from 'next/font/google';
import Image from "next/image";
import Video from 'next-video';
import DSASnakeGame from "@/videos/dsa-snake-game-demo.mp4";
import FightingGame from "@/videos/fighting-game-demo.mp4";
import Pacemaker from "@/videos/Pacemaker.mp4";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

const Projects = () => {
  return (
     <LayoutContainer>
      <div className="flex flex-col justify-center items-center w-full">
        <div className={`text-[#F31D64] page-title-responsiveness font-extrabold tracking-[3%] mt-[50px] mb-[50px]`}
          style={{
              fontFamily: inter.style.fontFamily,
            }}>
          Projects
        </div>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Image src='/doorsense.jpeg' alt='' fill className='object-cover' />
          </div>
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness add-margin-mobile"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[40px]">
              DoorSense
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              A personal embedded systems project that delivers a functional MVP adjacent to smart home monitoring devices like a Ring camera. 
              DoorSense combines an IoT edge device with a companion mobile app to provide real-time front-door awareness including live video streaming, 
              facial recognition of familiar contacts, and instant push notifications for detected persons and objects. This project is fully accessible
              on my GitHub if you're interested in more information.
            </div>
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness add-margin-mobile"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[40px]">
              LiDAR 3D Scanner
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              I developed a LiDAR scanner on TI-MSP432E401Y Texas Instruments microcontroller. 
              The main control logic & routines for the microcontroller were programmed in embedded C, which externally interfaced a stepper motor, Time-of-Flight sensor, & other components through GPIO.
              The motor & Time-of-Flight sensor were used in tandem to collect distance measurements by rotating the motor 360 degrees, stopping at several angles throughout to take measurements. An external breadboard connected
              with mechanical pushbuttons were used to provide user functionality to the scanner, such as changing the distance measurement rate, changing the direction of motor rotation, among others.
              Through scanning, the data is transmitted over UART to a PC, where a Python script using Matplotlib can visualize LiDAR data in point clouds for 3D mesh reconstruction.
            </div>
          </div>
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Image src='/2dx-final-project.jpg' alt='' fill className='object-cover' />
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Video src={Pacemaker}/>
          </div>
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness add-margin-mobile"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[40px]">
              Pacemaker
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              In a group with other individuals, I helped lead embedded development and real-time state machine design for a Pacemaker device, which was developed
              on a FRDM-K64F ARM Microcontroller. The state machine, programmed in MATLAB&apos;s Simulink, was capable of pacing multiple bradycardia operating modes, making use of
              Stateflow to develop control algorithms. In addition, I was solely responsible for developing communications protocols in Stateflow through UART, in order to 
              enable telemetry exchange with the external medical GUI software, developed by other members on the team. Visible to the left is an overview of the Simulink design.
            </div>
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness add-margin-mobile"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[40px]">
              Personal Portfolio
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              Developed a full-stack personal portfolio website using a Next.js framework and deployed on Netlify. Made use of Tailwind CSS for front-end work,
              node.js for back-end email setup, and TypeScript throughout the project. All UI/UX designs were crafted by me using Figma &#40;screenshot visible to the right&#41;. This project is publicly
              accessible on my GitHub account.
            </div>
          </div>
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Image src='/figma.png' alt='' fill className='object-cover' />
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Video src={DSASnakeGame}/>
          </div>
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[40px]">
              DSA Snake Game
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              Across the courses COMPENG 2SH4 and COMPENG 2SI3 at McMaster, we got to develop the snake game, fully based in the command line terminal.
              Initially, the game was developed independently using OOP principles. While completing 2SI3, the game&apos;s featureset became far more robust, as we 
              developed various data structures and algorithms from scratch to supplement gameplay. This DSA featurset included: Re-factoring the Snake growth algorithm
              to make use of Linked Lists, using Queues for input commands in multiplayer gameplay, as well as Binary Search Trees and Hashing.
            </div>
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%]">
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness add-margin-mobile"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[40px]">
              Multi-Player Fighting Game
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              In a group with two other individuals, I assisted in developing a multi-player fighting game, played on a single device.
              This game was programmed in Java, utilizing the libGDX game engine. This game included full menu navigation, multiple characters
              with unique movesets, Computer Player Characters &#40;CPUs&#41;, multiple stages, unlockables & more. This project is publicly accessible
              on my GitHub account. The video demo on the right shows me playing with my friend, and a CPU at the end.
            </div>
          </div>
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Video src={FightingGame}/>
          </div>
        </div>
        <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className="bg-[#1D004D] h-auto border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex stack-responsiveness justify-between items-center w-[85%] mb-[150px]">
          <div className='relative w-full max-w-[750px] aspect-video'>
            <Image src='/trafficlightcontroller.png' alt='' fill className='object-cover' />
          </div>
          <div className="flex flex-col justify-center items-center width-adjustments-responsiveness add-margin-mobile"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[40px]">
              Traffic Light Controller
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center">
              As an intro into embedded development and electronics, I designed a full traffic light control system using a finite state machine with timed phases, pedestrian inputs, & advance-green behavior.
              The main control logic was implemented in embedded C++ on an Arduino, using non-blocking timing & input-debouncing for mechanical pushbuttons. For electrical design, the microcontroller was interfaced
              via GPIO to physical breadboard mimicking traffic intersection, making use of buttons, resistors, LEDs & wires. To the right is a screenshot of an early design in TinkerCAD during development.
            </div>
          </div>
        </div>
        {/* <div className="bg-[#3A0055] h-[4px] w-[88%] mt-30 mb-30 mx-auto"/>
        <div className={`text-[#C8A3D6] second-primary-title-sizing font-bold tracking-[3%] mb-[50px]`}
          style={{
              fontFamily: inter.style.fontFamily,
            }}>
          Projects In Progress
        </div>
        <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 mb-[125px]">
          <div className="bg-[#1D004D] border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex flex-col justify-center items-center eng-academy-margins"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[60px]">
              Eng Academy
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center mb-[130px]">
              In a team with two other individuals, I am currently developing a website called Eng Academy, focusing on front-end and UI/UX design.
              The purpose of this website is to provide a one-stop-shop for engineering students of all fields to have strong academic resources and 
              interview prep. Think sort of somewhere between Khan Academy and Duolingo, but for university level engineering content. Planned for first release
              in Fall 2025!
            </div>
          </div>
          <div className="bg-[#1D004D] border-3 border-solid border-[#C8A3D6] rounded-lg py-6 px-[30px] flex flex-col justify-center items-center synthesizer-margins"
            style={{
              fontFamily: inter.style.fontFamily,
            }}>
            <div className="text-[#C8A3D6] font-semibold subtitle-text-sizing tracking-[3%] mb-[60px]">
              Digital Synthesizer
            </div>
            <div className="future-projects-text-sizing text-[#C8A3D6] tracking-[3%] text-center mb-[100px]">
              For my first foray into hardware projects, I am seeking to combine my passion for music & playing musical instruments with my interest in DSP
              and embedded systems. I plan to refactor an old CASIO synthesizer to house a set of microcontrollers & PCBs to perform both modular synthesis and
              play preset sounds. The software side would make use of existing C++ libraries, and would be controlled by a touchscreen GUI. Project is still in
              research phase, completion TBA.
            </div>
          </div>
        </div> */}
      </div>
    </LayoutContainer>  
  )
}

export default Projects