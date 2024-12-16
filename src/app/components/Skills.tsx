import { useEffect, useState } from "react";

export type Skills = {
  skills?: string[];
};

export function Skills(props: Skills): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { skills } = props;

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  }, []);

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
