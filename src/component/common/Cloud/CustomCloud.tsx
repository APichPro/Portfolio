import { Cloud, ICloud } from "react-icon-cloud";
import "./CustomCloud.css";
import { useState, useEffect } from "react";
import { contexts, types } from '../../../data/constant';


export const CustomCloud = ({ skills, selectedSkill, setSelectedSkill }: any) => {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cloudProps: ICloud = {
    containerProps: {
      style: {},
    },
    options: {
      textColour: "#ECC86C",
      clickToFront: 750,
      depth: 1,
      imageScale: 0.1,
      tooltipDelay: 0,
      tooltip: windowSize.width >= 1150 ? "div" : null,
      tooltipClass: "tooltip",
      zoomMin: 0.5,
      zoom: windowSize.width >= 1150 ? 0.88 : 0.5,
      zoomMax: 0.88,
      bgOutlineThickness: 2,
      outlineMethod: "none",
      bgRadius: 10,
      padding: 50,
      fadeIn: 300,
      imageAlign: "centre",
      textHeight: 72,
      textAlign: "centre",
      initial: [-0.1, -0.14],
      maxSpeed: 0.05,
      lock: "xy",
      freezeDecel: true,
      animTiming: "Linear",
    },
    canvasProps: {
      style: {},
    },
    children:
      skills.length !== 0 ? (
        skills.map((skill: any, index: number) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            key={index}
            href={`#`}
            title={`<p>${skill.name}</p>
                    <p>${skill.score}/5</p>
                    <div><img src="${skill.context}"/><img src=${skill.type}/></div>
                    `}
            onClick={() => {setSelectedSkill(skill);console.log(selectedSkill)}}
          >
            <img src={skill.icon} alt={skill.name} height={1500} width={1500} />
          </a>
        ))
      ) : (
        <>
          <a href={`#`}>No</a>
          <a href={`#`}>skills</a>
          <a href={`#`}>found</a>
          <a href={`#`}>!</a>
        </>
      ),
  };

  return (
            <Cloud {...cloudProps} />
          );
};
