import React from 'react';
import styled from 'styled-components';

const DashBoardContainer = styled.div`
    display: flex;
`

const Panel = styled.div`
    border: 1px solid #EEE;
    border-radius: 4px;
    width: 300px;
    height: 300px;
    margin: 4px;
`

function Dashboard() {
    return (
        <DashBoardContainer>
            <Panel></Panel>
            <Panel></Panel>
            <Panel></Panel>
        </DashBoardContainer>
    )
}

export default Dashboard;
