import {FC, useState} from "react";
import styled from "styled-components";

function getUnits(time: number): string {
    const seconds = time / 1000;

    const min = Math.floor(seconds / 60).toString();
    const sec = Math.floor(seconds % 60).toString();
    const msec = (seconds % 1).toFixed(3).substring(2);

    return `${min}:${sec}:${msec}`;
}

export const StopWatchF: FC = () => {
    const [runningTime, setRunningTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<number>(0);
    const [laps, setLaps] = useState<number[]>([]);

    const handleClick = () => {
        if (isRunning) {
            clearInterval(timerId);
        } else {
            const startTime = Date.now() - runningTime;
            const timer: any = setInterval(() => {
                setRunningTime(Date.now() - startTime);
            });
            setTimerId(timer);
        }
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        clearInterval(timerId);
        setRunningTime(0);
        setIsRunning(false);
        setLaps([]);
    };

    const handleLap = () => {
        setLaps([...laps, runningTime]);
        getUnits(runningTime);
    };

    return (
        <>
            <div>
                <p>{getUnits(runningTime)}</p>
                <button onClick={handleClick}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleLap}>Lap</button>
            </div>
            <LapWrapper>
                {laps.length > 0 &&
                    laps.map((lap, index) => (
                        <div>
                            {index + 1}. {getUnits(lap)}
                        </div>
                    ))}
            </LapWrapper>
        </>
    );
};

const LapWrapper = styled.div`
    height: 100px;
    overflow-x: auto;
`;
