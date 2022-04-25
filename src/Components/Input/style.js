import styled from "styled-components";

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    label{
        align-self: flex-start;
        color: var(--grey-0);
        font-size: 11px;
        font-weight: 400;
        margin-bottom: 14px;
    }
`

export const ContainerInput = styled.input`
    width: 244px;
    height: 38px;
    background: var(--grey-2);
    border-style: none;
    border-radius: 4px;
    color: var(--grey-0);
    outline: none;
    padding-left: 13px;

    :focus{
        border: 0.1px solid var(--grey-0);
        background: var(--grey-3);
    }
`