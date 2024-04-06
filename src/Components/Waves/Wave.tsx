import { FC } from "react";

interface Filling {
  upperFill: string;
  LowerFill: string;
}

const Wave: FC<Filling> = ({ upperFill, LowerFill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={upperFill}
        fillOpacity="1"
        id="wave"
        d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,186.7C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
      <path
        fill={LowerFill}
        fillOpacity="1"
        id="lowerWave"
        d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,186.7C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  );
};

export default Wave;
