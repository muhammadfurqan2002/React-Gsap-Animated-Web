import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Agence() {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/images/teamMembers/SophieA_640X960.jpg?w=640&h=960&s=439f910337452ea03953831c883a82dd",
    "https://k72.ca/images/teamMembers/CAMILLE_640X960_2.jpg?w=640&h=960&s=28b4a95be0b5d4f2d698c8a63de0c8df",
    "https://k72.ca/images/teamMembers/Claire_640X960.jpg?w=640&h=960&s=8db7275995c2d79210fcf8641b5792fc",
    "https://k72.ca/images/teamMembers/MEL_640X960.jpg?w=640&h=960&s=02d4500d30e576df52f280714e640a02",
    "https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd",
    "https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3",
    "https://k72.ca/images/teamMembers/SophieA_640X960.jpg?w=640&h=960&s=439f910337452ea03953831c883a82dd",
    "https://k72.ca/images/teamMembers/CAMILLE_640X960_2.jpg?w=640&h=960&s=28b4a95be0b5d4f2d698c8a63de0c8df",
    "https://k72.ca/images/teamMembers/Claire_640X960.jpg?w=640&h=960&s=8db7275995c2d79210fcf8641b5792fc",
    "https://k72.ca/images/teamMembers/MEL_640X960.jpg?w=640&h=960&s=02d4500d30e576df52f280714e640a02",
    "https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd",
    "https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3",
  ];
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function (elem) {
          // console.log(elem.progress)
          // console.log(Math.floor(elem.progress*imageArray.length) )
          let index;
          if (elem.progress < 1) {
            index = Math.floor(elem.progress * imageArray.length);
          } else {
            index = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[index];
        },
      },
    });
  });

  return (
    <div className="text-black">
      <div className="section1 relative py-1">
        <div
          ref={imageDivRef}
          className="h-[20vw] rounded-2xl overflow-hidden w-[15vw] absolute bg-red-500 top-36 left-[30vw]"
        >
          <img
            className="h-full w-full  object-cover"
            ref={imageRef}
            src="https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3"
            alt=""
          />
        </div>
        <div className=" font-[font2] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[18vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-16">
            <p className="text-6xl">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="section2 h-screen"></div> */}
    </div>
  );
}

export default Agence;
