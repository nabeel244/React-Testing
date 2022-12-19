import { fireEvent, render, screen } from "@testing-library/react";
import CommentForm from "../Components/CommentForm";

// describe('text cases related to button', () => {
// })    for group your test cases
import userEvent from "@testing-library/user-event";
test("Initial Conditions", () => {
  render(<CommentForm />);
  const commentInput = screen.getByRole("textbox");
  expect(commentInput).toBeInTheDocument();
  const checkbox = screen.getByLabelText("i agree to terms and conditions", {
    exact: false,
  });
  expect(checkbox).toBeInTheDocument();
  const submitButton = screen.getByRole("button", {
    name: "comment", //yeh button ka text ha
    exact: false,
  });
  expect(submitButton).toBeDisabled(); //disabled ho ga
});

test("Enable button on type and checkbox click", async () => {
  render(<CommentForm />);
  const checkbox = screen.getByLabelText("I agree to terms and conditions", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "comment", //yeh button ka text ha
    exact: false,
  });
  const commentInput = screen.getByPlaceholderText("write your comment here", {
    exact: false,
  });

  //   fireEvent.change(commentInput, { target: { value: "someting" } }); // kuch be likh sakty ho yeh input may value type ho rhe ha dummy
  await userEvent.type(commentInput, "something"); //upper and lower both are same
  //   fireEvent.click(checkbox); //when click on checkbox the button should be enabled
  await userEvent.click(checkbox);
  expect(submitButton).toBeEnabled();

  //   fireEvent.click(checkbox); // again when its untick the button should be disabled
  await userEvent.click(checkbox);
  expect(submitButton).toBeDisabled();
});
