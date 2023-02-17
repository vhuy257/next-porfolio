import React from 'react';
import { Item } from '../../types/data-type';

import { WorkData } from './WorkData';
import WorkItem from '../WorkItem/WorkItem';

const Work: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">
                Works Experience
            </h1>
            {WorkData && WorkData.map((data: Item, key: any) => <WorkItem {...data}  key={key} />)}
        </div>
    )
}

export default Work;