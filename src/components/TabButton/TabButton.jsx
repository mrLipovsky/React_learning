import './TabButton.css';

export default function TabButton({children, lable, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}> 
            {children}
            {lable}
            </button>
        </li>
    );
}