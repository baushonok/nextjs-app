import React, { FC } from 'react';

import styles from 'components/item/item.module.css';

interface Props {
    index: number;
}

export const Item: FC<Props> = ({ index }) => (
    <div className={styles.item}>
        <a href={`list/${index}`}>item-{index}</a>
    </div>
);