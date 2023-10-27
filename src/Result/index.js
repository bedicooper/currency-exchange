import "./style.css";

const Result = ({ result }) => (
    <p className="result__paragraph">
        {!!result.resultValue
            ?
            <>
                {result.amount}&nbsp;{result.from}&nbsp;{'to '}
                <strong>
                    {result.resultValue.toFixed(2)}&nbsp;{result.to}
                </strong>
            </>
            :
            `Podaj wartości i waluty aby móc obliczyć.`
        }
    </p>
);

export default Result;