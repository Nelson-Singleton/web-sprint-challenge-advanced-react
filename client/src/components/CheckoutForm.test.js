import React from "react";
import { render, screen, getByText, getByTestId, queryByText, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    
    //renders component to vdom.. Arrange
    const { getByText } = render(<CheckoutForm />)
    //or queryByText
    
    //searches rendered item for text.. Act
    const header = getByText(/Checkout Form/i)
    
    //jest-dom check.. Assert
    expect(header).toBeInTheDocument()
    //or
    expect(getByText(/Checkout Form/i))

});


test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    //form submits successfully without any values entered, so we'll just get the name fields.
    const valueFirstName = screen.getByLabelText(/First Name/i)
    const valueLastName = screen.getByLabelText(/Last Name/i)

    //find text fields by label name, and enter data
    fireEvent.change(valueFirstName, {target: {value: "Nelson"}})
    fireEvent.change(valueLastName, {target: {value: "Singleton"}})

    //find submit button
    const submit = screen.getByRole('button', {name: /Checkout/i})
    
    //click submit
    fireEvent.click(submit)

    //find confirmation message by submitted name message
    const findMyName = screen.getByText(/Nelson Singleton/i)
    expect(findMyName).toBeInTheDocument()    
    
});
