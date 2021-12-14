const HeaderItem = (props) => {
    const { id, name, className } = props.item

    return (
        <li key={id} className={className}>{name}</li>
    )
}

export default HeaderItem;