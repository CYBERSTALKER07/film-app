import React from 'react';
import styles from './Search.module.css';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search}><input type="text" placeholder="Search..." /></div>
            
        </div>
    );
};

export default Search;