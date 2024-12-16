import { useState } from "react";

export type Skills = {
  skills?: string[];
};

export function Skills(props: Skills) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { skills } = props;
  return (
    <>
      <ul>
        {skills?.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>

      {isLoggedIn ? (
        <button>Start coding</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
}
