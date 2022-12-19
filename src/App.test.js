import { render, screen, logRoles } from "@testing-library/react";
// logRoles use hota ha kn say element ka kya role ha
import App from "./App";

test("test 1", () => {
  // you could use it or test and 'test 1' is just name
  render(<App />); // mean working on App component
  logRoles(screen.getByTestId("myrootdiv")); // yeh myrootdiv kay sab element kay roles bataye ga jin ko use kr kay aap assertion krwa sakty ha
  const buttonElem = screen.getByRole("button", { name: "test buton" }); // mean role like heading button inputField and name in the text in button
  expect(buttonElem).toBeInTheDocument(); //buttonElem say expect kr rhy k yeh dom may present ha k nai
  // toBeInTheDocument is use to check this element is available or not
});
