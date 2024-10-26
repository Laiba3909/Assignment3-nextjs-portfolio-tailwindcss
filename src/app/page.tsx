"use client";
import Link from "next/link";
import Image from "next/image";
import image from "../../public/myself.png";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/js.png";
import ts from "../../public/ts.png";
import next from "../../public/nextjs.png";
import tailwind from "../../public/tcss.png";
import node from "../../public/node.png";
import docker from "../../public/docker.png";
import github from "../../public/github.png";
import python from "../../public/p.png";
import mail from "../../public/mail.png";
import what from "../../public/what.png";
import link from "../../public/link.png";
import Button from "../components/button";
import { Typewriter } from "react-simple-typewriter";
export default function portfolio() {
  const phoneNumber = "923242288404";
  const message = "Hi there! I would like to inquire about...";
  return (
    <div>
      <div className="text-white mt-12 ml-5 flex justify-between ">
        <h1 className="mt-16 lg:mt-48  text-xl lg:text-6xl lg:ml-36">
          <span id="home" className="text-orange-300">I am</span>
          <Typewriter
            words={[" Laiba Noman"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        <div className="w-36 lg:w-72 lg:mt-12 -mt-3 mr-9 lg:mr-60">
          <Image className="h-40 lg:h-72" src={image} alt="" />
        </div>
      </div>
      <h1 className="text-white ml-4 -mt-12 lg:-mt-20 lg:text-3xl lg:ml-40">
        A Frontened Developer
      </h1>
      <Link href={"https://www.linkedin.com/in/laiba-noman-158663290/"}>
        <Button
          text="Hire"
          buttonStyle="w-[90px] h-5 ml-4 text-2xl mt-4 lg:ml-40 lg:mt-7 lg:text-3xl lg:w-[120px] lg:h-12 lg:text-white lg:font-bold"
        />
      </Link>
      <br />
      <br />
      <hr className="border-t-2 border-orange-400 lg:mt-48" />
      <div>
        <h1 id="about" className=" mt-10 text-2xl ml-10 text-orange-400 lg:mt-60 lg:text-5xl">About</h1>
        <div className="ml-16 lg:text-3xl lg:mt-20 text-white">
          <p >
            I am a dedicated web developer with a passion for crafting
            responsive, user-friendly websites. Specializing in front-end
            development, I use HTML, CSS, JavaScript, and frameworks like
            Next.js. I aim to create seamless web experiences with a focus on
            performance and modern design trends.
            <span className="text-orange-300">
              Always eager to learn and grow, I am constantly exploring new
              technologies and best practices.
            </span>
            Let&#39;s collaborate to bring innovative ideas to life through code and
            creativity.
          </p>
        </div>
<br />
<br />
        <br />
        <br />
        <hr className="border-t-2 border-orange-400 " />
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-orange-400 text-center text-2xl lg:text-5xl">My Skills:</h1>
      </div>
      <br />
      <br />
      <br />
      <div id="skill" className="grid grid-cols-4 gap-4 lg:ml-8 ml-2 ">
        <div className="bg-stone-800 w-20 lg:w-52 lg:h-52 lg:ml-12  h-20  rounded hover:bg-orange-400">
          <Image className="w-16 h-12 ml-2 mt-2 lg:w-44 lg:ml-3 lg:h-40" src={html} alt="" />
          <p className="text-white text-center lg:text-2xl">Html</p>
        </div>

        <div className="bg-stone-800 w-20 h-20 lg:w-52 lg:h-52  rounded hover:bg-orange-400">
          <Image className="w-16 h-12 ml-2 mt-2 lg:w-44 lg:ml-3 lg:h-40" src={css} alt="" />
          <p className="text-white text-center lg:text-2xl">Css</p>
        </div>

        <div className="bg-stone-800 w-20 h-20 lg:w-52 lg:h-52 rounded hover:bg-orange-400">
          <Image className="w-16 h-12 ml-2 mt-2 lg:w-44 lg:ml-3 lg:h-40" src={js} alt="" />
          <p className="text-white text-center lg:text-2xl">Js</p>
        </div>

        <div className="bg-stone-800 w-20 h-20  lg:w-52 lg:h-52  rounded hover:bg-orange-400">
          <Image className="w-16 h-12 ml-2 mt-2 lg:w-44 lg:ml-3 lg:h-40" src={ts} alt="" />
          <p className="text-white text-center lg:text-2xl">Ts</p>
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-3 lg:ml-48 lg:mt-16 ">
        <div className="bg-stone-800 w-20 h-24 ml-12 lg:w-52 lg:h-52 rounded hover:bg-orange-400">
          <Image className="w-16 h-12 ml-2 lg:w-44 lg:ml-3 lg:h-40 mt-2" src={next} alt="" />
          <p className="text-white text-center lg:text-2xl">Next js</p>
        </div>

        <div className="bg-stone-800 w-20 h-24 ml-7 lg:w-52 lg:h-52 rounded hover:bg-orange-400">
          <Image className="w-16 h-12 ml-2 lg:w-44 lg:ml-3 lg:h-40 mt-2" src={tailwind} alt="" />
          <p className="text-white text-center lg:text-2xl">Tailwind</p>
        </div>

        <div className="bg-stone-800 w-20 h-24 lg:w-52 lg:h-52  rounded hover:bg-orange-400">
          <Image className="w-16 h-12 ml-2 lg:w-44 lg:ml-3 lg:h-40 mt-2" src={node} alt="" />
          <p className="text-white text-center lg:text-2xl">Node js</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-2 lg:ml-60 lg:mt-16  ">
        <div className="bg-stone-800 w-20 h-24 ml-24 lg:w-52 lg:h-52 lg:ml-48 rounded hover:bg-orange-400">
          <Image className="w-16 h-12 ml-2 lg:w-44 lg:ml-3 lg:h-40 mt-2" src={docker} alt="" />
          <p className="text-white text-center lg:text-2xl">Docker</p>
        </div>
        <div className="bg-stone-800 w-20 h-24 ml-3 lg:w-52 lg:h-52  rounded hover:bg-orange-400">
          <Image className="w-16 h-12 lg:w-44 lg:ml-3 lg:h-40 ml-2 mt-2" src={github} alt="" />
          <p className="text-white text-center lg:text-2xl">Github</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="bg-stone-800 w-20 h-24 lg:ml-[670px] ml-40 lg:w-52 lg:h-52 rounded hover:bg-orange-400">
        <Image className="w-16 h-12 ml-2 mt-2 lg:w-44 lg:ml-3 lg:h-40" src={python} alt="" />
        <p className="text-white text-center lg:text-2xl">Python</p>
      </div>
      <br />
      <br />
      <hr className="border-t-2 border-orange-400 lg:mt-28" />
      <br />
      <br />
      <div>
        <h1 id="contact" className="text-center text-2xl text-orange-400 lg:text-5xl">
          Contact me
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-3">
          <div>
            <Link href={"https://www.linkedin.com/in/laiba-noman-158663290/"}>
              <Image className="w-28 lg:w-52 lg:h-48 lg:ml-96 h-24 ml-10 mt-2" src={link} alt="" />
            </Link>
          </div>

          <div>
            <Link href="mailto:your-email@example.com?subject=Hello&body=Hi there!">
              <Image className="w-28 lg:w-52 lg:h-48 lg:ml-28  h-24 ml-2 mt-2" src={mail} alt="" />
            </Link>
          </div>
          <div>
            <Link
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`}
            >
              <Image className="w-28 lg:w-52 lg:h-48 lg:-ml-40  h-24 -ml-6 mt-2" src={what} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
