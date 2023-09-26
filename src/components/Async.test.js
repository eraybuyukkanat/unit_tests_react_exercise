import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("async component",()=>{
    test('renders posts if request succeeds',async ()=>{

        //we are simulating success case with mocks

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async ()=>[{id: "p1", title: "test dummy post"}]
        });

        render(<Async />)
        
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})