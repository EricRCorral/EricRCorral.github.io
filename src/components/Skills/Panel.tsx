interface PanelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  skill: string;
}

const Panel: React.FC<PanelProps> = ({ skill, children, ...restProps }) => (
  <div {...restProps}>
    <div className="logo-container">{children}</div>
    <div className="skill-text">{skill}</div>
  </div>
);

export default Panel;
