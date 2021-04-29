import { useEffect, useState } from 'react';

export function useExperience(level) {
    const [status, setStatus] = useState('jr');
    useEffect(() => {
        setStatus(level);
    }, [level]);

    return status === 'jr';
}
