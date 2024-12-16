export type Skills = {
  skills?: string[];
};

export function Skills(props: Skills) {
  const { skills } = props;
  return (
    <ul>
      {skills?.map((skill) => {
        return <li key={skill}>{skill}</li>;
      })}
    </ul>
  );
}
