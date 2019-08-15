import styled from 'styled-components'
const ButtonContainer = styled.button `
text-transform: capitalize;
font-size:1.4rem;
background: transparent;
border:0.5rem solid var(--lightBlue);
border-color: ${props => 
 props.card ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${prop => (prop.card ? "var(--mainYellow)" : 
"var(--lightBlue)" )};
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
curser:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s case-in-out;

&:hover{
    background: ${prop => 
    prop.card ? "var(--mainYellow)" : "var(--lightBlue)" };
    color: var(--mainBlue);
}

&:focus{
    outline:none
}

`

export default ButtonContainer