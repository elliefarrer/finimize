import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    ${({ theme }) => css`
        display: flex;
        flexDirection: row;
        justifyContent: space-between;
        padding: 1.6rem;
        background: ${theme.palette.primary.light};
    `}
`;
