import * as React from 'react';
import { motion } from 'framer-motion';

const Path = props => (
    <motion.path fill="transparent" strokeWidth="3" stroke="currentColor" strokeLinecap="square" {...props} />
);

const plusMinus = () => (
    <button type="button">
        <svg width="20" height="20" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: 'M 3 11 L 20 11' },
                    open: { d: 'M 3 11 L 20 11' }
                }}
            />
            <Path
                variants={{
                    closed: { d: 'M 11 3 L 11 19' },
                    open: { d: 'M 11 11 L 11 11' }
                }}
            />
        </svg>
    </button>
);

export default plusMinus;
