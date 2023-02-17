import { Item } from '../../types/data-type';

const WorkItem: React.FC<Item> = (dataItem: Item) => {
    const { title, time, description } = dataItem;
    return (
        <div className="work-item mt-8">
            <div className="company-name flex justify-between">
                <h2 className="text-slate-700 font-semibold">{title}</h2>
                <span className="text-rose-700 font-semibold">{time}</span>
            </div>
            <div className="content bg-white rounded-md mt-2 p-6">
                <ul>
                    {description && description.map((item: string, key) => <li className="mt-2" key={key}>- {item}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default WorkItem;