const Viewer = ({result}) => {
    return(
        <div className="viewer">
            <h2>연습 - 계산 버튼</h2><br />
            <p>결과 : <span>{result}</span></p>
        </div>
    );
}

export default Viewer;