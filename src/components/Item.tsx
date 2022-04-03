import { memo } from "react";

type ItemProps = {
    text: string;
    onAddToWishList: (text: string) => void;
    countItemWithList: {count: number};
}

function ItemComponent(props: ItemProps) {
    return <li key={props.text}>
        {props.text} = {props.countItemWithList.count}
        <button onClick={() => props.onAddToWishList(props.text)} >add to wish list</button>
    </li>
}

export const Item = memo(ItemComponent);

