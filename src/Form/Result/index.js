const Result = ({ result }) => (
    <p>
        {!!result.resultValue
            ?
            <>
                {result.amount}&nbsp;{result.from}&nbsp;{'to '}
                <strong>
                    {result.resultValue.toFixed(2)}&nbsp;{result.to}
                </strong>
            </>
            :
            `Podaj wartość i waluty aby móc obliczyć.`
        }
    </p>
);

export default Result;