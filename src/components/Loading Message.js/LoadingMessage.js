import '../../styles/components/loading-message.css';

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export function LoadingMessage(){

    return ( 
        <div className="loading-message">
            <LoadingSpinner />
            <p>Loading the data</p>
        </div>
    )
}