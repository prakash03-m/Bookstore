import { render, screen } from "@testing-library/react"
import HomepageScreen from "./HomepageScreen"

describe('Homepage Screen component', () => {
    render(<HomepageScreen />)

    const initialMsg = screen.getByText('Welcome', { exact: false });
    expect(initialMsg).not.toBeInTheDocument;
})

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
