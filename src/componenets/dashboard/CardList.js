import React from 'react';
import { faBook, faBookReader, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const cardData = [
        {
            title: "BORROWED",
            count: 150,
            colors: "success",
            icon: faBook
        },
        {
            title: "RETURNED",
            count: 30,
            colors: "warning",
            icon: faBookReader
        },
        {
            title: "VISITORS",
            count: 350,
            colors: "info",
            icon: faUsers,

        },
        {
            title: "NEW MEMBER",
            count: "58",
            colors: "primary",
            icon: faUserPlus
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt, id ) => <Card data={dt} idx={id} />)}
        </div>
    );
}
