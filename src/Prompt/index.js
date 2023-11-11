import { Container, ErrorPrompt, AnimatedImg } from "./styled";
import spinner from "./loadingSpinner.png"

export const Prompt = ({ ratesData }) => (
        <Container
            $hidden={ratesData.requestStatus}
        >
            {ratesData.error
                ?
                <ErrorPrompt>
                    Przepraszamy, wystapił błąd. Proszę spróbować poźniej.
                </ErrorPrompt>
                :
                <>
                    <div>Chwileczkę, pobieram najnowsze kursy walut...</div>
                    <AnimatedImg src={spinner} />
                </>
            }
        </Container> 
);