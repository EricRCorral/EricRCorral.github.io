interface CubeProps extends React.HTMLProps<HTMLDivElement> {
  rightFaceText: string;
  highlight: boolean;
}

const Cube: React.FC<CubeProps> = ({
  children,
  rightFaceText,
  highlight,
  ...props
}) => (
  <div className="cube" {...props}>
    <div className={`face front${highlight ? " highlight" : ""}`}>
      {children}
    </div>
    <div className={`face right${highlight ? " highlight" : ""}`}>
      {rightFaceText}
    </div>
  </div>
);

export default Cube;
