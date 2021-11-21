import styled from "styled-components";
import {StopWatchF} from "./tasks/1/Stopwatch/StopwatchF";
import CommentsList from "./tasks/2/CommentsList";
function App() {
    return (
        <Wrapper>
            <BlockWrapper>
                <StopWatchF />
            </BlockWrapper>
            <BlockWrapper>
                <CommentsList />
            </BlockWrapper>
        </Wrapper>
    );
}

export default App;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const BlockWrapper = styled.div`
    margin: 50px;
`;
