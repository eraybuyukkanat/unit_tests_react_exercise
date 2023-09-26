import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe('Greeting Component', ()=>{

    //first test
    test('renders hello world as a text',()=>{
        //arrange
        render(<Greeting />)
    
        //act
    
        //assert
        const hiElement = screen.getByText('Hi',{exact: true});
        expect(hiElement).toBeInTheDocument();
    });

    //second test on same component
    test('renders "good to see you" if the button was NOT clicked',()=>{
        //arrange
        render(<Greeting />)
    
        //act
    
        //assert
        const outputElement = screen.getByText('It\'s good to see you',{exact: true});
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed!!" if the button was clicked',()=>{
        //arrange
        render(<Greeting />)

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.getByText('Changed!!');
        expect(outputElement).toBeInTheDocument();
    })

    test('does not render "good to see you" if the button was clicked',()=>{
        render(<Greeting />)

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.queryByText('good to see you',{exact: false});
        expect(outputElement).toBeNull()
    })
})
