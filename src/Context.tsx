import { createContext } from "react";

interface CursorContextProps {
  addClass: () => void;
  removeClass: () => void;
  hideFollower: () => void;
  showFollower: () => void;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export default CursorContext;
