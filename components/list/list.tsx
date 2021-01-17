import React, { useMemo, FC } from 'react';

import { Item } from 'components/item';

import styles from 'components/list/list.module.css';

interface Props {
    amountOfItems?: number;
}

export const List: FC<Props> = ({ amountOfItems = 1}) => {
    const items = useMemo(() => Array(amountOfItems).fill(Math.random()), [amountOfItems]);

    return (
        <ul className={styles.list}>
            {items.map((_item, index) => (
                <li key={`item-${index}`} className={styles['list-item']}>
                    <Item index={index} />
                </li>
            ))}
        </ul>
    )
};