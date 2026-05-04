


function Article({
    id = crypto.randomUUID(),
    title = 'Titolo',
    content = 'Contenuto',
    remove,
    edit
}) {



    return (
        <>
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={() => remove(id)} className="btn btn-primary">Elimina</button>
            <button onClick={() => edit(id)} className="btn btn-primary">Modifica</button>
        </>
    )
}
export default Article