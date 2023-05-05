//____________________________________ imports
import React from 'react';
import { Heading, HeadingContainer} from './header.style';
//_____________________________________________
export default function Header(){
    return(
        <HeadingContainer>
            <Heading className="head">
                SORTING VISUALIZER
            </Heading>
        </HeadingContainer>
    );
}
//_____________________________________________