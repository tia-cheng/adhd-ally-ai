import React from 'react';
import { Helmet } from 'react-helmet';

/* Types */
type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps>  = ({title}) => {
  return (
    <Helmet>
      <title> {title} </title>
    </Helmet>
  )
}

export default Head

//type: This is a TypeScript keyword. It means "I am about to define a custom shape for data."
//HeadProps: This is just a name you gave it. It could be HeadRules or PropsForHead. Standard naming convention is [ComponentName]Props.
//{ title: string; }: This is the rule itself.
//Key (title): The input name must be exactly "title".
//Value (string): The data passed in must be text (like "Home")

//: React.FC
//This stands for React Functional Component.
//It is a built-in TypeScript type provided by React.
//It tells the compiler: "This variable isn't just a number or a string. It is a specific kind of function that returns HTML/JSX."

//= ({ title }) => { ... }
//This is the function itself.
//Because you defined <HeadProps> earlier, TypeScript knows that the first argument here must have a property called title.
//{ title }: This extracts the title text directly so you can use it inside the function.