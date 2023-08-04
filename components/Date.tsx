import { parseISO, format } from 'date-fns';
import React from 'react'

interface DateProps {
    date: string
}

const BlogDate = ({ date }: DateProps) => {
    const theDate = parseISO(date);
    console.log(theDate)
    return (
        <time dateTime={date}>{format(theDate, 'LLLL d, yyyy')}</time>
    )
}

export default BlogDate