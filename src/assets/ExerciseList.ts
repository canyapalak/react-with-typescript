

interface Exercise {
  id: number,
  name: string;
  src: string;
  definition: string;
}
    
  export const exercises: Exercise[] = [
    {
      id: 1,
      name: "Exercise 1",
      src: "/exercise-1",
      definition: "Create a button which increases the number by one",
    },
    {
      id: 2,
      name: "Exercise 2",
      src: "/exercise-2",
      definition: "Create a toggle to show 'On' and 'Off' text",
    },
    {
      id: 3,
      name: "Exercise 3",
      src: "/exercise-3",
      definition: "Give a warning if an input is not minimum 6 characters",
    },
    {
      id: 4,
      name: "Exercise 4",
      src: "/exercise-4",
      definition: "Fetch an API and show data",
    },
    {
      id: 5,
      name: "Exercise 5",
      src: "/exercise-5",
      definition: "Update the parent string",
    },
    {
      id: 6,
      name: "Exercise 6",
      src: "/exercise-6",
      definition: "Make a calculator to sum two numbers",
    },
    {
      id: 7,
      name: "Exercise 7",
      src: "/exercise-7",
      definition: "Search a name in an array and show it",
    },
    {
      id: 8,
      name: "Exercise 8",
      src: "/exercise-8",
      definition: "Sum even numbers in an array",
    },
    {
      id: 9,
      name: "Exercise 9",
      src: "/exercise-9",
      definition: "Show a list of items with a button to remove each",
    },
    {
      id: 10,
      name: "Exercise 10",
      src: "/exercise-10",
      definition: "Show a list of items with remove and add function",
    },
  ];