import React from "react";
import { render, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //renders component to vdom.. Arrange
    const {getByText} = render(<CheckoutForm />)
    
    //searches rendered item for text.. Act
    const header = getByText(/Checkout Form/i)

    //jest-dom check.. Assert
    expect(header).toBeInTheDocument()

});


test("form shows success message on submit with form details", () => {});
