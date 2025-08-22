import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work1 from "../../assets/Images/skinstric-dark.png";
import work2 from "../../assets/Images/nft-dark.png";
import work3 from "../../assets/Images/fast.png";
import work4 from "../../assets/Images/library.png";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "Skinstric",
      year: "2025",
      img: work1,
      title: "A.I. Skin Analysis Platform",
      detail:
        "A website based on a Figma design using React, CSS, and GSAP for animations. The user inputs basic information that is validated before hitting a loading state while the API responds. This fully-responsive, stylish sequence allows users to upload images or take them in real-time for the A.I. to analyze.",
      link: "https://skinstric-internship-hazel.vercel.app",
    },
    {
      client: "Frontend Simplified",
      year: "2025",
      img: work2,
      title: "NFT Marketplace",
      detail:
        "Built to host tens of thousands of NFTs and collections for users to browse through. Users can sort and individually inspect them as well as view their creators profiles. The site is fully responsive with clean API loading states and snappy user feedback.",
      link: "https://mckade-internship.vercel.app",
    },
    {
      client: "Frontend Simplified",
      year: "2025",
      img: work3,
      title: "Online Movie Search",
      detail:
        "A performant, responsive website built to allow users to search and find any movie instantly. Movies can be inspected individually and sorted alphabetically, by relevancy, or by date.",
      link: "https://react-movies-api-tau.vercel.app",
    },
    {
      client: "Frontend Simplified",
      year: "2025",
      img: work4,
      title: "Online Library Store",
      detail:
        "This website includes a fully-functional cart that users can add books to that they find by browsing the catalogue. Skeleton loading states, sorting mechanics, and the ability to inspect books individually all included.",
      link: "https://library-react-jade-psi.vercel.app",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
